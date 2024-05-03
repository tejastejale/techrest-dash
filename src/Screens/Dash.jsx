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
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
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
  const [openModal, setOpenModal] = React.useState(false);

  // Function to open or close the modal
  const handleOpenModal = () => setOpenModal(!openModal);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("");
  const handlePaymentMethodChange = (method) =>
    setSelectedPaymentMethod(method);

  const [paymentMethod, setPaymentMethod] = useState(""); // Track payment method
  const [selectedTableOrderId, setSelectedTableOrderId] = useState(null); // Track selected table order ID
  // Function to handle payment
  const makePayment = async () => {
    if (!selectedPaymentMethod || !selectedTableOrderId) {
      alert("Please select a payment method and a table order.");
      return;
    }
    console.log(selectedTableOrderId);
    console.log(selectedPaymentMethod);
    const paymentData = {
      paymentMethod: selectedPaymentMethod,
      table_order_id: selectedTableOrderId,
    };

    try {
      const response = await axios.post(
        "https://techrest.pythonanywhere.com/make-payment-admin/",
        paymentData
      );
      console.log("Payment made successfully:", response.data);
      // Optionally, you can handle any UI updates or additional logic after payment
    } catch (error) {
      console.error("Error making payment:", error);
      alert("Error making payment. Please try again later.");
    }
    window.location.reload();
  };

  const submitOrder = async () => {
    if (!selectedTableId || selectedItems.length === 0) {
      alert("Please select a table and add items to make an order.");
      return;
    }

    const requestData = {
      table_id: selectedTableId,
      products: selectedItems.map((item) => ({
        quantity: item.quantity,
        item: item.id,
      })),
    };
    console.log(requestData);

    try {
      const response = await axios.post(
        "https://techrest.pythonanywhere.com/order/",
        requestData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJlbXB0eSIsIm1vYmlsZV9udW1iZXIiOiIxMjM0NTY3ODkwIn0.R0RDCWA8DfhWRQMysGoC9RS8CVRUy1NHS9JMUDhNWpM",
          },
        }
      );
      console.log("Order submitted successfully:", response.data);
      // Clear selected items after successful order submission
      clearSelectedItems();
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order. Please try again later.");
    }
    window.location.reload();
  };
  const url =
    "https://techrest.pythonanywhere.com/menu/chai-tapri/chai-tapri-college-road/";
  const url2 =
    "https://techrest.pythonanywhere.com/tables-view/chai-tapri/chai-tapri-college-road/";

  const [menudata, setData] = useState([]);
  const [tabledata, settabledata] = useState([]);
  const [orderdata, setorderdata] = useState([]);
  const [tableOrderData, setTableOrderData] = useState(null);
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
  const fetchTableOrderData = async (tableId) => {
    try {
      const response = await axios.get(
        `https://TechRest.pythonanywhere.com/get-table-order/${tableId}`
      );
      setTableOrderData(response.data);
      setSelectedTableOrderId(response.data.table_order.id); // Update selected table order ID
    } catch (error) {
      console.error("Error fetching table order data:", error);
    }
  };
  const [activeTab2, setActiveTab2] = React.useState("kabhi-kabhi");
  const [selectedName, setSelectedName] = React.useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleTableClick = (id, name) => {
    setSelectedTable(id);
    setSelectedTableId(id);
    setSelectedTableName(name); // Set selected table name

    clearSelectedItems();
    fetchTableOrderData(id);

    console.log("Selected Table ID:", id);
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
  const [selectedTableName, setSelectedTableName] = useState(null); // State to store selected table name

  // Function to handle table click

  const handleNameClick2 = (name, price, id) => {
    const existingItemIndex = selectedItems.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity++;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems((prevItems) => [
        ...prevItems,
        { id: id, name: name, price: price, quantity: 1 },
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
        table_color: table.table_color,
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
                                    className={`p-6 px-8 border-2 font-bold rounded-lg h-fit w-fit justify-center text-center align-center`}
                                    style={{
                                      backgroundColor: table.table_color,
                                      color:
                                        table.table_color === "#B33F40"
                                          ? "white"
                                          : "black",
                                    }}
                                    onClick={() =>
                                      handleTableClick(table.id, table.table_no)
                                    }
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
                                    className={`p-6 px-8 border-2 font-bold rounded-lg h-fit w-fit justify-center text-center align-center`}
                                    style={{
                                      backgroundColor: table.table_color,
                                      color:
                                        table.table_color === "#B33F40"
                                          ? "white"
                                          : "black",
                                    }}
                                    onClick={() =>
                                      handleTableClick(table.id, table.table_no)
                                    }
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
                                    className={`p-6 px-8 border-2 font-bold rounded-lg h-fit w-fit justify-center text-center align-center`}
                                    style={{
                                      backgroundColor: table.table_color,
                                      color:
                                        table.table_color === "#B33F40"
                                          ? "white"
                                          : "black",
                                    }}
                                    onClick={() =>
                                      handleTableClick(table.id, table.table_no)
                                    }
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
                            <div className="" key={menu.id}>
                              <div
                                key={menu.id}
                                className="bg-gray-100 p-2 rounded-lg h-full hover:cursor-pointer"
                                onClick={() =>
                                  handleNameClick2(
                                    menu.name,
                                    menu.price,
                                    menu.id
                                  )
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
              <div className="w-1/4 border-2">
                <div className="bg-orange-500 text-white w-full p-2 text-xl overflow-auto ">
                  Added Food
                </div>
                <div className="overflow-auto border-b-2 max-h-[80vh] h-full">
                  <div className="p-2">
                    {selectedTableName && (
                      <div className="p-1 font-semibold">
                        <hr className="w-full"></hr>
                        Selected Table: {selectedTableName}
                      </div>
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
                    <div className="p-0">
                      {tableOrderData ? (
                        tableOrderData.msg ? (
                          <div className="p-1">{tableOrderData.msg}</div>
                        ) : (
                          <>
                            <div>
                              {/* <div className="p-1">
                                Table Order ID: {tableOrderData.table_order.id}
                              </div> */}
                              {/* <div className="p-1">
                                Started At:{" "}
                                {tableOrderData.table_order.started_at}
                              </div>
                              <div className="p-1">
                                Completed At:{" "}
                                {tableOrderData.table_order.completed_at ||
                                  "N/A"}
                              </div>
                              <div className="p-1">
                                Is Paid:{" "}
                                {tableOrderData.table_order.is_paid
                                  ? "Yes"
                                  : "No"}
                              </div>
                              <div className="p-1">
                                Is Pending:{" "}
                                {tableOrderData.table_order.is_pending
                                  ? "Yes"
                                  : "No"}
                              </div>
                              <div className="p-1">
                                Payment Method:{" "}
                                {tableOrderData.table_order.payment_method ||
                                  "N/A"}
                              </div>
                              <div className="p-1">
                                Is Ready Pay:{" "}
                                {tableOrderData.table_order.is_ready_pay
                                  ? "Yes"
                                  : "No"}
                              </div> */}
                            </div>
                            <div className="p-1">
                              <p className="font-semibold pb-1">
                                Recent Orders:
                              </p>
                              <ul>
                                {tableOrderData.orders.map((order, index) => (
                                  <li key={index} className="">
                                    <div className="pt-2">
                                      {/* Calculate custom KOT ID based on index */}
                                      <div className="px-1 text-md font-medium bg-gray-300 -mb-1 rounded-t-md">
                                        KOT ID: {index + 1}
                                      </div>
                                      <ul>
                                        {order.order_details.map(
                                          (detail, detailIndex) => (
                                            <li
                                              key={detailIndex}
                                              className="py-1"
                                            >
                                              <div className="p-2 bg-gray-200 -mb-2">
                                                {detail.item_name} X
                                                {detail.quantity}
                                                <p>Price: {detail.price}</p>
                                                <p>{detail.table_order_id}</p>
                                              </div>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-1 font-semibold text-lg">
                              <hr className="w-full "></hr>
                              Total: {tableOrderData.total}
                            </div>
                          </>
                        )
                      ) : (
                        <div className="p-1">
                          No table order data available.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="gap-2 flex flex-row p-4 m-auto justify-center align-middle">
                  <button
                    onClick={submitOrder}
                    className="bg-orange-500 rounded-lg p-3 w-full text-white text-xl"
                  >
                    Make Order
                  </button>
                  <button
                    className="bg-orange-500 rounded-lg p-3 w-full text-white text-xl"
                    onClick={handleOpenModal}
                  >
                    Payment
                  </button>
                  <div>
                    <Dialog
                      open={openModal}
                      handler={handleOpenModal}
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                      }}
                    >
                      <DialogHeader>Select Method</DialogHeader>
                      <DialogBody className="flex flex-row justify-evenly">
                        <div className="text-xl font-semibold">
                          <Checkbox
                            color="orange"
                            label="Cash"
                            checked={selectedPaymentMethod === "cash"}
                            onChange={() => handlePaymentMethodChange("cash")}
                          />
                        </div>
                        <div className="text-xl font-semibold">
                          <Checkbox
                            color="orange"
                            label="Online"
                            checked={selectedPaymentMethod === "online"}
                            onChange={() => handlePaymentMethodChange("online")}
                          />
                        </div>
                      </DialogBody>
                      <DialogFooter className="flex flex-row justify-center">
                        <Button
                          variant="text"
                          color="orange"
                          onClick={handleOpenModal}
                          className="mr-1 border-solid border-[1px] border-orange-500"
                        >
                          <span>Cancel</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="orange"
                          onClick={() => {
                            makePayment(); // Call makePayment when "Confirm" is clicked
                            handleOpenModal(); // Call handleOpenModal when "Confirm" is clicked
                          }}
                          className="bg-orange-500 "
                        >
                          <span>Confirm</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>
                <div className="gap-2 flex flex-row p-4 m-auto justify-center align-middle">
                  {/* Payment method selection */}
                  {/* <div>
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                      id="paymentMethod"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="border rounded-lg p-2 ml-2"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="cash">Cash</option>
                      <option value="online">Online</option>
                    </select>
                  </div> */}
                  {/* <button
                    onClick={makePayment} // Call makePayment function on button click
                    className="bg-orange-500 rounded-lg p-3 w-full text-white text-xl"
                  >
                    Make Payment
                  </button> */}
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
