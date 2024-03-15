import React from 'react';
import styled from "styled-components";

const HealthHeader = () => {
  return (
    <StyledUserSet>
      <ul>
        <li><span>로그인</span></li>
        <li><span>회원가입</span></li>
        <li><span>인증서안내</span></li>
        <li><span>전체메뉴</span></li>
        <li><span>Language</span></li>
        <li><span>분야별업무사이트</span></li>
      </ul>
    </StyledUserSet>
  );
}

export default HealthHeader;

const StyledUserSet = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
 
  ul {
    display: flex;
    align-items: center;
  }
  ul li {
    display: inline-block;
    padding: 0 10px 0 10px;
    font-size: 14px;
    height: 10px;
    color: #666;
  }
  ul li:not(:first-of-type) {
    border-left: 1px solid #666;
  }
`
