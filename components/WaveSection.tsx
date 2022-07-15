import styles from '../styles/WaveSection.module.css'
import Wave from './wave';

type Props = {
    isBottom?: boolean;
    color: string
    children: React.ReactNode;
  }
  
  function WaveSection ({ isBottom = false, color, children }: Props) {
    return (
        <div>
            <Wave isBottom={isBottom} color={color}/> 
            <div className={styles.container} style={{backgroundColor: color}}>
              {children}
            </div>
            {isBottom ? <Wave color={color} isBottom={isBottom}/> : <div className={styles.infillContainer}><div className={styles.bottomInfill} style={{backgroundColor: color}}/></div>}
        </div>
    )
  }
  
  export default WaveSection