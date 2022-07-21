import styles from "../styles/SkillCard.module.css";
import { generateColor, generateGradient, generateHslaString, generateHslString } from "../static/ColorGenerator";

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
    <div
      className={styles.skillCard}
      style={{
        background: generateGradient(color, 45, { hue: 40, saturation: 30, light: 10 }, true),
      }}
    >
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
              { hue: color.hue, saturation: color.saturation + 30, light: color.light - 10 },
              90,
              { hue: 0, saturation: 0, light: 40 }
            ),
            width: `${skill.score * 10}%`,
          }}
        >
          <h3 className={styles.levelText}>{skill.score}</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
