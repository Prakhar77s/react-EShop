import Card from "../UI/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Masks",
    description: "good quality masks",
    price: 30,
  },

  {
    id: "p2",
    name: "Hand sanitizer",
    description: "It contains alchohol use carefully",
    price: 50,
  },

  {
    id: "p3",
    name: "Water Bottle",
    description: "bottle for water",
    price: 100,
  },

  {
    id: "p4",
    name: "guitar strings",
    description: "good quality strings",
    price: 300,
  },
];

const AvailableProducts = () => {
  const ProductList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{ProductList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
