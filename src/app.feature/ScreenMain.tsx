import styled from "styled-components";

const ScreenMain = () => {
  return (
    <MainStyledWrapper>
      <div className="backgound-wrapper">
        main
      </div>
    </MainStyledWrapper>
  )
}

export default ScreenMain

const MainStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: url('/images/main-bg.jpg') no-repeat center center;
  background-size: cover;
  

  .backgound-wrapper {
    width: 100vw;
    height: inherit;
    background-color: blueviolet;
    opacity:0.1;
  }
`
