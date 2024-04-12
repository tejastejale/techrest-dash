import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { LineWave } from "react-spinner";
import axios from "axios";
import animationData from "../Components/Animation - 1712920808167.json";
import Lottie from "react-lottie";

function generateDivs(count) {
  const divs = [];
  for (let i = 1; i <= count; i++) {
    divs.push(
      <div
        key={i}
        className="p-6 px-8 border-2 bg-gray-100 rounded-lg h-fit w-fit justify-center text-center align-center"
      >
        <p>{i}</p>
      </div>
    );
  }
  return divs;
}

function Dash() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };

  const url =
    "https://techrest.pythonanywhere.com/menu/chai-tapri/chai-tapri-college-road/";
  const [data3, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading spinner

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or error
      }
    }
    fetchData();
  }, []);

  const [activeTab2, setActiveTab2] = React.useState("all");
  const [selectedName, setSelectedName] = React.useState(null);

  // const [selectedName, setSelectedName] = useState(null);
  const [clickedData, setClickedData] = useState([]);

  const handleNameClick2 = (name, price) => {
    setSelectedName(name);
    // Append clicked data to the clickedData array
    setClickedData((prevData) => [...prevData, { key: name, value: price }]);
  };

  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleNameClick = (name) => {
    setSelectedName(name);
  };
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setActiveSubcategory(null); // Reset subcategory when category is clicked
  };

  const handleSubcategoryClick = (subcategoryName) => {
    setActiveSubcategory(subcategoryName);
  };
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (subcategory) => {
    setSelectedMenu(subcategory.menus);
  };

  const [activeTab, setActiveTab] = React.useState("home");
  const data = [
    {
      label: "Home",
      value: "home",
      divCount: 4,
    },
    {
      label: "Take Away",
      value: "takeaway",
      divCount: 5,
    },
    {
      label: "Dine in",
      value: "dinein",
      divCount: 3,
    },
  ];
  console.table(data3);

  return (
    <div>
      <div>
        {isLoading ? ( // Render spinner if isLoading is true
          <div className="flex justify-center items-center align-middle h-screen">
            <div>
              <Lottie options={defaultOptions} height={500} width={500} />
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="flex flex-row w-full h-[100vh]">
              <div className="border-2 w-1/4 p-2">
                <Tabs value={activeTab}>
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    {data.map(({ label, value }) => (
                      <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                      >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody>
                    {data.map(({ value, divCount, label }) => (
                      <TabPanel key={value} value={value}>
                        <>
                          <Accordion open={alwaysOpen}>
                            <AccordionHeader onClick={() => handleOpen(0)}>
                              Outside
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
                                {generateDivs(divCount)}
                              </div>
                            </AccordionBody>
                          </Accordion>
                        </>
                        <>
                          <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                              Inside
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
                                {generateDivs(divCount)}
                              </div>
                            </AccordionBody>
                          </Accordion>
                        </>
                        <>
                          <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                              Mazzieen
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
                                {generateDivs(divCount)}
                              </div>
                            </AccordionBody>
                          </Accordion>
                        </>
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>
              <div className="border-2 w-2/4">
                <div className="p-2 flex flex-col">
                  <div className="h-[35vh] w-full overflow-auto">
                    <Tabs value={activeTab2}>
                      <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                          className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                      >
                        {data3.categories?.map((category) => (
                          <Tab
                            key={category.name}
                            value={category.name}
                            onClick={() => setActiveTab2(category.name)}
                            className={
                              activeTab2 === category.name
                                ? "text-gray-900"
                                : ""
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </TabsHeader>
                      <TabsBody>
                        <div className="grid grid-cols-5 gap-2 p-2 justify-center m-auto">
                          {data3.categories &&
                            data3.categories
                              .find((category) => category.name === activeTab2)
                              ?.subcategories?.map((subcategory) => (
                                <div
                                  key={subcategory.id}
                                  className="border-2 hover:cursor-pointer rounded-lg p-3 overflow-auto w-full h-full flex flex-col text-center"
                                  onClick={() => handleMenuClick(subcategory)}
                                >
                                  {subcategory.name}
                                </div>
                              ))}
                        </div>
                      </TabsBody>
                    </Tabs>
                  </div>
                  <div className="border-2 h-[60vh] w-full rounded-lg overflow-hidden">
                    <div className="w-full bg-orange-500 text-white h-fit p-2 text-xl align-middle m-auto">
                      Dishes
                    </div>
                    <div className="">
                      {selectedMenu && (
                        <div className="grid grid-cols-5 grid-rows-2 gap-5 p-2 w-full h-full overflow-auto">
                          {selectedMenu.map((menu) => (
                            <div className="">
                              <div
                                key={menu.id}
                                className="bg-gray-100 p-2 rounded-lg h-full hover:cursor-pointer"
                                onClick={() =>
                                  handleNameClick2(menu.name, menu.price)
                                }
                              >
                                <h1>{menu.name}</h1>
                                <hr class="h-[2px] mx-auto my-2 bg-gray-300  rounded-md" />
                                <p>Price: {menu.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 ">
                <div className="bg-orange-500 text-white w-full p-2 text-xl overflow-auto ">
                  Added Food
                </div>
                <div className="overflow-auto border-b-2 max-h-[80vh] h-full">
                  <div className="p-2">
                    {clickedData.map((name, data) => (
                      <div key={data} className="p-1">
                        <p className="p-1">
                          {name.key} : {name.value}
                        </p>
                        <hr className="w-full"></hr>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dash;
