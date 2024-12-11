import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBG from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import { useFilterMenu } from "../../../hooks/useFilterMenu";

const Menu = () => {
  const offered = useFilterMenu("offered");
  const dessert = useFilterMenu("dessert");
  const pizza = useFilterMenu("pizza");
  const salad = useFilterMenu("salad");
  const soup = useFilterMenu("soup");
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
      <MenuCategory items={dessert} title="dessert" img={dessertBg} />
      {/* Pizza */}
      <MenuCategory items={pizza} title="pizza" img={pizzaBG} />
      {/* Salad */}
      <MenuCategory items={salad} title="salad" img={saladBg} />
      {/* Soup */}
      <MenuCategory items={soup} title="soup" img={soupBg} />
    </div>
  );
};

export default Menu;
