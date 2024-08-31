'use client';
import * as styles from './product.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../../../../components/Container/Container';

const ProductPage = ({ params }) => {
  const { id } = params;

  return (
    <>
      <Container sizeZero>
        <div className={styles.articleWrapper}>
          <Image src="../../../../media/img/book-2.png" alt="" width={500} height={771.62} />
          <div>
            <h1 className={styles.title}>
              Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить
              их на кухне и запивать всем подряд
            </h1>
            <span className={styles.author}>Кристин Гиттер</span>
            <div className={styles.attributeWrapper}>
              <span className={styles.availability}>В наличии</span>
              <span className={styles.article}>Артикул: 63019972</span>
            </div>
            <span className={styles.price}>199$</span>
            <button className={styles.btn}>Добавить в корзину</button>
            <h3 className={styles.descriptionTitle}>Описание</h3>
            <p className={styles.descriptionText}>
              Лекарства проникают в нашу кровь – а кроме этого, что еще мы знаем о них? Что
              происходит с таблеткой, как только она оказывается во рту? А если это обезболивающее,
              то откуда оно знает, что болит именно голова? Время приема и дозировка – большинство
              людей думает только об этом, но это далеко не вся информация, которую нужно знать. Не
              важно, было ли лекарственное средство назначено врачом или самостоятельно куплено в
              аптеке – успех лечения зависит только от вас. Где хранить, чем запить, когда
              принимать, как избежать побочных эффектов – об этом и многом другом вам расскажет
              автор книги, фармацевт с 20-летним опытом работы. Внимание! Информация, содержащаяся в
              книге, не может служить заменой консультации врача. Необходимо проконсультироваться со
              специалистом перед применением любых рекомендуемых действий.
            </p>
            <Link href="#" className={styles.link}>
              Подробнее о доставке
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
