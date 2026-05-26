function Products({ addToCart, search }) {

  const products = [

    {
      id: 1,
      name: "Smart Watch",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 2,
      name: "iPhone",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      id: 3,
      name: "Headphones",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 4,
      name: "Laptop",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 5,
      name: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },

    {
      id: 6,
      name: "Keyboard",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    },

    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },

    {
      id: 8,
      name: "Camera",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },

    {
      id: 9,
      name: "Shoes",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 10,
      name: "Backpack",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },

    {
      id: 11,
      name: "Sunglasses",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },

    {
      id: 12,
      name: "Tablet",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    },

    {
      id: 13,
      name: "T-Shirt",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },

    {
      id: 14,
      name: "Jacket",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
    },

    {
      id: 15,
      name: "Smart TV",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    },

  ];

  // Search Filter
  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="p-10 min-h-screen">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">
        Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <div
              key={product.id}
              className="
                bg-white
                dark:bg-gray-900
                rounded-2xl
                shadow-lg
                p-5
                hover:scale-105
                transition
                duration-300
              "
            >

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="
                  rounded-xl
                  h-60
                  w-full
                  object-cover
                  hover:scale-105
                  transition
                  duration-300
                "
              />

              {/* Product Name */}
              <h2 className="
                text-2xl
                font-bold
                mt-4
                text-black
                dark:text-white
              ">
                {product.name}
              </h2>

              {/* Price */}
              <p className="text-blue-600 text-xl font-bold mt-2">
                ₹{product.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-5">

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="
                    bg-blue-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                    transition
                  "
                >
                  Add to Cart
                </button>

                {/* Buy Now */}
                <button
                  className="
                    bg-green-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    hover:bg-green-700
                    transition
                  "
                >
                  Buy Now
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="
            col-span-3
            text-center
            text-3xl
            font-bold
            text-red-500
          ">
            No Product Found 😔
          </div>

        )}

      </div>

    </div>

  );
}

export default Products;