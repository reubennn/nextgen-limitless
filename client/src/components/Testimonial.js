import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";
import * as S from "../styles/styled-components/styled";

/**
 * React Component to display a testimonial for the company.
 *
 * @return {Component} testimonial with quote, author etc.
 */
const Testimonial = ({ item, bgColor= "grey-shade-dark" }) => (
    <S.TestimonialContainer>
        <S.TestimonialAuthorImage
            src={item.image}
            alt={item.author} />
        <S.TestimonialText>
            {
                item.content.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))
            }
        </S.TestimonialText>
        <S.TestimonialAuthor as="h3">
            {item.author}
        </S.TestimonialAuthor >
        <S.HorizontalRuler
            color="grey-tint-lightest"
            width="5%"
            thin
            noMargin />
        {
            item.role &&
            <S.TestimonialRole as="h5">
                {item.role}
            </S.TestimonialRole>
        }
        <Icon
            xlinkHref={item.logo}
            height="100px"
            width="150px"
            id="main"
            className="logo-slider"
            bgColor={bgColor} />
    </S.TestimonialContainer>
);

Testimonial.propTypes = {
    /**
     * The item data containing information to display.
     */
    item: PropTypes.object,
    /**
     * Background color used for inverting the logo icon.
     */
    bgColor: PropTypes.string,
};

export default Testimonial;
