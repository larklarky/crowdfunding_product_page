import styles from './MainInfo.module.css';
import {Card} from './Card';
import { Pledge } from './App';

type Pledges = {
    pledges: Pledge[];
}

export const MainInfo = ({pledges}: Pledges) => {
    return(
        <div className={styles.container}>
            <h2>About this project </h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more 
                comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture 
                and make you more comfortable while at work, helping you stay focused on the task at hand. 
            </p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
                 notepads, pens, and USB sticks to be stored under the stand. </p>
            
            <div id='pledges'>
                {pledges.map(pledge => {
                    return <Card pledge={pledge}/>
                })}
            </div>
            
            
        </div>

    )
}