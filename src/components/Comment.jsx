import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/vbuarque.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContetn}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Buarque</strong>
                            <time title='13 de Janeiro às 08:13h' dateTime="2024-01-13 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}