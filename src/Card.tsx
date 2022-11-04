import styles from './Card.module.css';

type Data = {
    title: string;
    pledge: number;
    description: string;
    amount: number;
}

type GotProps = {
    pledge: Data
}


export const Card = ({pledge}: GotProps) => {
    const Convertion = (amount: number, currency: string = 'USD') => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 0}).format(amount)
     }

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{pledge.title}</h2>
                <span>Pledge {Convertion(pledge.pledge)} or more</span>
            </div>
            <div className={styles.description}>{pledge.description}</div>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <h2 className={pledge.amount > 0 ? '' : styles.out}>{pledge.amount}</h2>
                    <span>left</span>
                </div>
                <button 
                    disabled ={pledge.amount > 0 ? false : true}
                >{pledge.amount > 0 ? 'Select Reward' : 'Out of stock'}</button>
            </div>
        </div>
    )
}