import styled from "styled-components";
import moment from "moment";
const ClearWeather = ({currenWeather}) => {
  const currentTime = moment().valueOf();

  return (
    <StyledWrapper>
      <div className="sun-wrapper">
        <div className="sun1"></div>
        <div className="sun2"></div>
        <div className="sun3"></div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </StyledWrapper>
  )
}

export default ClearWeather

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  overflow: hidden;
  .sun-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    margin: 0 0 100px 0;
    border-radius: 20%;
  }
  .sun1 {
    margin: 100px;
    position: absolute;
    top: -10px;
    left: 150px;
    background-color: #ffc400;
    border-radius: 49%;
    width: 90px;
    height: 90px;
    padding-inline-start: 20px;
    animation-name:spinCircle;
    animation-duration:.8s;
    animation-iteration-count:infinite;
  }
  .sun2 {
      margin: 100px;
      position: absolute;
      top: 33px;
      left: 192px;
      background-color: #ffc400;
      border-radius: 48%;
      width: 84px;
      height: 84px;
      padding-inline-start: 20px;
      animation-name:spinCircle-2;
      animation-duration:.8s;
      animation-iteration-count:infinite;
    }
  .sun3{
      margin: 100px;
      position: absolute;
     top: -10px;
      left: 150px;
      background: #ffc400;
      border-radius: 48%;
      width: 70px;
      height: 70px;
      padding-inline-start: 20px;
      //transform:translate(-50%, -50%);
      animation-name:spinCircle;
      animation-duration:.8s;
      animation-iteration-count:infinite;
  }
  @keyframes spinCircle {
      from {
          transform:translate(-50%, -50%) rotate(0);
      }
      to {
          transform:translate(-50%, -50%) rotate(180deg);
      }
  }
  
  @keyframes spinCircle-2 {
        from {
            transform:translate(-100%, -100%) rotate(0);
        }
        to {
            transform:translate(-100%, -100%) rotate(90deg);
        }
    }
    .ocean { 
      height: 5%;
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      background: #015871;
    }
    
    .wave {
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
      position: absolute;
      top: -198px;
      width: 6400px;
      height: 198px;
      animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
    
    .wave:nth-of-type(2) {
      top: -175px;
      animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      opacity: 1;
    }
    
    @keyframes wave {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    }
    
    @keyframes swell {
      0%, 100% {
        transform: translate3d(0,-25px,0);
      }
      50% {
        transform: translate3d(0,5px,0);
      }
    }

`