import React from "react";
import products from "../Products.json";
import Card from "./Card";

const Main = ({ handleClick }) => {
  return (
    <div className="mt-20 p-6 flex justify-center ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </div>
  </div>
  );
};

export default Main;
