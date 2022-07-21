import Counter from "../static/Counter";
import styles from "../styles/SkillGrid.module.css";
import SkillCard from "./SkillCard";

type Props = {
  skills: Skill[];
  indexCounter: Counter;
};

type Skill = {
  name: string;
  score: number;
};

function SkillGrid({ skills, indexCounter }: Props) {
  return (
    <div className={styles.container}>
      {skills
        .sort((a, b) => b.score - a.score)
        .map((skill, index) => (
          <SkillCard skill={skill} index={indexCounter.getCount()}></SkillCard>
        ))}
    </div>
  );
}

export default SkillGrid;
