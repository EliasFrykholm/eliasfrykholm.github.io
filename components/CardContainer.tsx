import styles from "../styles/CardContainer.module.css";
import { generateColor, generateGradient, HslColor } from "../static/ColorGenerator";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

type Props = {
  coloredComponents: Element[];
  maxWidth?: string;
  children: React.ReactNode;
};

function CardContainer({ coloredComponents, children, maxWidth }: Props) {
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
        maxWidth: maxWidth,
      }}
      ref={componentRef}
    >
      {children}
    </div>
  );
}

export default CardContainer;
