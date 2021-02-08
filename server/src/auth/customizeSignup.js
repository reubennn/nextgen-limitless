/** dotenv config setup for loading secret environment variables */
import "../../config/loadEnv";

import axios from "axios";

/**
 * Customizes the Sign up page for Auth0.
 */
const options = {
    method: "PUT",
    url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/prompts/signup/custom-text/en`,
    headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${process.env.MGMT_API_ACCESS_TOKEN}`,
    },
    data: { "signup": { description: "Sign up to Next Gen Limitless" } },
};

axios.request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
