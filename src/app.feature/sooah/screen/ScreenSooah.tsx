import styled from "styled-components";

const ScreenSooah: React.FC = () => {
  return (
    <StyledMainWrapper>
      <div id="container">
          <canvas id="pixie"></canvas>
          <div id="mountains"></div>
          <div id="grass"></div>
      </div>

      {/*<div className="text-bg">*/}
      {/*  <div className="my-name">Hello,</div>*/}
      {/*  <div className="my-position">I am front-end developer SooAh Lee.</div>*/}
      {/*</div>*/}


      {/*<div className="moon"></div>*/}
      <div className="text">
        <div className="my-name">Hello,</div>
        <div className="my-position">I am front-end developer SooAh Lee.</div>
      </div>

      {/*<div className="text-bg">*/}
      {/*  <div className="my-name">Hello,</div>*/}
      {/*  <div className="my-position">I am front-end developer SooAh Lee.</div>*/}
      {/*</div>*/}
    </StyledMainWrapper>
  );
}

export default ScreenSooah;

const StyledMainWrapper = styled.div`
  margin: 40px;
  //width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  opacity: 1;
  #container {
      overflow:hidden;
      position:relative;
  }
  #pixie {
      z-index:0;
      background:-moz-linear-gradient(top, #040429, #257eb7);
      background:-webkit-gradient(linear, left top, left bottom, color-stop(0%,#040429), color-stop(100%,#257eb7));
      width: 100%;
      height: 100%;
  }
  #mountains, #grass {
      width:100%;
      position:absolute;
      bottom:0;
  }
  #mountains {
      height:156px;
      
  .text {
    position: relative;
    white-space: pre-line;
    line-height: 3rem;
    top: 25vh;
    width: 100%;
    font-weight: 900;
    font-size: 2rem;
    color: transparent;
    -webkit-text-stroke: 0.02em rgb(255 146 104);
    z-index: 3;
  }
  //.text-bg {
  //  position: absolute;
  //  white-space: pre-line;
  //  line-height: 4rem;
  //  top: 25vh;
  //  width: 100%;
  //  font-weight: 900;
  //  font-size: 3rem;
  //  color: white;
  //
  //}
  .my-name {
    z-index: 3;
  }
  .my-position {
    justify-content: end;
    z-index: 3;
  }
  //.moon {
  //  position: absolute;
  //  width: 15rem;
  //  height: 15rem;
  //  border-radius: 50%;
  //  margin: 0 0 12rem 6rem;
  //  background-color: rgb(255 146 104);
  //  z-index: 5;
  //}
`