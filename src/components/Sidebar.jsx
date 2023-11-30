import style from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';
export function Sidebar(){
    return(
         <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random image from unsplash" />
            <div className={style.profile}>
                <img src="https://github.com/SpaidiiPlayer.png" alt="Foto de perfil" />
                <strong>Your name</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={18}/> Editar seu perfil
                </a>
            </footer>
         </aside>
    );

}