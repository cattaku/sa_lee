import styled from "styled-components";

const ScreenMain = () => {
  return (
    <MainStyledWrapper>
      main
    </MainStyledWrapper>
  )
}

export default ScreenMain

const MainStyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: url('/images/main-bg.jpg') no-repeat center center;
`
