const OrderCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-5 top-5 px-3">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mb-10 border-orange-600 bg-slate-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
