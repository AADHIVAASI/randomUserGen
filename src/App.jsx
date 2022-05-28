import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "./components/heading/Heading";
import { Footing } from "./components/footer/Footer";
import { RandomUser } from "./components/User/RandomUser";
import { FetchButton } from "./components/Button/FetchButton";
import { Loader } from "./components/loading/Loader";
import debounce from "debounce";

function App() {
  const [user, setUser] = useState({
    title: "",
    fName: "",
    lName: "",
    email: "",
    thumbnail: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchUserEnter = (e) => {
    if (e.key === "Enter" || e.deltaY > 1) {
      fetchUser();
    }
  };

  const UserFetch = () => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        setUserInfo(res.data.results[0]);
      })
      .catch((err) => console.log(err));
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

  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="box">
        <Heading />
        <div className="frag">
          <Loader loading={loading} />
          <RandomUser
            user={user}
            loading={loading}
            imageLoaded={imageLoaded}
            copy={copy}
          />
          <FetchButton fetchUser={fetchUser} fetchUserEnter={fetchUserEnter} />
        </div>
        <Footing />
      </div>
    </div>
  );
}

export default App;
