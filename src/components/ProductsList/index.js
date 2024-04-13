import './index.css'

const ProductsList = props => {
  const {productInfo} = props
  const {name, description, imgUrl, price} = productInfo

  return (
    <li className="product-item">
      <img src={imgUrl} className="product-image" alt="product" />
      <div className="product-info">
        <h1 className="product-name">{name}</h1>
        <p className="product-description">{description}</p>
        <h1 className="price">{price}</h1>
        <button type="button" className="add-to-cart-button">
          Add To Cart
        </button>
      </div>
    </li>
  )
}

export default ProductsList
