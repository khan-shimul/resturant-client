import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-5 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="mx-auto flex btn btn-outline border-0 border-b-4 mb-10">
        <Link to={`/order/${title}`}>Read More</Link>
      </button>
    </div>
  );
};

export default MenuCategory;
