import style from './Post.module.css';

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/SpaidiiPlayer.png" alt="" />

                    <div className={style.authorinfo}> 
                        <strong>Matheus Vinagre</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='01 de Dezembro de 2023 às 12:13' dateTime="2023-12-01 12:13:30">Publicado há 1h</time>
            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto</a> {' '}
                <a href=""> #nlw </a> {' '}
                <a href=""> #rocketseat</a> {' '}
                </p>
                
            </div>

            <footer>
                
                <form className={style.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea  placeholder="Deixe seu comentário" />

                    <button type="submit">Comentar</button>
                </form>
            </footer>

        </article>
    )
}
