import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCont] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCont((state) => {
      return state + 1
    })
  }

  return(
      <div className={styles.comment}>
          <Avatar hasBorder={false} src="http://github.com/diego3g.png" />
          <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                  <header>
                      <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="18 de junho às 13:49h" dateTime="2023-06-18 14:09:34">Cerca de 1h atrás</time>
                      </div>
                      <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                      </button>
                  </header>
                  <p>{content}</p>
              </div>
              <footer onClick={handleLikeComment}>
                  <button>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
                  </button>
              </footer>
          </div>
      </div>
  )
}
