
import TopNavigation from "@/app.layout/TopNavigation";
import styled from "styled-components";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <LayoutWrapper>
      <TopNavigation />
      {children}
      <div className="footer-body">
        Copyright © 2023 by SooAh Lee, Inc. All rights reserved.
      </div>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0;
`
