import { Post } from './Post';
import { Header } from './components/Header';
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Vinicius Buarque"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, provident ratione sint aspernatur expedita sunt numquam quia non quibusdam animi harum labore veritatis neque. Aspernatur excepturi beatae molestias architecto sit!"
      />
      <Post 
        author="Jefferson Diego"
        content="Um novo post muito daora!"
      />
    </div>
  )
}