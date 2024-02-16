import styled from "styled-components";
import SkillTable from "@/app.feature/aboutMe/component/SkillTable";

const ScreenAboutMe: React.FC = () => {
  const years = new Date().getFullYear() - new Date('2021-01-01').getFullYear();

  return (
    <AboutMeWrapper>
      <div className="quotation">
        <ul>
          <li>Next.js, TypeScript, React 기반의 {years}년차 프론트엔드 개발자 이수아입니다.</li>
          <li>다양한 개발 환경에서의 프로젝트 경험</li>
          <li>새로운 개발 환경에 대한 호기심과 도전의식</li>
          <li>back-end 업무 경험 </li>
          <li>스타트업창업및다수의중소기업지원사업과과제진행경험</li>
        </ul>
      </div>

      <SkillTable />
    </AboutMeWrapper>
  )
}
export default ScreenAboutMe;

const AboutMeWrapper = styled.div`
  display: inline-block;
  align-items: center;
  margin: 40px 20px;
  height: 100vh;
  .quotation {
    border-left: 3px solid #000;
    ul {
      margin: 20px 10px;
    }
    ul li {
      font-size: 10px;
    }
  }
`