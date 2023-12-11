import styles from './Header.module.css';
import logo from '../assets/Ignite-logo.svg'
import {Lightbulb} from 'phosphor-react'

export function Header(){
    return(
        <header className={styles.header}>
            <div></div>
            <div className={styles.Logo}>
                <img src={logo} alt="" /> 
                <strong>Feed</strong>
            </div>
            <button>   
                <Lightbulb size={32} />
            </button>
        </header>
        

    );
}