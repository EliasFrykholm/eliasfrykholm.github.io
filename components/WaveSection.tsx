import { generateColor, generateHslString, generateHslaString } from "../static/ColorGenerator";
import styles from "../styles/WaveSection.module.css";
import Wave from "./Wave";
import { useEffect, useRef, useState } from "react";

type Props = {
  isBottom?: boolean;
  isTop?: boolean;
  scrollOffset: number;
  coloredComponents: Element[];
  children: React.ReactNode;
};

type Colors = {
  color: string;
  colorOpacity: string;
  prevColor?: string;
};

function WaveSection({ isBottom = false, isTop = false, scrollOffset, coloredComponents, children }: Props) {
  const [colors, setColors] = useState<Colors>();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = componentRef.current && coloredComponents ? coloredComponents?.indexOf(componentRef.current) : 0;
    const colorObj = generateColor(index);
    const color = generateHslString(colorObj);
    const colorOpacity = generateHslaString(colorObj);
    var prevColor;
    if (!isTop) {
      prevColor = generateHslString(generateColor(index - 1));
    }
    setColors({ color: color, colorOpacity: colorOpacity, prevColor: prevColor });
  }, [coloredComponents]);

  return (
    <div className="coloredComponent" ref={componentRef}>
      <Wave scrollOffset={scrollOffset} color={colors?.color} previousColor={colors?.prevColor} />
      <div className={styles.container} style={{ backgroundColor: colors?.colorOpacity }}>
        {children}
      </div>
      {isBottom && <Wave scrollOffset={scrollOffset} previousColor={colors?.color} />}
    </div>
  );
}

export default WaveSection;
