import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar border={true} perfil={props.perfil}/>

                    <div className={style.authorinfo}> 
                        <strong>{props.author}</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='01 de Dezembro de 2023 às 12:13' dateTime="2023-12-01 12:13:30">Publicado há 1h</time>
            </header>
                <div className={style.content}>
                    <p>
                        {props.content}
                    </p>
                </div>

            <footer>
                <form className={style.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea  placeholder="Deixe seu comentário" />

                    <div className={style.botao}>
                        <button type="submit">Comentar</button>
                    </div>
                    
                </form>
            </footer>

            <div className={style.commentList}>
                <Comment comment = 'Show de bola'
                         perfil = 'https://github.com/lukeeplr.png'/>
                <Comment comment = 'Parabéns!'
                         perfil = 'https://github.com/lukeeplr.png'/>
                <Comment comment = 'Obrigado pela dica, vou começar a salvar os meus também! Um forte abraço!'
                         perfil = 'https://github.com/lukeeplr.png'/>
            </div>
        </article>
    )
}
