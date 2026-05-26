import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] =
    useState(true);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",

    });

  // Handle Input
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // Submit Form
  const handleSubmit = async (e) => {

    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {

      const response = await fetch(url, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });

      const data = await response.json();

      console.log(data);

      alert(data.message);

      // Save Token
      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

      }

      // Save User
      if (data.user) {

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

      }

      // Redirect
      if (
        data.message ===
          "Login Successful" ||

        data.message ===
          "Registration Successful"
      ) {

        navigate("/account");

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="
      flex
      justify-center
      items-center
      min-h-screen
      bg-gradient-to-r
      from-blue-100
      to-purple-100
      p-4
    ">

      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          p-10
          rounded-3xl
          shadow-2xl
          w-full
          max-w-md
        "
      >

        {/* Heading */}
        <h1 className="
          text-5xl
          font-bold
          text-center
          mb-10
          text-black
        ">

          {isLogin
            ? "Login"
            : "Register"}

        </h1>

        {/* Name */}
        {!isLogin && (

          <div className="mb-5">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-2xl
                bg-gray-100
                outline-none
                focus:ring-2
                focus:ring-blue-400
                text-black
              "
            />

          </div>

        )}

        {/* Email */}
        <div className="mb-5">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
              focus:ring-2
              focus:ring-blue-400
              text-black
            "
          />

        </div>

        {/* Password */}
        <div className="
          mb-5
          relative
        ">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
              focus:ring-2
              focus:ring-blue-400
              text-black
            "
          />

          {/* Toggle */}
          <span
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-5
              top-4
              cursor-pointer
              text-gray-500
            "
          >

            {showPassword
              ? "🙈"
              : "👁"}

          </span>

        </div>

        {/* Remember */}
        <div className="
          flex
          justify-between
          items-center
          mb-6
          text-black
        ">

          <label className="
            flex
            items-center
            gap-2
          ">

            <input type="checkbox" />

            Remember Me

          </label>

          <span className="
            text-blue-600
            cursor-pointer
          ">

            Forgot Password?

          </span>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            text-white
            py-4
            rounded-2xl
            hover:bg-blue-700
            transition
            duration-300
            text-xl
            font-semibold
          "
        >

          {isLogin
            ? "Login"
            : "Register"}

        </button>

        {/* Divider */}
        <div className="
          flex
          items-center
          gap-4
          my-6
        ">

          <hr className="flex-1" />

          <span className="
            text-gray-500
          ">
            OR
          </span>

          <hr className="flex-1" />

        </div>

        {/* Google */}
        <button
          type="button"
          className="
            w-full
            border
            py-4
            rounded-2xl
            flex
            justify-center
            items-center
            gap-3
            hover:bg-gray-100
            transition
            text-black
          "
        >

          🌐 Continue with Google

        </button>

        {/* Toggle */}
        <p
          onClick={() =>
            setIsLogin(!isLogin)
          }
          className="
            text-center
            mt-8
            cursor-pointer
            text-blue-600
            font-semibold
          "
        >

          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}

        </p>

      </form>

    </div>

  );

}

export default Login;