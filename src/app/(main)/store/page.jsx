"use client";
import * as styles from "./store.module.scss";
import Container from "@/components/Container/Container";
import StoreCard from "@/components/StoreCard/StoreCard";
import React from "react";

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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <>
        <Container sizeZero>
          <div className={styles.cardsWrapper}>
            {storeProducts.map((product) => (
              <StoreCard
                key={product.id}
                product={product}
                onAdd={this.addToOrder}
                items={this.state.items}
              />
            ))}
          </div>
        </Container>
      </>
    );
  }
  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;

// const StorePage = () => {
//   return (
//     <>
//       <Container sizeZero>
//         <div className={styles.cardsWrapper}>
//           {storeProducts.map((product) => (
//             <StoreCard key={product.id} product={product} />
//           ))}
//         </div>
//       </Container>
//     </>
//   );
// };

// export default StorePage;
