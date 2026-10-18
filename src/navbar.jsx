

function Navbar(){

return(
      <nav className="navbar">
        <h2>NEA</h2>
        <div className="nav-links">
        <a href='#home'>Home</a>
        <a href='#products'>Products</a>
        <a href='#contact'>Contact</a>
        <a href="/Cart" className="cart-icon"
         aria-label="Go to shopping cart">
    🛒
    <span className="cart-count">
      {cart.reduce((sum, item) => sum + item.quantity, 0)}
    </span>
  </a>
  </div>
</nav>
   
      

);
}

export default Navbar
