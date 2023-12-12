import styles from './Header.module.css';
import logo from '../assets/Ignite-logo.svg'
import { Lightning } from 'phosphor-react'


export function Header(){
    function handleDarkLight(){
        const html = document.documentElement
        html.classList.toggle('light')
    }

    return(

        <header className={styles.header}>
            <div></div>
            <div className={styles.Logo}>
                <img src={logo} alt="" /> 
                <strong>Feed</strong>
            </div>
            <button onClick={handleDarkLight}>   
                <Lightning size={32} />
            </button>
        </header>
        

    );
}