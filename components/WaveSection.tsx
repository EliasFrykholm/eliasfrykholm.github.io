import { useRef } from 'react';
import styles from '../styles/WaveSection.module.css'
import Wave from './Wave';

type Props = {
    isBottom?: boolean;
    scrollOffset: number;
    index: number;
    children: React.ReactNode;
  }
  
  function WaveSection ({ isBottom = false, scrollOffset, index, children }: Props) {
    const baseColorHue = 121 + (index * 10);
    const baseColorSat = 16;
    const baseColorLight = 56 - (index * 2);
    const color = `hsl(${baseColorHue}, ${baseColorSat}%, ${baseColorLight}%)`

    return (
        <div>
            <Wave isBottom={false} scrollOffset={scrollOffset} color={color}/> 
            <div className={styles.container} style={{backgroundColor: color}}>
              {children}
            </div>
            {isBottom ? <Wave isBottom={isBottom} scrollOffset={scrollOffset} color={color}/> : <div className={styles.infillContainer}><div className={styles.bottomInfill} style={{backgroundColor: color}}/></div>}
        </div>
    )
  }
  
  export default WaveSection