import style from './Comment.module.css';
import {Trash} from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment(props) {
    return(
        <div className={style.comment}>
            <Avatar border={false} perfil={props.perfil} />
            
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                <header>
                    <div className={style.Title}>
                        <strong>João gaming</strong>
                        <time>Cerca de 2h</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={22}/>
                    </button>
                </header>
                    <p>{props.comment}</p>
                </div>

                
                
                <footer>
                    <button>
                        <ThumbsUp size={20}/> Curtir <span>12</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}