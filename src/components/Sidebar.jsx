import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/originals/ad/8f/e9/ad8fe909eb437f34b14512e97d72b3f1.png"
        alt=""
      />

      <div className={styles.profile}>
        <strong>Vinicius Buarque</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}