import Counter from "../static/Counter";
import styles from "../styles/SkillGrid.module.css";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skill[];
  coloredComponents: Element[];
};

type Skill = {
  name: string;
  score: number;
};

function SkillGrid({ skills, coloredComponents }: Props) {
  return (
    <div className={styles.container}>
      {skills
        .sort((a, b) => b.score - a.score)
        .map((skill, index) => (
          <SkillCard skill={skill} coloredComponents={coloredComponents} key={`skill-card-${index}`}></SkillCard>
        ))}
    </div>
  );
}

export default SkillGrid;
