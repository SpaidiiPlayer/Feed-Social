import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


export function Post(props) {
    //Quantidade de comentários em tela
    const [comments, setComments] = useState([
    ])

    const [newCommentText, setNewCommentText] = useState('')

    //Formatação do dia e horario
    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    //Formatação do dia tipo 'ha cerca de 3 horas'
    const PublisedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    //Funcao que adiciona o novo comentário
    function handleCreateNewComment(){
        event.preventDefault()


        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function DeleteComment(commentToDelete){
        const CommentListWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(CommentListWithoutDeletedOne);
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar border={true} perfil={props.author.avatarUrl}/>

                    <div className={style.authorinfo}> 
                        <strong>{props.author.nome}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>{PublisedDateRelativeToNow}</time>
            </header>
                <div className={style.content}>
                        {props.content}
                        {/*
                        {props.content.map(line => {
                            if(line.type === 'paragraph') {
                                return <p key={line.content}>{line.content}</p>
                            } else if(line.type === 'link'){
                                return <p key={line.content}><a href={line.content}>{line.content}</a></p>
                            }
                        })}
                    */}
                </div>

            <footer>
                <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea name='comment' value={newCommentText} placeholder="Deixe seu comentário" onChange={handleNewCommentChange}/>

                    <div className={style.botao}>
                        <button type="submit" disabled={newCommentText.length === 0}>Comentar</button>
                    </div>
                    
                </form>
            </footer>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                        content = {comment}
                        key = {comment}
                        user = {props.user}
                        DeleteComment = {DeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
