import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store"; 
import HomeContent from "./components/HomeContent"; 

const Home: React.FC = () => {
  return (
    <Provider store={store} children={<HomeContent />} />
  );
};

export default Home;
