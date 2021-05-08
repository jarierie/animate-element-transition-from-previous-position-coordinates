import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { context } from "../context/context";
import image from "../assets/image.jpg";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: ${(props) => props.color};
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
`;

const Main = () => {
  const ref = useRef(null);
  const dataReceive = useContext(context);
  const { data, setData } = dataReceive;
  return (
    <>
      <Container>
        <Link to='/secondPage'>
          <ImageContainer>
            <Image
              onClick={() => {
                setData(ref.current.getBoundingClientRect());
              }}
              ref={ref}
              src={image}
              alt=''
            ></Image>
          </ImageContainer>
        </Link>
      </Container>
      <Container></Container>
    </>
  );
};

export default Main;
