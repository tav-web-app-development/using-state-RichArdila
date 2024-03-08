import { useState } from "react";

export default function ProductCard({ product }) {
  const [currentImageIndex, setIndex] = useState (0);
  const [showMore, setShowMore] = useState(false);
  const [productCount, setProductCount] = useState(0);
  //let itemsInCart = 0;
  
  const handleAddToCartClick = () => {
    //itemsInCart++;
    //alert(`you added ${itemsInCart}`);
    setProductCount(productCount + 1);
    alert(`You have ${productCount} added to you cart`)
  };

   

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button 
          onClick={() => setIndex(currentImageIndex + 1)}
          disabled={currentImageIndex === product.imageUrls.length - 1}
          >Next</button>
        <button 
          onClick={() => setIndex(currentImageIndex - 1)}
          disabled={currentImageIndex === 0}
        >Previous</button>
      </div>

      <h3>{product.name}</h3>
      {showMore && <p>{product.description}</p>}
      <button onClick={() => setShowMore(!showMore)}>
      {showMore ? "Hide Description" : "Show Description"}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
     
      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
