import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Buarque"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, provident ratione sint aspernatur expedita sunt numquam quia non quibusdam animi harum labore veritatis neque. Aspernatur excepturi beatae molestias architecto sit!"
          />
          <Post
            author="Jefferson Diego"
            content="Um novo post muito daora!"
          />
        </main>
      </div>
    </div>
  )
}