function Cart({ cart, removeFromCart }) {

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (

    <div className="p-10 min-h-screen">

      <h1 className="text-5xl font-bold text-center mb-16">
        Shopping Cart
      </h1>

      {/* Empty Cart */}
      {cart.length === 0 ? (

        <div className="text-center text-3xl font-semibold">
          Cart is Empty 🛒
        </div>

      ) : (

        <>
          {/* Cart Items */}
          <div className="grid gap-8">

            {cart.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row items-center justify-between"
              >

                {/* Product Info */}
                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <div>

                    <h2 className="text-2xl font-bold text-black">
                      {item.name}
                    </h2>

                    <p className="text-blue-600 text-xl font-bold mt-2">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg mt-5 md:mt-0"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* Total */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-10 text-center">

            <h2 className="text-3xl font-bold text-black">
              Total: ₹{totalPrice}
            </h2>

            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg">
              Proceed to Checkout
            </button>

          </div>

        </>

      )}

    </div>

  );
}

export default Cart;