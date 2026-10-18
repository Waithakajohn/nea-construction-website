import { useState } from "react";
import "../App.css";

import foundationstones from "../assets/foundationstones.jpg";
import riversand from "../assets/riversand.jpg";
import rocksand from "../assets/rocksand.webp";
import ballast from "../assets/ballast.jpg";
import backgroundimage from "../assets/constructionsite.jpg";
import dust from "../assets/dust.jpg";

function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Foundation Stones - Kamba Moja", price: 65, image: foundationstones },
    { id: 2, name: "Foundation Stones - Blue Chuma", price: 64, image: foundationstones },
    { id: 3, name: "Riversand", price: 40000, image: riversand },
    { id: 4, name: "Rocksand", price: 38000, image: rocksand },
    { id: 5, name: "Ballast - 3/4 & 1/2", price: 34000, image: ballast },
    { id: 6, name: "Dust", price: 36000, image: dust },
  ];

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="home">
      <header className="navbar">
        <a href="#home" className="logo">NEA Construction</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart ({cartCount})</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            src={backgroundimage}
            alt="Construction site"
            className="hero-image"
          />

          <div className="hero-content">
            <h1>NEA Construction</h1>
            <h2>Quality Construction Materials</h2>
            <p>
              Your trusted partner for quality construction materials
              for all your building projects.
            </p>
            <a href="#products" className="shop-button">
              Shop Products
            </a>
          </div>
        </section>

        <section className="featured" id="products">
          <h2>Our Products</h2>
          <p>Quality materials for your next building project.</p>

          <div className="product-preview">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <h3>{product.name}</h3>
                <p>KSh {product.price.toLocaleString("en-KE")}</p>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="cart-section" id="cart">
          <h2>Your Cart ({cartCount} items)</h2>

          <div className="cart">
            {cart.length === 0 ? (
              <p>Your cart is empty. Add a product to get started!</p>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      KSh {item.price.toLocaleString("en-KE")} × {item.quantity}
                    </p>
                    <p>
                      Subtotal: KSh{" "}
                      {(item.price * item.quantity).toLocaleString("en-KE")}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

            <p className="cart-total">
              Total: KSh {total.toLocaleString("en-KE")}
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Contact NEA Construction</h2>
          <p>Contact us for prices, orders, and construction materials.</p>

          <div className="contact-list">
            <article className="contact-card">
              <h3>Nick</h3>
              <p>+254 713 157151</p>
              <a href="tel:+254713157151" className="call-button">
                Call Nick
              </a>
            </article>

            <article className="contact-card">
              <h3>Antoh</h3>
              <p>+254 717 576849</p>
              <a href="tel:+254717576849" className="call-button">
                Call Antoh
              </a>
            </article>

            <article className="contact-card">
              <h3>Eric</h3>
              <p>0743493109</p>
              <a href="tel:+254743493109" className="call-button">
                Call Eric
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>NEA Construction</h3>
        <p>Quality materials you can trust.</p>
        <p>&copy; {new Date().getFullYear()} NEA Construction</p>
      </footer>
    </div>
  );
}

export default Home;