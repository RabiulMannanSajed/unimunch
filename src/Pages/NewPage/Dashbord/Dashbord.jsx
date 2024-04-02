import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderItemTab from "../OrderItemTab/OrderItemTab";
import "./Dashboard.css";
const Dashbord = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  // keep the track of it's previous path
  const { category } = useParams();

  // which path of category is same to the categories value is match then initialIndex is that value
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  console.log(dessert.item);
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      {/* this is for the first part  */}
      <div className="discount flex">
        <div className="align-middle p-10">
          <h2 className="w-[427px] h-[139px] text-white text-[40px] font-semibold font-['Fira Sans']">
            Order Food and Get Discounts Up to
          </h2>
          <h1 className="text-white text-[58px] font-semibold font-['Poppins']">
            50% off
          </h1>
        </div>
        <div className="w-max m-auto">
          <img
            src="https://i.ibb.co/cQyD2gL/Frame-4.png"
            className="w-fit"
            alt=""
          />
        </div>
      </div>

      {/* this is second part  */}
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderItemTab items={salad}></OrderItemTab>
          </TabPanel>
          {/* Pizza */}
          <TabPanel>
            <OrderItemTab items={pizza}></OrderItemTab>
          </TabPanel>

          {/* Soup */}
          <TabPanel>
            <OrderItemTab items={soup}></OrderItemTab>
          </TabPanel>

          {/* Dessert */}
          <TabPanel>
            <OrderItemTab items={dessert}></OrderItemTab>
          </TabPanel>

          {/* Drinks */}
          <TabPanel>
            <OrderItemTab items={drinks}></OrderItemTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashbord;
