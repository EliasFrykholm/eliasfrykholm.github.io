import styles from "../styles/SkillGrid.module.css";
import SkillCard from "./SkillCard";
import { useRef } from "react";
import { useState } from "react";
import { generateColor, HslColor } from "../static/ColorGenerator";
import { useEffect } from "react";

type Props = {
  skills: Skill[];
  coloredComponents: Element[];
};

type Skill = {
  name: string;
  score: number;
};

function SkillGrid({ skills, coloredComponents }: Props) {
  const componentRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<HslColor>(generateColor(0));

  useEffect(() => {
    const index = componentRef.current ? coloredComponents?.indexOf(componentRef.current) : 0;
    const color = generateColor(index);
    color.saturation += 10;
    setColor(color);
  }, [coloredComponents]);

  return (
    <div className={`${styles.container} coloredComponent`} ref={componentRef}>
      {skills
        .sort((a, b) => b.score - a.score)
        .map((skill, index) => (
          <SkillCard skill={skill} color={color} key={`skill-card-${index}`}></SkillCard>
        ))}
    </div>
  );
}

export default SkillGrid;
