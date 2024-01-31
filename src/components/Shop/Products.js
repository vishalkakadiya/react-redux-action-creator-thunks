import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        title: 'First Book',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        title: 'Second Book',
        price: 5,
        description: 'This is a second product!'
    },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product => <ProductItem
              key={product.title}
              title={product.title}
              price={product.price}
              description={product.description}
          />)}
      </ul>
    </section>
  );
};

export default Products;
