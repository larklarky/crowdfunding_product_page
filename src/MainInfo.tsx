import styles from './MainInfo.module.css';
import {Card} from './Card';

const pledges = [
    {title: 'Bamboo Stand',
    pledge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    amount: 101
    },
    {title: 'Black Edition Stand',
    pledge: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    amount: 64
    },
    {title: 'Mahogany Special Edition',
    pledge: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. `,
    amount: 0
    },
]

export const MainInfo = () => {
    return(
        <div className={styles.container}>
            <h2>About this project </h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more 
                comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture 
                and make you more comfortable while at work, helping you stay focused on the task at hand. 
            </p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
                 notepads, pens, and USB sticks to be stored under the stand. </p>
            
            {pledges.map(pledge => {
                return <Card pledge={pledge}/>
            })}
        </div>

    )
}