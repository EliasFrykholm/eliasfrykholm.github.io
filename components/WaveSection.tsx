import styles from '../styles/WaveSection.module.css'
import Wave from './Wave';

type Props = {
    isBottom?: boolean;
    color: string
    scrollOffset: number;
    children: React.ReactNode;
  }
  
  function WaveSection ({ isBottom = false, color, scrollOffset, children }: Props) {
    return (
        <div>
            <Wave isBottom={isBottom} color={color} scrollOffset={scrollOffset}/> 
            <div className={styles.container} style={{backgroundColor: color}}>
              {children}
            </div>
            {isBottom ? <Wave color={color} isBottom={isBottom} scrollOffset={scrollOffset}/> : <div className={styles.infillContainer}><div className={styles.bottomInfill} style={{backgroundColor: color}}/></div>}
        </div>
    )
  }
  
  export default WaveSection