import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/directory";
import HomePageContainer from "./homepageStyles";

const HomePage = ({ history }) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
