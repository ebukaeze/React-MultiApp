import React from "react";
import { PRODUCTS } from "../utils/data";
import FilterableProductsTable from "../components/FilterableProductsTable";
import WIndowsSize from "../components/WIndowsSize";
import Card from "../components/Card";
import { FaBeer, FaBlog, FaProductHunt, FaAddressBook } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      {/* <h1>Select Your Preffered APP</h1> */}
      <div className="app_container">
        <div className="grid_container">
          <Card
            title={"Product Filter App"}
            onClick={() => {}}
            icon={<FaProductHunt width={120} height={120} />}
          />
          <Card
            title={"Contact Search App"}
            link={"/contacts"}
            onClick={() => {}}
            icon={<FaAddressBook width={120} height={120} />}
          />
          <Card
            title={"Blog Post App"}
            onClick={() => {}}
            link={"/blog"}
            icon={<FaBlog width={40} height={40} />}
          />
          <Card
            title={"Blog Post App"}
            onClick={() => {}}
            link={"/blog"}
            icon={<FaBlog width={40} height={40} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
