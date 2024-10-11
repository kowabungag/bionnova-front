import * as styles from "./storeCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const StoreCard = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.imgBlock}>
        <Image src={product.img} alt="" width={215} height={333} />
      </div>
      <div className={styles.bookDescription}>
        <div>
          <Link href={product.id.toString()}>
            <h3 className={styles.bookTitle}>{product.title}</h3>
          </Link>
          <span className={styles.bookAuthor}>{product.author}</span>
        </div>
        <button
          className={styles.btn}
          onClick={() => this.props.onAdd(this.props.product.id)}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
