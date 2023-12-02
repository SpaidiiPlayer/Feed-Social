import style from './Comment.module.css';

export function Comment() {
    return(
        <div className={style.comment}>
            <img src="https://github.com/SpaidiiPlayer.png" alt="" />
            <div className={style.commentBox}>
                <div className={style.commentHeader}>
                    <div className={style.Title}>
                        <strong>Nome</strong>
                        <time>Cerca de 2h</time>
                    </div>
                    <button title='Deletar comentário'>
                        
                    </button>
                    
                </div>
                
                <div className={style.commentContent}>
                    <p>Muito bom, parabéns</p>
                </div>
                
            </div>

            <footer>Aplaudir *</footer>
        </div>
    )
}