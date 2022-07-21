import styles from "../styles/CardContainer.module.css";
import { generateColor, generateGradient } from "../static/ColorGenerator";

type Props = {
  index: number;
  maxWidth?: string;
  children: React.ReactNode;
};

function CardContainer({ index, children, maxWidth }: Props) {
  const color = generateColor(index);
  color.saturation += 10;

  return (
    <div
      className={styles.card}
      style={{
        background: generateGradient(color, 45, { hue: 40, saturation: 30, light: 10 }, true),
        maxWidth: maxWidth,
      }}
    >
      {children}
    </div>
  );
}

export default CardContainer;
