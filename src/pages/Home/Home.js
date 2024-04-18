import React, { useEffect, useState } from "react";
import payment from "../../assets/thanh_toan 1.png";
import delivery from "../../assets/policy_image_2 1.png";
import like from "../../assets/policy_image_1 1.png";
import Grid from "@mui/material/Grid";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="home-content">
        <div className="home-benefit">
        </div>
      </div>
    </div>
  );
}

export default Home;
