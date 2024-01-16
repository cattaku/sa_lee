import styled from "styled-components";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <StyledWrapper>
      <Link href='/'>Sooah</Link>
      <div className="menu">
        <span>
          <Link href="/about-me">about me</Link>
        </span>
        <span>
          <Link href="/career">career</Link>
        </span>
      </div>
    </StyledWrapper>
  );
}

export default TopNavigation;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 20px;
  background: linear-gradient(90deg, #fcfafe, #f2e7fd, #e0c5fb, #984fe2);
  border-bottom: 0.1px solid #984fe2;
  .menu {
    display: inline-flex;
    div {
      margin: 0 10px 0 10px;
    }
  }

`
