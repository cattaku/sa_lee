import styled from "styled-components";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <StyledWrapper>
      <Link href='/'>Sooah</Link>
      <div className="menu">
        <span>
          <Link href="/sooah">soo</Link>
        </span>
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
  background:radial-gradient(rgba(255,254,234,1) 20%, rgba(255,254,234,1) 35%, #B7E8EB 100%);

  .menu {
    display: inline-flex;
    span {
      margin: 0 10px 0 10px;
    }
  }

`
