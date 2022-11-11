import { useContext, useState } from 'react';
import styles from './Card.module.css';
import { Pledge, AppContext } from './App';

type CardProps = {
    pledge: Pledge
}

export const Card = ({pledge}: CardProps) => {
    const [rewardField, setRewardField] = useState<boolean>(false);
    const [bid, setBid] = useState<number>(pledge.pledge)
    const {state, dispatch} = useContext(AppContext)

    const Convertion = (amount: number, currency: string = 'USD') => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: currency, minimumFractionDigits: 0}).format(amount)
    }

    const handlePledge = (pledgeId: number, money:number) => {
        dispatch({type: 'add', payload: {money: money, pledgeId: pledgeId}})
    }

    return(
        <div key={pledge.id} className={styles.container}>
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
                    className={rewardField ? styles.none : ''}
                    onClick={() => setRewardField(true)}
                    disabled ={pledge.amount > 0 ? false : true}
                >{pledge.amount > 0 ? 'Select Reward' : 'Out of stock'}</button>
            </div>
            <div className={rewardField ? styles.reward : styles.none}>
                <span>Enter your pledge <span className={bid < pledge.pledge || isNaN(bid) ? styles.error : styles.none}>Can't be less than {Convertion(pledge.pledge)}</span></span>
                <form className={styles.actions}>
                    <input
                        className={bid < pledge.pledge || isNaN(bid) ? styles.invalid : ''}
                        type='number'
                        value={bid}
                        min={pledge.pledge}
                        autoFocus={true} 
                        onChange={(e) => setBid(parseFloat(e.target.value))}
                    />
                    <button 
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault()
                            setRewardField(false)
                            handlePledge(pledge.id, bid)}}
                        disabled={bid < pledge.pledge || isNaN(bid) ? true : false}
                    
                    >Continue</button>
                </form>
            </div>
        </div>
    )
}