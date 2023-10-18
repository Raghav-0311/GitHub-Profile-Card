import { Route, Routes, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
// pages
import Card from "./pages/Card"
import Home from "./pages/Home"

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const URL = "https://api.github.com/users/Raghav-0311";
  useEffect(() => {
     axios.get(URL)
      .then(function (response) {
      // handle success
      setData(response.data);
      // console.log(response);
      })
      .catch(function (error) {
      // handle error
      console.log(error);
    });
  }, [])
  

  // console.log(data.bio);

  

  const navigateHome = () => {
    navigate("/");
  }

  const navigateCard = () => {
    navigate("card");
  }

  // const navigateProfile = () => {
  //   navigate("https://github.com/Raghav-0311");
  // }

  return (
    <Routes>
      <Route path="/" element={<Home navigateHome={navigateHome} navigateCard={navigateCard}/>} />
      <Route path="card" element={<Card navigateHome={navigateHome} navigateCard={navigateCard} data={data} />} />
    </Routes>
  )
}

export default App
