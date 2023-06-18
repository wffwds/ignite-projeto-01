import { Post } from './Post'


export function App() { 
  return (
    <div>      
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
    </div>
    
  )
}


