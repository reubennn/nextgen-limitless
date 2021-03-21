/* eslint-disable max-len */
import React from "react";

import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ResponsiveImage from "../components/ResponsiveImage";

import { typingOnLaptop } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Contact = () => (
    <>
        <Navbar className="dark-background" />
        <S.TopHeader>
            <ResponsiveImage
                className="primary-gradient"
                srcset={typingOnLaptop}
                alt="Close up of person's hands typing
                    on laptop"
                background
                gradient
                opacity={0.75} />
            <S.Header
                as="h1"
                className="feature-text uppercase"
                color="grey-tint-lightest" >
                Get in Touch with us.
            </S.Header>
            <S.Header
                as="h2"
                className="feature-text header-secondary"
                color="grey-tint-lightest" >
                We&apos;d love to hear from you.
            </S.Header>
        </S.TopHeader>
        <S.MainPageBody>
            <S.Section
                color="grey-shade-dark"
                bgColor="grey-tint-lightest">
                <S.Header as="h2" className="uppercase">
                    How can we help?
                </S.Header>
                <ContactForm />
            </S.Section>
        </S.MainPageBody>
    </>
);

export default Contact;
