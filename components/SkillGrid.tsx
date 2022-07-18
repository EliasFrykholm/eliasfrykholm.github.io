import styles from "../styles/SkillGrid.module.css";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skill[];
};

type Skill = {
  name: string;
  score: number;
};

function SkillGrid({ skills }: Props) {
  return (
    <div className={styles.container}>
      {skills
        .sort((a, b) => b.score - a.score)
        .map((skill, index) => (
          <SkillCard skill={skill} index={index}></SkillCard>
        ))}
    </div>
  );
}

export default SkillGrid;
