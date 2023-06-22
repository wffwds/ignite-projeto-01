
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'


import './global.css'
import styles from './App.module.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'http://github.com/wffwds.png',
            name: 'Wellington dos Santos Silva',
            role: 'Student @Rocketseat'
        },
        content: [
            {type: 'paragraph', content: 'Fala galera'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite @Rocketseat.'},
            {type: 'link', content: '#Ignite_Rocketseat'},
        ],
        publishedAt: new Date('2023-6-19 21:23:18'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'http://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            {type: 'paragraph', content: 'Fala galera'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite @Rocketseat.'},
            {type: 'link', content: '#Ignite_Rocketseat'},
        ],
        publishedAt: new Date('2023-6-20 15:23:18'),
    }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                    />
                )
            })}
        </main>
      </div>
    </div>
  )
}


