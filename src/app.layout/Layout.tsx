
import TopNavigation from "@/app.layout/TopNavigation";
import styled from "styled-components";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <LayoutWrapper>
      <TopNavigation />
      {children}
      {/*<div className="footer-body">*/}
      {/*  <span>*/}
      {/*    Copyright © 2023 by SooAh Lee, Inc. All rights reserved.*/}
      {/*  </span>*/}
      {/*</div>*/}
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;

  .footer-body {
    padding: 20px 10px 10px;
    text-align: center;
    font-size: 8px;
    background: linear-gradient(90deg, #984fe2, #FBF9EB, #ffffff);
    opacity:0.1;
    span {
      
    }
  }
`
