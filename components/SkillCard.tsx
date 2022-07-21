import styles from "../styles/SkillCard.module.css";
import { generateColor, generateGradient, generateHslaString, generateHslString } from "../static/ColorGenerator";
import CardContainer from "./CardContainer";

type Skill = {
  name: string;
  score: number;
};

type Props = {
  skill: Skill;
  index: number;
};

function SkillCard({ skill, index }: Props) {
  const color = generateColor(index);
  color.saturation += 10;

  return (
    <CardContainer index={index}>
      <h2>{skill.name}</h2>
      <div
        className={styles.skillIndicatorContainer}
        style={{
          backgroundColor: generateHslString({
            hue: color.hue,
            saturation: color.saturation + 20,
            light: color.light - 30,
          }),
        }}
      >
        <div
          className={styles.skillIndicator}
          style={{
            background: generateGradient(
              { hue: color.hue, saturation: color.saturation, light: color.light - 10 },
              90,
              { hue: 0, saturation: 30, light: 40 }
            ),
            width: `${skill.score * 10}%`,
          }}
        >
          <h3 className={styles.levelText}>{skill.score}</h3>
        </div>
      </div>
    </CardContainer>
  );
}

export default SkillCard;
