/* eslint-disable max-len */
import React from "react";

import oceanViewImg from ".../images/ocean-view.svg";
import satisfactionImg from ".../icons/satisfaction.svg";
import graphImg from ".../icons/graph.svg";
import storeImg from ".../icons/store.svg";
import blogImg from ".../icons/blog.svg";

/**
 * Homepage feature descriptions to provide information
 * on the Next Gen LIMITLESS company.
 *
 * @property {String} title description title
 * @property {Array} text JSX HTML elements (needs key prop) to display
 * @property {String} image image asset path url
 * @property {Bool} shrinkImage flag to shrink the image to fit
 * @property {String} gradient gradient class name used for CSS styling
 */
export const featureDescriptions = [
    {
        title: "Disruptive Innovation",
        text: [
            <p key="disruptive-innovation">
                Partnering with <strong>Next Gen LIMITLESS</strong> will provide you with the means to disrupt the market using undeniable value. It&apos;s no secret as to why our partners are coming to us for our disruptive methodologies. Leave your competitors in the dust by implementing our <em>next generation technology</em> today.
            </p>,
        ],
        image: graphImg,
        shrinkImage: true,
        gradient: "grey-orange",
    },
    {
        title: "Put Your Mind At Ease",
        text: [
            <p key="relax">
                Whatever the situation, let us take it upon ourselves to get it done right the first time, every time. Our broad range of services will cover just about anything you require. When you choose us, you&apos;ll be able to put your mind at ease. So sit back, relax and enjoy the scenery - you are in good hands.
            </p>,
        ],
        image: oceanViewImg,
        shrinkImage: false,
        gradient: "",
    },
    {
        title: "100% Satisfaction Guaranteed",
        text: [
            <p key="satisfaction-guaranteed">
                We have become very good in what we do. But if for any reason you are not satisfied with our services, we will do everything in our power to make it right.
            </p>,
        ],
        image: satisfactionImg,
        shrinkImage: true,
        gradient: "orange-purple",
    },
];

/**
 * Homepage other descriptions to provide information
 * on some other website pages / features provided.
 *
 * Is an array of objects with the property values to display.
 *
 * @property {String} title description title
 * @property {Array} text JSX HTML elements (needs key prop) to display
 * @property {String} image image asset path url
 * @property {Bool} shrinkImage flag to shrink the image to fit
 * @property {String} gradient gradient class name used for CSS styling
 * @property {String} url the url to navigate to on click
 */
export const otherDescriptions = [
    {
        title: "Store",
        text: [
            <p key="store">
                Thanks to strategic partnerships with some quality merchandise brands, we&apos;re able to stock a variety of products. With a massive range of fresh merchandise coming in regularly, now is the best time to check out the store.
            </p>,
        ],
        image: storeImg,
        shrinkImage: true,
        gradient: "grey-orange",
        url: "/store",
    },
    {
        title: "Blog",
        text: [
            <p key="blog">
                At <strong>Next Gen LIMITLESS</strong>, we believe knowledge is power. We also believe sharing is caring. For this reason, we provide useful articles on a range of topics - written by our industry experts, <em>absolutely free</em>. Jump over to our blog now!
            </p>,
        ],
        image: blogImg,
        shrinkImage: true,
        gradient: "orange-grey",
        url: "/blog",
    },
];

/**
 * About page feature descriptions to provide information
 * on the Next Gen LIMITLESS company (less description than home page).
 *
 * @property {String} title description title
 * @property {Array} text JSX HTML elements (needs key prop) to display
 * @property {String} image image asset path url
 * @property {Bool} shrinkImage flag to shrink the image to fit
 * @property {String} gradient gradient class name used for CSS styling
 */
export const aboutFeatureDescriptions = [
    {
        title: "Disruptive Innovation",
        text: [
            <p key="disruptive-innovation">
                Partnering with <strong>Next Gen LIMITLESS</strong> will provide you with the means to disrupt the market using undeniable value. Leave your competitors in the dust by implementing our <em>next generation technology</em> today.
            </p>,
        ],
        image: graphImg,
        shrinkImage: true,
        gradient: "grey-orange",
    },
    {
        title: "Your Mind At Ease",
        text: [
            <p key="relax">
                Our broad range of services will cover just about anything you require. When you choose us, you&apos;ll be able to put your mind at ease. So sit back, relax and enjoy the scenery - you are in good hands.
            </p>,
        ],
        image: oceanViewImg,
        shrinkImage: false,
        gradient: "",
    },
    {
        title: "Satisfaction Guaranteed",
        text: [
            <p key="satisfaction-guaranteed">
                We have become very good in what we do. But if for any reason you are not satisfied with our services, we will do everything in our power to make it right.
            </p>,
        ],
        image: satisfactionImg,
        shrinkImage: true,
        gradient: "orange-purple",
    },
];
