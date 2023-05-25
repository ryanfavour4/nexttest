"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/github">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about/team">Team</Nav.Link>
        </Nav.Item>
      </Nav>
      {children}
    </>
  );
};

export default layout;
