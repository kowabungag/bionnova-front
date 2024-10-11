"use client";
import * as styles from "./store.module.scss";
import Container from "@/components/Container/Container";
import StoreCard from "@/components/StoreCard/StoreCard";

const storeProducts = [
  {
    id: 1,
    title:
      "Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить их на кухне",
    author: "Кристин Гиттер",
    img: "../../../media/img/book-1.png",
  },
  {
    id: 2,
    title:
      "Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить их на кухне",
    author: "Кристин Гиттер",
    img: "../../../media/img/book-1.png",
  },
  {
    id: 3,
    title:
      "Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить их на кухне",
    author: "Кристин Гиттер",
    img: "../../../media/img/book-1.png",
  },
  {
    id: 4,
    title:
      "Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить их на кухне",
    author: "Кристин Гиттер",
    img: "../../../media/img/book-1.png",
  },
  {
    id: 5,
    title:
      "Чем запить таблетку? Фармацевт о том, почему нельзя делить таблетки на части, хранить их на кухне",
    author: "Кристин Гиттер",
    img: "../../../media/img/book-1.png",
  },
];

const StorePage = () => {
  return (
    <>
      <Container sizeZero>
        <div className={styles.cardsWrapper}>
          {storeProducts.map((product) => (
            <StoreCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default StorePage;
