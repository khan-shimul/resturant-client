import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase font-medium">{name}-------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-500 font-medium">${price}</p>
    </div>
  );
};

export default MenuItem;
