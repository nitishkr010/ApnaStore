import { Navigate } from "react-router-dom";

function Account() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // Protected Route
  if (!user) {

    return <Navigate to="/login" />;

  }

  return (

    <div className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100
    ">

      <div className="
        bg-white
        p-10
        rounded-3xl
        shadow-2xl
        text-center
        w-96
      ">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          className="
            w-28
            h-28
            mx-auto
            mb-6
          "
        />

        <h1 className="
          text-4xl
          font-bold
          text-black
        ">

          Welcome

        </h1>

        <h2 className="
          text-2xl
          mt-4
          font-semibold
          text-blue-600
        ">

          {user.name}

        </h2>

        <p className="
          mt-3
          text-gray-600
        ">

          {user.email}

        </p>

      </div>

    </div>

  );

}

export default Account;