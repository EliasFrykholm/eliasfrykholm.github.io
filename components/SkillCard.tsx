import styles from "../styles/SkillCard.module.css";
import { generateColor, generateGradient, generateHslString, HslColor } from "../static/ColorGenerator";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

type Skill = {
  name: string;
  score: number;
};

type Props = {
  skill: Skill;
  key: string;
  coloredComponents: Element[];
};

function SkillCard({ skill, key, coloredComponents }: Props) {
  const componentRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<HslColor>(generateColor(0));

  useEffect(() => {
    const index = componentRef.current ? coloredComponents?.indexOf(componentRef.current) : 0;
    const color = generateColor(index);
    color.saturation += 10;
    setColor(color);
  }, [coloredComponents]);

  return (
    <div
      className={`${styles.card} coloredComponent`}
      style={{
        background: generateGradient(color, 45, { hue: 40, saturation: 30, light: 10 }, true),
      }}
      ref={componentRef}
      key={key}
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
