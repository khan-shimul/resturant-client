import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBG from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Menu */}
      <Cover img={menuBg} title="Our Menu" />
      <SectionTitle heading="Today's Offer" subHeading="Don't Miss" />
      <MenuCategory items={offered} />
      {/* Dessert */}
      <MenuCategory items={dessert} title="Desserts" img={dessertBg} />
      {/* Pizza */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaBG} />
      {/* Salad */}
      <MenuCategory items={salad} title="Salad" img={saladBg} />
      {/* Soup */}
      <MenuCategory items={soup} title="Soup" img={soupBg} />
    </div>
  );
};

export default Menu;
