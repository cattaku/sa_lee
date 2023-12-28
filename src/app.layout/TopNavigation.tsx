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
  background: linear-gradient(90deg, #ffffff, #FBF9EB, #ff8a00);
  .menu {
    display: inline-flex;
    div {
      margin: 0 10px 0 10px;
    }
  }

`
