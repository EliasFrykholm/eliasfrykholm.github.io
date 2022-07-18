import styles from "../styles/SkillCard.module.css";
import { baseColorHue, baseColorSat, baseColorLight } from "../static/Constants";

type Skill = {
  name: string;
  score: number;
};

type Props = {
  skill: Skill;
  index: number;
};

function SkillCard({ skill, index }: Props) {
  const hue = baseColorHue + index * 10;
  const saturation = baseColorSat;
  const light = baseColorLight - index * 2;
  const color = `hsl(${hue}, ${saturation}%, ${light}%)`;

  return (
    <div
      className={styles.skillCard}
      style={{
        background: `linear-gradient(45deg, ${color} 0%, hsla(${hue + 50}, ${saturation + 40}%, ${light}%, 0.7) 100%)`,
      }}
    >
      <h2>{skill.name}</h2>
      <div
        className={styles.skillIndicatorContainer}
        style={{ backgroundColor: `hsl(${hue}, ${saturation + 20}%, ${light - 30}%)` }}
      >
        <div
          className={styles.skillIndicator}
          style={{
            background: `linear-gradient(90deg, hsl(${hue + 20}, ${saturation + 30}%, ${light - 30}%) 0%, hsl(${
              hue + 20
            }, ${saturation + 30}%, ${light}%) 100%)`,
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
