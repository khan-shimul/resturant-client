import OrderCard from "../OrderCard/OrderCard";

const TabCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-10">
      {items.map((item) => (
        <OrderCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default TabCard;
