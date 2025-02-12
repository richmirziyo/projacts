import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
  ]);

  const deleteBtn = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  return (
    <div>
      <h1>Prodacts</h1>
      {products.length == 0 && <h2>You don't have any products yet !</h2>}
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.images[0]} alt="" width={200} />
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <button onClick={() => deleteBtn(product.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
