import { generateColor, generateColorWithOpacity } from "../static/ColorGenerator";
import styles from "../styles/WaveSection.module.css";
import Wave from "./Wave";

type Props = {
  isBottom?: boolean;
  scrollOffset: number;
  index: number;
  children: React.ReactNode;
};

function WaveSection({ isBottom = false, scrollOffset, index, children }: Props) {
  const color = generateColor(index);
  const colorOpacity = generateColorWithOpacity(index);
  var prevColor;
  if (index > 0) {
    prevColor = generateColor(index - 1);
  }

  return (
    <div>
      <Wave scrollOffset={scrollOffset} color={color} previousColor={prevColor} />
      <div className={styles.container} style={{ backgroundColor: colorOpacity }}>
        {children}
      </div>
      {isBottom && <Wave scrollOffset={scrollOffset} previousColor={color} />}
    </div>
  );
}

export default WaveSection;
