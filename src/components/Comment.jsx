import style from './Comment.module.css';
import {Trash} from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({perfil, content, DeleteComment, user}) {

    function HandleDeleteComment(){
        DeleteComment(content);
    }

    const [LikeCount, setLikeCount] = useState(0);

    function incrementLikes(){
        setLikeCount(LikeCount + 1);
    }

    return(
        <div className={style.comment}>
            <Avatar border={false} perfil={user.avatarUrl} />
            
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                <header>
                    <div className={style.Title}>
                        <strong>{user.nome}</strong>
                        <time>Cerca de 2h</time>
                    </div>

                    <button onClick={HandleDeleteComment} title='Deletar comentário'>
                        <Trash size={22}/>
                    </button>
                </header>
                    <p>{content}</p>
                </div>

                
                
                <footer>
                    <button onClick={incrementLikes}>
                        <ThumbsUp size={20}/> Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}