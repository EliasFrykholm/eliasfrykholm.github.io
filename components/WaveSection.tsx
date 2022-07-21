import { generateColor, generateHslString, generateHslaString } from "../static/ColorGenerator";
import styles from "../styles/WaveSection.module.css";
import Wave from "./Wave";
import { useEffect, useState } from "react";

type Props = {
  isBottom?: boolean;
  scrollOffset: number;
  colorIndex: number;
  children: React.ReactNode;
};

type Colors = {
  color: string;
  colorOpacity: string;
  prevColor?: string;
};

function WaveSection({ isBottom = false, scrollOffset, colorIndex, children }: Props) {
  const [colors, setColors] = useState<Colors>();
  useEffect(() => {
    const colorObj = generateColor(colorIndex);
    const color = generateHslString(colorObj);
    const colorOpacity = generateHslaString(colorObj);
    var prevColor;
    if (colorIndex > 0) {
      prevColor = generateHslString(generateColor(colorIndex - 1));
    }
    setColors({ color: color, colorOpacity: colorOpacity, prevColor: prevColor });
  }, [setColors]);

  return (
    <div>
      <Wave scrollOffset={scrollOffset} color={colors?.color} previousColor={colors?.prevColor} />
      <div className={styles.container} style={{ backgroundColor: colors?.colorOpacity }}>
        {children}
      </div>
      {isBottom && <Wave scrollOffset={scrollOffset} previousColor={colors?.color} />}
    </div>
  );
}

export default WaveSection;
