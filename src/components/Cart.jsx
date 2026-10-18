function Cart({cart = []}){
  return(
    <div className="cart">
      <h2>Shopping cart</h2>
      {cart.length === 0 ?(
        <p>Your cart is empty</p>
      ) : (
        cart.map((item,id) => ( 
      <div className="cart-item"
      key={`${item.name}-${index}`}>
      <h3>{item.name}</h3>
      <p>price: ksh{item.price}</p>
      <p>quantity:{item.quantity}</p>
      <p>subtotal:ksh{item.price * item.quantity}</p>

      </div>
      ))
      )}
    </div>
  );
}
export default Cart;