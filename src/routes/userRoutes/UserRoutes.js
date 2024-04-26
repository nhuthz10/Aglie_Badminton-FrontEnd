import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "../../pages/cart/Cart";
import Error from "../../pages/error/Error";
import UserLayout from "../../layout/userLayout/UserLayout";
import { path } from "../../utils";
import { useEffect } from "react";

var userPages = [
  {
    path: "cart",
    element: (
      <UserLayout>
        <Cart />
      </UserLayout>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
];

function UserRoutes() {
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  useEffect(() => {
    if (!login) {
      navigate(path.HOME);
    }
  }, [login, navigate]);

  return (
    <Routes>
      {userPages.map((page, index) => {
        return <Route path={page.path} element={page.element} key={index} />;
      })}
    </Routes>
  );
}

export default UserRoutes;
