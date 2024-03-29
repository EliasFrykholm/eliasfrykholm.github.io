import styles from "../styles/Wave.module.css";
import { useState, useEffect, useRef } from "react";

type Props = {
  scrollOffset: number;
  color?: string;
  previousColor?: string;
};

const maxOffset = 5000 - 960;

function Wave({ scrollOffset, color, previousColor }: Props) {
  const offset = useRef(randomNumberInRange(0, maxOffset));

  const isBottom = previousColor && !color;

  return (
    <div className={styles.wave}>
      <svg
        viewBox={`${(offset.current + scrollOffset) % maxOffset} 0 960 60`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        transform={isBottom ? "rotate(180)" : ""}
      >
        <defs>
          <filter id="shadow">
            <feDropShadow dx="-0.2" dy="-0.4" stdDeviation="3" floodColor="var(--bg-color)" floodOpacity={0.7} />
          </filter>
        </defs>
        <rect
          x={0}
          y={0}
          width={5000}
          height={60}
          fill={previousColor}
          opacity={!previousColor || isBottom ? 0 : undefined}
        />
        <path
          d="M0 33L26.8 36.8C53.7 40.7 107.3 48.3 161.2 49.8C215 51.3 269 46.7 322.8 44.8C376.7 43 430.3 44 484 43.8C537.7 43.7 591.3 42.3 645 42.7C698.7 43 752.3 45 806.2 46.3C860 47.7 914 48.3 967.8 47.5C1021.7 46.7 1075.3 44.3 1129 41.3C1182.7 38.3 1236.3 34.7 1290.2 36.3C1344 38 1398 45 1451.8 48.3C1505.7 51.7 1559.3 51.3 1613 48.2C1666.7 45 1720.3 39 1774 39.3C1827.7 39.7 1881.3 46.3 1935.2 49C1989 51.7 2043 50.3 2096.8 48.5C2150.7 46.7 2204.3 44.3 2258 43.7C2311.7 43 2365.3 44 2419.2 46.3C2473 48.7 2527 52.3 2580.8 54.3C2634.7 56.3 2688.3 56.7 2742 53.5C2795.7 50.3 2849.3 43.7 2903.2 39.3C2957 35 3011 33 3064.8 33.3C3118.7 33.7 3172.3 36.3 3226 40C3279.7 43.7 3333.3 48.3 3387 50.5C3440.7 52.7 3494.3 52.3 3548.2 49C3602 45.7 3656 39.3 3709.8 38.2C3763.7 37 3817.3 41 3871 42.2C3924.7 43.3 3978.3 41.7 4032.2 40.2C4086 38.7 4140 37.3 4193.8 36.5C4247.7 35.7 4301.3 35.3 4355 37C4408.7 38.7 4462.3 42.3 4516 45.5C4569.7 48.7 4623.3 51.3 4677.2 52.7C4731 54 4785 54 4838.8 52.3C4892.7 50.7 4946.3 47.3 4973.2 45.7L5000 44L5000 61L4973.2 61C4946.3 61 4892.7 61 4838.8 61C4785 61 4731 61 4677.2 61C4623.3 61 4569.7 61 4516 61C4462.3 61 4408.7 61 4355 61C4301.3 61 4247.7 61 4193.8 61C4140 61 4086 61 4032.2 61C3978.3 61 3924.7 61 3871 61C3817.3 61 3763.7 61 3709.8 61C3656 61 3602 61 3548.2 61C3494.3 61 3440.7 61 3387 61C3333.3 61 3279.7 61 3226 61C3172.3 61 3118.7 61 3064.8 61C3011 61 2957 61 2903.2 61C2849.3 61 2795.7 61 2742 61C2688.3 61 2634.7 61 2580.8 61C2527 61 2473 61 2419.2 61C2365.3 61 2311.7 61 2258 61C2204.3 61 2150.7 61 2096.8 61C2043 61 1989 61 1935.2 61C1881.3 61 1827.7 61 1774 61C1720.3 61 1666.7 61 1613 61C1559.3 61 1505.7 61 1451.8 61C1398 61 1344 61 1290.2 61C1236.3 61 1182.7 61 1129 61C1075.3 61 1021.7 61 967.8 61C914 61 860 61 806.2 61C752.3 61 698.7 61 645 61C591.3 61 537.7 61 484 61C430.3 61 376.7 61 322.8 61C269 61 215 61 161.2 61C107.3 61 53.7 61 26.8 61L0 61Z"
          fill={color || previousColor}
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
}

function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Wave;
