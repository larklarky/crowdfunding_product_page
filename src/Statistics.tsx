import styles from './Statistics.module.css';

interface Stats {
    days: number;
    backers: number;
    money: number;
    goal: number;
    currency?: string;
}

export const Statistics = ({days, backers, money, goal, currency}: Stats) => {

    const progress = (money / goal) * 100;

    const Convertion = (currency: string = 'USD', amount: number) => {
       return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 0}).format(amount)
    }
    return(
        <div className={styles.container}>
            <div className={styles.stats}>
                <div className={styles.sum}>
                    <p>{Convertion(currency, money)}</p>
                    <p>of {Convertion(currency, goal)} backed</p>
                </div>
                <div className={styles.sum}>
                    <p>{new Intl.NumberFormat('en-US').format(backers)}</p>
                    <p>total backers</p>
                </div>
                <div className={styles.sum}>
                    <p>{days}</p>
                    <p>days left</p>
                </div>
            </div>
            <div className={styles.progress}>
                <div className={styles.bar}>
                    <div className={styles.result} style={{'width': `${progress}%`}}></div>
                </div>
            </div>
        </div>
    )
} 