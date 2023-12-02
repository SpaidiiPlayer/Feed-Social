import style from './Post.module.css';
import { Comment } from './Comment';

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src={props.perfil} alt="" />

                    <div className={style.authorinfo}> 
                        <strong>{props.author}</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='01 de Dezembro de 2023 às 12:13' dateTime="2023-12-01 12:13:30">Publicado há 1h</time>
            </header>
                <div className={style.content}>
                    <pre>
                        {props.content}
                    </pre>
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
                <Comment />
            </div>
        </article>
    )
}
