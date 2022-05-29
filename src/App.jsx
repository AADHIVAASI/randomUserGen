import "./App.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Heading } from "./components/heading/Heading";
import { Footing } from "./components/footer/Footer";
import { FetchButton } from "./components/Button/FetchButton";
import { Loader } from "./components/loading/Loader";
import debounce from "debounce";
import Swal from "sweetalert2";

const RandomUser = lazy(() => import("./components/User/RandomUser"));

function App() {
  const [user, setUser] = useState({
    title: "",
    fName: "",
    lName: "",
    email: "",
    thumbnail: "",
  });

  const fetchUserEnter = (e) => {
    if (e.key === "Enter" || e.deltaY > 1) {
      fetchUser();
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    timer: 2000,
    showConfirmButton: false,
    iconColor: "white",
    timerProgressBar: true,
    color: "#fff",
  });

  const UserFetch = () => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res.data.results[0]);
        setUserInfo(res.data.results[0]);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.message,
          background: "#f27474",
        });
        console.log(err);
      });
  };

  const fetchUser = debounce(UserFetch, 700);

  const copy = async (selected) => {
    if (selected === "name") {
      await navigator.clipboard.writeText(
        user.title + " " + user.fName + " " + user.lName
      );
    } else {
      await navigator.clipboard.writeText(user.email);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const preventRapidClick = () => {
    Toast.fire({
      icon: "warning",
      title: "Slow down Buddy!",
      background: "#3fc3ee",
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", fetchUserEnter, false);
    document.addEventListener("wheel", fetchUserEnter, false);

    return () => {
      document.removeEventListener("keydown", fetchUserEnter, false);
      document.removeEventListener("wheel", fetchUserEnter, false);
    };
  }, []);

  const setUserInfo = (res) => {
    setUser({
      title: res.name.title,
      fName: res.name.first,
      lName: res.name.last,
      email: res.email,
      thumbnail: res.picture.large,
    });
  };

  return (
    <div className="App">
      <div className="box">
        <Heading />
        <div className="frag">
          <Suspense fallback={<Loader />}>
            <RandomUser user={user} copy={copy} />
          </Suspense>
          <FetchButton
            fetchUser={fetchUser}
            fetchUserEnter={fetchUserEnter}
            preventRapidClick={preventRapidClick}
          />
        </div>
        <Footing />
      </div>
    </div>
  );
}

export default App;
