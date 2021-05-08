import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import image from "../assets/image.jpg";
import { context } from "../context/context";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  color: white;
  display: flex;
  justify-content: center;

  background-color: #0d0d0d;
  div {
  }
`;

const ImageContainer = styled.img``;

const Second = () => {
  const getContext = useContext(context);

  const ref = useRef(null);

  //animation

  const animation = () => {
    const tl = gsap.timeline();
    tl.from(ref.current, {
      // Subtract the left rect from the value of x from the getContext
      x:
        getContext.data.x -
        ref.current.getBoundingClientRect().left -
        ref.current.getBoundingClientRect().width / 4,
      y: getContext.data.y,
      width: getContext.data.width,
      height: getContext.data.height,
      delay: 1,
    });
  };

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    console.log(getContext.data);
  });
  return (
    <>
      <Container>
        <div>
          <ImageContainer ref={ref} src={image} alt=''></ImageContainer>
        </div>
      </Container>{" "}
    </>
  );
};

export default Second;
