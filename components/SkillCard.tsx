import styles from "../styles/SkillCard.module.css";
import { generateGradient, generateHslString, HslColor } from "../static/ColorGenerator";

type Skill = {
  name: string;
  score: number;
};

type Props = {
  skill: Skill;
  color: HslColor;
};

function SkillCard({ skill, color }: Props) {
  return (
    <div
      className={styles.card}
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
    </div>
  );
}

export default SkillCard;
