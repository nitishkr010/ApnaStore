import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {

  // Dark Mode
  const [darkMode, setDarkMode] =
    useState(false);

  // Search
  const [search, setSearch] =
    useState("");

  // Cart
  const [cart, setCart] = useState([]);
  // User Menu
const [showMenu, setShowMenu] =
  useState(false);

  // Add To Cart
  const addToCart = (product) => {

    setCart([...cart, product]);

  };

  // Remove From Cart
  const removeFromCart = (index) => {

    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(updatedCart);

  };

  return (

    <BrowserRouter>

      <div
        className={
          darkMode
            ? "bg-black text-white min-h-screen"
            : "bg-gray-100 text-black min-h-screen"
        }
      >

        {/* Navbar */}
        <nav className="
          bg-blue-600
          text-white
          p-4
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        ">

          {/* Logo */}
          <h1 className="
            text-3xl
            font-bold
          ">
            ApnaStore
          </h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              px-5
              py-2
              rounded-xl
              outline-none
              w-full
              md:w-96
              text-black
              bg-white
            "
          />

          {/* Menu */}
          <ul className="
            flex
            gap-6
            text-lg
            items-center
          ">

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Cart ({cart.length})
              </Link>
            </li>

          {JSON.parse(localStorage.getItem("user")) ? (

  <li className="relative">

    {/* User Button */}
    <button
      onClick={() =>
        setShowMenu(!showMenu)
      }
      className="
        bg-white
        text-black
        px-4
        py-2
        rounded-lg
      "
    >

      👤 {
        JSON.parse(
          localStorage.getItem("user")
        )?.name
      }

    </button>

    {/* Dropdown */}
    {showMenu && (

      <div className="
        absolute
        right-0
        mt-2
        bg-white
        text-black
        rounded-xl
        shadow-xl
        w-48
        z-50
      ">

        {/* Account */}
        <Link
          to="/account"
          className="
            block
            px-4
            py-3
            hover:bg-gray-100
          "
        >

          My Account

        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="
            block
            px-4
            py-3
            hover:bg-gray-100
          "
        >

          My Cart

        </Link>

        {/* Logout */}
        <button
          onClick={() => {

            localStorage.removeItem(
              "user"
            );

            localStorage.removeItem(
              "token"
            );

            window.location.href =
              "/login";

          }}
          className="
            w-full
            text-left
            px-4
            py-3
            hover:bg-gray-100
          "
        >

          Logout

        </button>

      </div>

    )}

  </li>

) : (

  <li>

    <Link to="/login">
      Login
    </Link>

  </li>

)}

            <li>
              <Link to="/account">
                Account
              </Link>
            </li>

            {/* Dark Mode */}
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="
                bg-white
                text-black
                px-4
                py-1
                rounded-lg
              "
            >

              {darkMode
                ? "☀ Light"
                : "🌙 Dark"}

            </button>

          </ul>

        </nav>

        {/* Routes */}
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
              />
            }
          />

          {/* Products */}
          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                search={search}
              />
            }
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={
                  removeFromCart
                }
              />
            }
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Account */}
          <Route
            path="/account"
            element={<Account />}
          />

        </Routes>

        {/* Footer */}
        <footer className="
          bg-black
          text-white
          py-10
          mt-20
        ">

          <div className="
            max-w-7xl
            mx-auto
            px-6
            grid
            grid-cols-1
            md:grid-cols-4
            gap-10
          ">

            {/* Logo */}
            <div>

              <h1 className="
                text-3xl
                font-bold
                text-blue-500
              ">
                ApnaStore
              </h1>

              <p className="
                mt-4
                text-gray-400
              ">

                E-Commerce Website for shopping online products.

              </p>

            </div>

            {/* Links */}
            <div>

              <h2 className="
                text-xl
                font-bold
                mb-4
              ">
                Quick Links
              </h2>

              <ul className="
                space-y-2
                text-gray-400
              ">

                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
                <li>Login</li>

              </ul>

            </div>

            {/* Support */}
            <div>

              <h2 className="
                text-xl
                font-bold
                mb-4
              ">
                Support
              </h2>

              <ul className="
                space-y-2
                text-gray-400
              ">

                <li>
                  nitishkr7501@gmail.com
                </li>

                <li>
                  +91 8757915227
                </li>

                <li>
                  Help Center
                </li>

                <li>
                  Privacy Policy
                </li>

              </ul>

            </div>

            {/* Social */}
            <div>

              <h2 className="
                text-xl
                font-bold
                mb-4
              ">
                Follow Us
              </h2>

              <div className="
                flex
                gap-4
                text-2xl
              ">

                <span>📘</span>
                <span>📸</span>
                <span>🐦</span>
                <span>▶</span>

              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="
            text-center
            text-gray-500
            mt-10
            border-t
            border-gray-700
            pt-5
          ">

            © 2026 ApnaStore.
            All Rights Reserved.

          </div>

        </footer>

      </div>

    </BrowserRouter>

  );

}

export default App;