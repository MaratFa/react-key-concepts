function Product({title, price, id, children}) {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Price: {price}</p>
      <p>Product id: {id}</p>
      <p>{children}</p>
    </div>
  );
}

export default Product;
