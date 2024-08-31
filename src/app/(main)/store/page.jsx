'use client';
import * as styles from './store.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../../components/Container/Container';

const StorePage = () => {
  return (
    <>
      <Container sizeZero>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.imgBlock}>
              <Image src="../../../media/img/book-1.png" alt="" width={215} height={333} />
            </div>
            <div className={styles.bookDescription}>
              <div>
                <Link href="#">
                  <h3 className={styles.bookTitle}>
                    Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части,
                    хранить их на кухне
                  </h3>
                </Link>
                <span className={styles.bookAuthor}>Кристин Гиттер</span>
              </div>
              <button className={styles.btn}>В корзину</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StorePage;
