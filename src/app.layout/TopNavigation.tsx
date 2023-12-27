import styled from "styled-components";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <StyledWrapper>
      <div>Sooah</div>
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
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  margin: 10px;
  display: flex;
  justify-content: space-between;
  .menu {
    display: inline-flex;
    div {
      margin: 0 10px 0 10px;
    }
  }

`
