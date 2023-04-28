"use client";

import { Home } from "@/components/Home";
import { NavBar } from "@/components/NavBar";
import { theme } from "antd";
import styled from "styled-components";

export default function Page() {
  const { token } = theme.useToken();

  return (
    <>
      <NavBar />
      <Container bg={token.colorBgBase}>
        <Home />
        <Home />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bg};
`;
