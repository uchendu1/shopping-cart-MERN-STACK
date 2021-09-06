import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" 
            alt="product-name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">product 1</p>
          <p> price: $499.55</p>
          <p>Description : gegjgg njgg brefmut fjnfn</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info"> 
          <p>
            Price: <span>$78.00</span>
          </p>
        
          <p>
            Status: <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
