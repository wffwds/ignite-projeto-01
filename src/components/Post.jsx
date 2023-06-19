import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <Avatar src="http://github.com/wffwds.png" />
                <div className={styles.authorInfo}>
                    <strong>Wellington dos Santos Silva</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title="18 de junho às 13:49h" dateTime="2023-06-18 14:09:34">Publicado há 1h</time>
           </header>
           <div className={styles.content}>
            <p>Fala galera!</p>
            <p>Acabei de subir mais um projeto no meu portifólio. Um projeto realizado no Ignite da Rocketseat.</p>
            <p><a href="#">#ignite #rocketseat</a></p>
           </div>
           
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário" 
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment src="http://github.com/maykbrito.png"/>
                <Comment src="http://github.com/diego3g.png"/>
                <Comment src="http://github.com/maykbrito.png"/>
            </div>                     
        </article>
        
    )
}