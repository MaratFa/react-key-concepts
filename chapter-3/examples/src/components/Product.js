function Product({ title, price, id }) {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Price: {price}</p>
      <p>Product id: {id}</p>
    </div>
  );
}

export default Product;
