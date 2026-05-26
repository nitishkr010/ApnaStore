import { useState, useEffect } from "react";

function Home({ addToCart }) {

  // Banner Images
  const banners = [

    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",

    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",

  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto Slider
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentBanner((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const sections = [

    {
      title: "Shop for a Cool Summer",
      color: "bg-green-700",

      products: [

        {
          id: 1,
          name: "Face Wash",
          offer: "Min.50% Off",
          image:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137",
        },

        {
          id: 2,
          name: "Casual Shoes",
          offer: "Min.70% Off",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },

        {
          id: 3,
          name: "Slippers",
          offer: "Min.70% Off",
          image:
            "https://images.unsplash.com/photo-1603487742131-4160ec999306",
        },

        {
          id: 4,
          name: "Smart Watch",
          offer: "Min.90% Off",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },

      ],

    },

    {
      title: "Grab or Gone",
      color: "bg-yellow-400",

      products: [

        {
          id: 5,
          name: "Bottle",
          offer: "From ₹129",
          image:
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        },

        {
          id: 6,
          name: "Jeans",
          offer: "Under ₹299",
          image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        },

        {
          id: 7,
          name: "Sunglasses",
          offer: "Under ₹199",
          image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        },

        {
          id: 8,
          name: "Wall Decor",
          offer: "From ₹69",
          image:
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        },

      ],

    },

  ];

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* Hero Slider */}
      <div className="p-4">

        <img
          src={banners[currentBanner]}
          alt="banner"
          className="
            w-full
            h-72
            md:h-96
            object-cover
            rounded-2xl
            shadow-lg
            transition-all
            duration-700
          "
        />

      </div>

      {/* Sections */}
      <div className="space-y-10 p-4">

        {sections.map((section, index) => (

          <div
            key={index}
            className={`${section.color} rounded-2xl p-4`}
          >

            {/* Section Title */}
            <div className="flex justify-between items-center mb-5">

              <h2 className="text-3xl font-bold text-white">
                {section.title}
              </h2>

              <button className="bg-white rounded-full px-4 py-2">
                →
              </button>

            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {section.products.map((product) => (

                <div
                  key={product.id}
                  className="
                    bg-white
                    rounded-xl
                    p-3
                    hover:scale-105
                    transition
                    duration-300
                  "
                >

                  <img
                    src={product.image}
                    className="
                      h-48
                      w-full
                      object-cover
                      rounded-lg
                    "
                  />

                  <h3 className="mt-3 font-semibold text-black">
                    {product.name}
                  </h3>

                  <p className="font-bold text-green-700">
                    {product.offer}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="
                      mt-3
                      w-full
                      bg-blue-600
                      text-white
                      py-2
                      rounded-lg
                      hover:bg-blue-700
                    "
                  >
                    Add to Cart
                  </button>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Home;