import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

/**
 * Uses the request body parameters to construct an email
 * to send to the website admin, informing them that someone
 * tried to get in contact.
 *
 * On success, an email is sent to the user to confirm the
 * message was received and to thank them for getting in contact.
 * and provide them a bit of information on the website.
 *
 * - Email is sent via Nodemailer SMTP.
 * - Email format is compiled using Handlebars.js (.hbs).
 *
 * @example
 * // Sends an email to the website admin informing them someone tried to
 * get in contact, and sends confirmation email to the user.
 * endpoint: ".../email/send/contact"
 * req.body {
 *   "firstName": "Gibson",
 *   "lastName": "Montgomery-Qux",
 *   "message": "I would like to discuss opportunities with Next Gen Limitless."
 *   "email": "g.m-qux@example.com"
 * }
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const sendEmail = async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    const adminEmail = process.env.SMTP_USER_EMAIL;

    /** Convert all newlines into HTML <br> to pass to Handlebars.js */
    const hbsFriendlyMessage = message.replace(/(?:\r\n|\r|\n)/g, "<br>");

    try {
        /** Nodemailer transporter object using default SMTP transport */
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            /** true for 465, false for all other ports */
            secure: false,
            auth: {
                user: process.env.SMTP_USER_EMAIL,
                pass: process.env.SMTP_USER_PASSWORD,
            },
        });

        /** Use Handlebars.js template compiler */
        transporter.use("compile", hbs({
            viewEngine: {
                layoutsDir: path.resolve(__dirname, "../templates/emails"),
                defaultLayout: false,
                /** extension of email template */
                extName: ".hbs",
            },
            /** Path to email template folder */
            viewPath: path.resolve(__dirname, "../templates/emails"),
            extName: ".hbs",
        }));

        /**
         * Async Function which uses the Nodemailer transporter
         * to send an email to the admin, informing them someone tried to get in
         * contact with Next Gen Limitless.
         *
         * @return {Transporter} Nodemailer transporter object
         */
        const sendEmailToAdmin = async () => await transporter.sendMail({
            from: `"Next Gen Limitless 🚀" <${adminEmail}>`,
            to: adminEmail,
            subject: "Someone got in contact with Next Gen Limitless 🙌",
            template: "contact-admin.min", /** Name of the template file */
            context: {
                firstName,
                lastName,
                email,
                message: hbsFriendlyMessage,
            },
            attachments: [
                {
                    filename: "ngl-logo.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/ngl-logo.png"),
                    cid: "ngl-logo.png",
                },
                {
                    filename: "social-github.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-github.png"),
                    cid: "social-github.png",
                },
                {
                    filename: "social-email.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-email.png"),
                    cid: "social-email.png",
                },
                {
                    filename: "social-linkedin.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-linkedin.png"),
                    cid: "social-linkedin.png",
                },
            ],
        });

        /**
         * Async Function which uses the Nodemailer transporter
         * to send an email to the user to let them know that
         * their message was received and to thank them for getting
         * in contact with Next Gen Limitless
         *
         * @return {Transporter} Nodemailer transporter object
         */
        const sendEmailToUser = async () => transporter.sendMail({
            from: `"Next Gen Limitless 🚀" <${adminEmail}>`,
            to: email,
            subject: "Thanks for getting in contact with us 🙌",
            template: "contact-user.min",
            context: {
                firstName,
                lastName,
                message: hbsFriendlyMessage,
            },
            attachments: [
                {
                    filename: "ngl-logo.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/ngl-logo.png"),
                    cid: "ngl-logo.png",
                },
                {
                    filename: "social-github.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-github.png"),
                    cid: "social-github.png",
                },
                {
                    filename: "social-email.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-email.png"),
                    cid: "social-email.png",
                },
                {
                    filename: "social-linkedin.png",
                    path: path.resolve(__dirname,
                        "../templates/emails/images/social-linkedin.png"),
                    cid: "social-linkedin.png",
                },
            ],
        });


        const result = await sendEmailToAdmin();

        /** Check if the email was sent to admin successfully */
        let success;
        result.accepted.map((email) => {
            if (email.includes(email)) {
                success = true;
            }
        });

        /**
         * Because the SMTP process can take some time,
         * we want to try to inform our user if an error occurred
         * as soon as possible.
         * Therefore, we will send back the response as soon as we
         * know the email the result of sending the email to the admin.
         *
         * If we wait to get the result back from sending the email
         * to the user as well, too much time would have passed,
         * so we have to make this trade-off.
         * */
        if (success) {
            res.status(200).json({
                result,
            });
            /** Now send the confirmation email to the user */
            sendEmailToUser().then((result) => {
                /** Check if the email was sent to user successfully */
                success = false;
                result.accepted.map((_email) => {
                    if (_email.includes(email)) {
                        success = true;
                    }
                });
                if (!success) {
                    console.error(result);
                    /**
                     * We could store the information in the database and
                     * try again at a later time.
                     */
                }
            });
        } else {
            res.status(500).json({
                result,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};
