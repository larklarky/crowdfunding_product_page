import styles from './ProjectHeader.module.css';
import {FaBookmark} from 'react-icons/fa'
import { useState } from 'react';

export const ProjectHeader = () => {
    const [bookmarked, setBookmarked] = useState<boolean>(false)
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src='/logo-mastercraft.svg' alt='logo'></img>
            </div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className={styles.actions}>
                <a href='#pledges'><button>Back this project</button></a>
                <div className={bookmarked ? `${styles.bookmark} ${styles.active}` : styles.bookmark}>
                    <div onClick={() => setBookmarked(!bookmarked)} className={styles.icon}>
                        <FaBookmark size='16px'/>
                    </div>
                    <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </div>
            </div>
        </div>
    )
}