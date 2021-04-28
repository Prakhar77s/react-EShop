import classes from './ProductsSummary.module.css'

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>You want it, We got it</h2>
      <p>
        you can order different variety of products from our shoping section
      </p>
      <p>
        All our products go through a quality check before getting delivered
      </p>
    </section>
  );
};

export default ProductsSummary;
