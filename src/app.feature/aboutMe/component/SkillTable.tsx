import styled from "styled-components";
import { skillData } from "@/app.feature/aboutMe/skill-data";

const SkillTable = () => {
  return (
    <SkillTableWrapper>
      <div className="graph-container">
        {skillData.map((skill) => (
          <div key={skill.index} className="bar-container">
            {Array.from({ length: Math.ceil(Number(skill.skillLevel) / 10) }).map((_, index) => (
              <div key={index} className="bar"></div>
            ))}
            <div className="label">{skill.skillName}</div>
          </div>
        ))}
      </div>
    </SkillTableWrapper>

  )
}

export default SkillTable;

const SkillTableWrapper = styled.div`
  margin: 20px 10px;
  display: flex;

  .bar-container {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }ㅛ

  .bar {
    background-color: #3498db;
    height: 20px;
    width: 10px; /* 각 bar의 너비를 조절합니다. */
    margin-right: 2px; /* 각 bar 사이의 간격을 조절합니다. */
  }

  .label {
    margin-left: 8px;
  }
`