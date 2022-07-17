import styles from "../styles/SkillCard.module.css";

type Skill = {
  name: string;
  score: number;
};

type Props = {
  skill: Skill;
  index: number;
};

function SkillCard({ skill, index }: Props) {
  const baseColorHue = 121 + index * 10;
  const baseColorSat = 16;
  const baseColorLight = 56 - index * 2;
  const color = `hsl(${baseColorHue}, ${baseColorSat}%, ${baseColorLight}%)`;

  return (
    <div className={styles.skillCard} style={{ backgroundColor: color }}>
      <h2>{skill.name}</h2>
      <div
        className={styles.skillIndicatorContainer}
        style={{ backgroundColor: `hsl(${baseColorHue}, ${baseColorSat - 10}%, ${baseColorLight}%)` }}
      >
        <div
          className={styles.skillIndicator}
          style={{
            background: `linear-gradient(90deg, hsl(${baseColorHue + 20}, ${baseColorSat + 30}%, ${
              baseColorLight - 30
            }%) 0%, hsl(${baseColorHue + 20}, ${baseColorSat + 30}%, ${baseColorLight}%) 100%)`,
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
