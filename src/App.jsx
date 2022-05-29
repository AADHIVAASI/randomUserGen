import "./App.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Heading from "./components/heading/Heading";
import Foot from "./components/footer/Footer";
import FetchButton from "./components/Button/FetchButton";
import Loader from "./components/loading/Loader";
import debounce from "debounce";
import Swal from "sweetalert2";
import { alertBoxConf } from "./components/StaticObjs";

const RandomUser = lazy(() => import("./components/User/RandomUser"));

function App() {
  const [userInfo, setUserInfo] = useState({
    title: "",
    fName: "",
    lName: "",
    email: "",
    thumbnail: "",
  });

  const fetchUserAlt = (e) => {
    if (e.key === "Enter" || e.deltaY > 1) {
      fetchUser();
    }
  };

  const Toast = Swal.mixin(alertBoxConf);

  const ApiCall = () => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        storeUserInfo(res.data.results[0]);
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

  const fetchUser = debounce(ApiCall, 800);

  const copy = async (selected) => {
    if (selected === "name") {
      await navigator.clipboard.writeText(
        userInfo.title + " " + userInfo.fName + " " + userInfo.lName
      );
    } else {
      await navigator.clipboard.writeText(userInfo.email);
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
    document.addEventListener("keydown", fetchUserAlt, false);
    document.addEventListener("wheel", fetchUserAlt, false);

    return () => {
      document.removeEventListener("keydown", fetchUserAlt, false);
      document.removeEventListener("wheel", fetchUserAlt, false);
    };
  }, []);

  const storeUserInfo = (res) => {
    setUserInfo({
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
            <RandomUser userInfo={userInfo} copy={copy} />
          </Suspense>
          <FetchButton
            fetchUser={fetchUser}
            fetchUserAlt={fetchUserAlt}
            preventRapidClick={preventRapidClick}
          />
        </div>
        <Foot />
      </div>
    </div>
  );
}

export default App;
