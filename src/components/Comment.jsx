import style from './Comment.module.css';
import {Trash} from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';
import React from 'react';

import {formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Comment({content, DeleteComment, user}) {

    const dia1 = formatDistanceToNow(new Date(), {
        locale: ptBR,
        addSuffix: true,
    })


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
                        <time>{dia1}</time>
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