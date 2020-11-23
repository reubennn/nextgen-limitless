/* eslint-disable max-len */
import React from "react";

import Navbar from "../components/Navbar";

import northBeachImage from "../../public/assets/images/rock-mountain-night.jpg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an About page.
 *
 * @return {Component} about page for a website
 */
const About = () => (
    <>
        <Navbar />
        <S.FlexContainer className="no-margin" column>
            <S.SectionWithBackground className="linear-gradient" url={northBeachImage} pos="top" attachment="scroll"
            >

            </S.SectionWithBackground>
            <S.MainPageBody>
                <S.Section>
                    <S.Header>About</S.Header>
                    <p>
                        It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn&apos;t the case. The deadline had arrived and the project remained unfinished.
                    </p>
                    <p>
                        All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn&apos;t anywhere to be seen. The end was coming and it wasn&apos;t going to be pretty.
                    </p>
                    <p>
                        She had come to the conclusion that you could tell a lot about a person by their ears. The way they stuck out and the size of the earlobes could give you wonderful insights into the person. Of course, she couldn&apos;t scientifically prove any of this, but that didn&apos;t matter to her. Before anything else, she would size up the ears of the person she was talking to.
                    </p>
                    <p>
                        There were little things that she simply could not stand. The sound of someone tapping their nails on the table. A person chewing with their mouth open. Another human imposing themselves into her space. She couldn&apos;t stand any of these things, but none of them compared to the number one thing she couldn&apos;t stand which topped all of them combined.
                    </p>
                    <p>
                        She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly. It seemed that she was forced to clean it every other day. Even when she was extra careful to keep things clean and orderly, it still ended up looking like a mess in a couple of days. What she didn&apos;t know was there was a tiny creature living in it that didn&apos;t like things neat.
                    </p>
                </S.Section>
            </S.MainPageBody>
        </S.FlexContainer>
    </>
);

export default About;
