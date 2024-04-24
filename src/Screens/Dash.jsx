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
import axios from "axios";
import animationData from "../Components/Animation - 1712920808167.json";
import Lottie from "react-lottie";

function Dash() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };

  const url =
    "https://techrest.pythonanywhere.com/menu/chai-tapri/chai-tapri-college-road/";
  const url2 =
    "https://techrest.pythonanywhere.com/tables-view/chai-tapri/chai-tapri-college-road/";

  const [menudata, setData] = useState([]);
  const [tabledata, settabledata] = useState([]);
  const [orderdata, setorderdata] = useState([]);

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
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url2);
        settabledata(response.data);
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
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleTableClick = (id) => {
    setSelectedTable(id);
    clearSelectedItems();
  };

  function getTableIds() {
    let allTableIds = [];
    if (
      tabledata &&
      tabledata.tables &&
      Array.isArray(tabledata.tables) &&
      tabledata.tables.length > 0
    ) {
      tabledata.tables.forEach((tableList) => {
        tableList.forEach((table) => {
          allTableIds.push(table.id);
        });
      });
    }
    return allTableIds;
  }

  // Example usage: retrieving all table IDs
  const allTableIds = getTableIds();

  const [selectedTableId, setSelectedTableId] = useState(null);

  // Function to handle table click

  const handleNameClick2 = (name, price) => {
    // Check if the item already exists in selectedItems
    const existingItemIndex = selectedItems.findIndex(
      (item) => item.name === name
    );
    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity++;
      setSelectedItems(updatedItems);
    } else {
      // If the item doesn't exist, add it to selectedItems with quantity 1
      setSelectedItems((prevItems) => [
        ...prevItems,
        { name: name, price: price, quantity: 1 },
      ]);
    }
  };

  const clearSelectedItems = () => {
    setSelectedItems([]); // Clear selected items array
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
  function getOUTableList() {
    if (
      tabledata &&
      tabledata.tables &&
      Array.isArray(tabledata.tables) &&
      tabledata.tables.length > 0
    ) {
      const firstList = tabledata.tables[0]; // Index 0 represents the first list
      const tableInfo = firstList.map((table) => ({
        table_no: table.table_no,
        id: table.id,
      }));
      return tableInfo;
    } else {
      return []; // Return an empty array if tabledata.tables is not defined, not an array, or empty
    }
  }
  function getINTableList() {
    if (
      tabledata &&
      tabledata.tables &&
      Array.isArray(tabledata.tables) &&
      tabledata.tables.length > 0
    ) {
      const firstList = tabledata.tables[1]; // Index 0 represents the first list
      const tableInfo = firstList.map((table) => ({
        table_no: table.table_no,
        id: table.id,
      }));
      return tableInfo;
    } else {
      return []; // Return an empty array if tabledata.tables is not defined, not an array, or empty
    }
  }
  function getMAZTableList() {
    if (
      tabledata &&
      tabledata.tables &&
      Array.isArray(tabledata.tables) &&
      tabledata.tables.length > 0
    ) {
      const firstList = tabledata.tables[2]; // Index 0 represents the first list
      const tableInfo = firstList.map((table) => ({
        table_no: table.table_no,
        id: table.id,
      }));
      return tableInfo;
    } else {
      return []; // Return an empty array if tabledata.tables is not defined, not an array, or empty
    }
  }

  // Example usage: retrieving table info from the first list (Outdoor tables)
  const outdoorTableInfo = getOUTableList();
  const indoorTableInfo = getINTableList();
  const mazTableInfo = getMAZTableList();
  const tableNumbers1 = outdoorTableInfo.map(
    (table) => (table.id, table.table_no)
  );
  const tableNumbers2 = indoorTableInfo.map(
    (table) => (table.id, table.table_no)
  );
  const tableNumbers3 = mazTableInfo.map((table) => (table.id, table.table_no));
  function getTableList(index) {
    if (
      tabledata &&
      tabledata.tables &&
      Array.isArray(tabledata.tables) &&
      tabledata.tables.length > index
    ) {
      const list = tabledata.tables[index]; // Get the list based on the index
      const tableInfo = list.map((table) => ({
        table_no: table.table_no,
        id: table.id,
      }));
      return tableInfo;
    } else {
      return []; // Return an empty array if the table list is not defined or index is out of bounds
    }
  }
  return (
    <div>
      <div>
        {isLoading ? ( // Render spinner if isLoading is true
          <div className="flex justify-center items-center align-middle h-screen">
            <div>
              <Lottie options={defaultOptions} height={400} width={400} />
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
                  <TabsBody className="overflow-y-auto h-[90vh] scrollbar-hide">
                    {data.map(({ value, divCount, label }) => (
                      <TabPanel
                        key={value}
                        value={value}
                        className="overflow-y-auto h-full scrollbar-hide"
                      >
                        <>
                          <Accordion open={alwaysOpen}>
                            <AccordionHeader onClick={() => handleOpen(0)}>
                              Outside
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="p-1 gap-2 grid grid-cols-3 overflow-auto">
                                {getTableList(0).map((table) => (
                                  <div
                                    key={table.id}
                                    className="p-6 px-8 border-2 bg-gray-100 rounded-lg h-fit w-fit justify-center text-center align-center"
                                    onClick={() => handleTableClick(table.id)}
                                  >
                                    {table.table_no}
                                  </div>
                                ))}
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
                              <div className="p-1 gap-2 grid grid-cols-3 overflow-auto">
                                {getTableList(1).map((table) => (
                                  <div
                                    key={table.id}
                                    className="p-6 px-8 border-2 bg-gray-100 rounded-lg h-fit w-fit justify-center text-center align-center"
                                    onClick={() => handleTableClick(table.id)}
                                  >
                                    {table.table_no}
                                  </div>
                                ))}
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
                              <div className="p-1 gap-2 grid grid-cols-3 overflow-auto">
                                {getTableList(2).map((table) => (
                                  <div
                                    key={table.id}
                                    className="p-6 px-8 border-2 bg-gray-100 rounded-lg h-fit w-fit justify-center text-center align-center"
                                    onClick={() => handleTableClick(table.id)}
                                  >
                                    {table.table_no}
                                  </div>
                                ))}
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
                        {menudata.categories?.map((category) => (
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
                          {menudata.categories &&
                            menudata.categories
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
                    {selectedTable && (
                      <div className="p-1">Selected Table: {selectedTable}</div>
                    )}
                    {selectedItems.length > 0 && (
                      <div className="p-1">
                        Selected Items:
                        <ul>
                          {selectedItems.map((item, index) => (
                            <li key={index}>
                              {item.name} - X {item.quantity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <hr className="w-full"></hr>
                  </div>
                </div>
                <div className="gap-2 flex flex-row p-4 m-auto justify-center align-middle">
                  <button className="bg-orange-500 rounded-lg p-3 w-full text-white text-xl">
                    Make Order
                  </button>
                  <button className="bg-orange-500 rounded-lg p-3 w-full text-white text-xl">
                    Payment
                  </button>
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
