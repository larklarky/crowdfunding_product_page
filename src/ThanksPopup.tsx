import { useContext, useState } from 'react';
import {MdDone} from 'react-icons/md';
import styles from './ThanksPopup.module.css';
import { AppContext } from './App';

type ModalType = {
    thanksModal: boolean;
}

export const ThanksPopup = ({thanksModal}: ModalType) => {
    const {state, dispatch} = useContext(AppContext);
    if(!thanksModal) {
        return <></>
    }
    return(
        <div className={styles.container}>
            <dialog className={styles.modal}>
                <div className={styles.icon}><MdDone size='25px'/> </div>
                <h3>Thanks for your support!</h3>
                <p>Your pledge brings us one step closer to sharing Mastercraft 
                    Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. </p>
                <button className={styles.close} onClick={() => {dispatch({type: 'thanksModal', payload: {thanksModal: false}})}}>
                    Got it!
                </button>
            </dialog>
        </div>
        
        
    )
}