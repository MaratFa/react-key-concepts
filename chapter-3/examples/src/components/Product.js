function Product(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Price: {props.price}</p>
      <p>Product id: {props.id}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Product;
