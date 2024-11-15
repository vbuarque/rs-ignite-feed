import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Vinicius Buarque"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, consequatur neque hic error nemo a! Nihil est, velit dolor fugit nobis iusto, aliquid qui laborum, odio repellat et nostrum repellendus?"
          />

          <Post
            author="Vinicius Buarque"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, consequatur neque hic error nemo a! Nihil est, velit dolor fugit nobis iusto, aliquid qui laborum, odio repellat et nostrum repellendus?"
          />
        </main>
      </div>
    </div>
  )
}

export default App