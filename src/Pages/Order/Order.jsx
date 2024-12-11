import Cover from "../Shared/Cover/Cover";
import orderCoverPage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useFilterMenu } from "../../hooks/useFilterMenu";
import TabCard from "../../components/TabCard/TabCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  //   Filtered Menu Items
  const drinks = useFilterMenu("drinks");
  const dessert = useFilterMenu("dessert");
  const pizza = useFilterMenu("pizza");
  const salad = useFilterMenu("salad");
  const soup = useFilterMenu("soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover title="Order Food" img={orderCoverPage} />
      <Tabs
        className="my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <TabCard items={salad} />
        </TabPanel>
        <TabPanel>
          <TabCard items={pizza} />
        </TabPanel>
        <TabPanel>
          <TabCard items={soup} />
        </TabPanel>
        <TabPanel>
          <TabCard items={dessert} />
        </TabPanel>
        <TabPanel>
          <TabCard items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
