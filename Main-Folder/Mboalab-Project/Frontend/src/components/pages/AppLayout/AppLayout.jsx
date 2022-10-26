import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import NavBar from "../NavBar";
import "./AppLayout.css";
import { Footer } from "./components";

const {  Content } = Layout;
const AppLayout = ({ location, children }) => {
  return (
    <Layout className="layout">
      <NavBar
        style={{
          margin: "auto",
        }}
      />
      <Content
        style={{
          background: "#fff",
        }}
      >
        <div
          style={{
            background: "#fff",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default AppLayout;
