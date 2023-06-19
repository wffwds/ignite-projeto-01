import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={props.src}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="18 de junho às 13:49h" dateTime="2023-06-18 14:09:34">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!</p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>                    
                   </button>
                </footer>
            </div>

        </div>
    )
}