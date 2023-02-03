import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from "../components/Carousel/CarouselComponent";

function HomePage() {
  return (
    <div>
      <CarouselComponent />
      <ItemListContainer />
    </div>
  );
}

export default HomePage;