
import './global.css'
import { Post } from './Post'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/header'

export function App() { 
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Wellington dos Santos Silva" 
        content="Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                  Commodi illo, quae delectus 
                  tempora qui, iure voluptatum 
                  explicabo atque quibusdam 
                  voluptatibus tenetur perferendis
                  deserunt nisi itaque ducimus amet
                  molestiae aut autem!" 
      />

      <Post 
        author="Gabriel Buzzi" 
        content="Um novo post!"
      />
        </main>
      </div>
    </div>
    
  )
}


