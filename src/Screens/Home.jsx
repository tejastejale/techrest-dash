import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Home() {
  const [activeTab, setActiveTab] = React.useState("dine"); // Set default tab to "dine"
  const [openAccordions, setOpenAccordions] = React.useState([0]); // Include the index of the first accordion (0-based)

  const handleAccordionToggle = (index) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(index)) {
        return prevOpenAccordions.filter((item) => item !== index);
      } else {
        return [...prevOpenAccordions, index];
      }
    });
  };

  // Dynamic accordion data array
  const accordionData = [
    {
      label: "Outside",
      content: (
        <div>
          <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
            <div className="border-solid border-2 active:scale-90 transition-all  rounded-md p-8 bg-green-500">
              1
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-red-500">
              2
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-blue-500">
              3
            </div>
            <div className="border-solid active:scale-90 transition-all rounded-md border-2 p-8">
              4
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Inside",
      content: (
        <div>
          <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-green-500">
              1
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-red-500">
              2
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-blue-500">
              3
            </div>
            <div className="border-solid active:scale-90 transition-all rounded-md border-2 p-8">
              4
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Mazineen",
      content: (
        <div>
          <div className="grid grid-cols-3 gap-4 align-middle m-auto content-center text-center">
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-green-500">
              1
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-red-500">
              2
            </div>
            <div className="border-solid border-2 active:scale-90 transition-all rounded-md p-8 bg-blue-500">
              3
            </div>
            <div className="border-solid active:scale-90 transition-all rounded-md border-2 p-8">
              4
            </div>
          </div>
        </div>
      ),
    },
    // Add more accordion data objects as needed
  ];

  const data = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Food",
      value: "food",
    },
    {
      label: "Bevrages",
      value: "bevrages",
    },
    {
      label: "Alcoholic",
      value: "alcoholic",
    },
    {
      label: "Wine",
      value: "wine",
    },
  ];
  const data2 = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "Take",
      value: "take",
    },
    {
      label: "Dine In",
      value: "dine",
    },
  ];

  // Function to render accordion items dynamically
  const renderAccordions = () => {
    return accordionData.map((item, index) => (
      <Accordion
        key={index}
        open={openAccordions.includes(index)}
        // Set the first accordion to be opened initially
        defaultOpen={index === 0}
      >
        <AccordionHeader onClick={() => handleAccordionToggle(index)}>
          {item.label}
        </AccordionHeader>
        <AccordionBody>{item.content}</AccordionBody>
      </Accordion>
    ));
  };

  // Array to hold dynamic content for each tab
  const tabContent = {
    dine: <div>{renderAccordions()}</div>,
    take: <div>This is Take content.</div>,
    home: <div>This is Home content.</div>,
  };
  const tabContent2 = {
    all: [
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
      "1",
      "2",
    ],
    food: ["1", "2", "1", "2", "1", "2", "1", "2"],
    bevrages: ["1", "2", "1", "2"],
    alcoholic: ["1", "2", "1", "2", "1", "2"],
    wine: ["1", "2", "2", "1", "2"],
  };

  return (
    <div>
      <div className="flex h-full w-full">
        <div className="w-3/12 border-solid border-2 h-screen">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-100 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data2.map(({ label, value }) => (
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
              {data2.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  {/* Render dynamic content based on active tab */}
                  {tabContent[value]}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className="w-6/12 border-solid border-2 h-screen">
          <div className="h-2/6 border-solid border-2 overflow-auto">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none sticky border-b border-blue-gray-100 bg-transparent p-0"
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

              <TabsBody className="overflow-auto flex flex-col">
                {data.map(({ value }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="p-2 w-fit h-fit overflow-auto flex flex-col"
                  >
                    {/* Render dynamic content based on active tab */}
                    <div className=" flex gap-4  flex-row overflow-auto">
                      {tabContent2[value].map((item, index) => (
                        <div
                          className="border-2 rounded-lg p-4 overflow-auto flex flex-col"
                          key={index}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
        <div className="w-3/12 border-solid border-2 h-screen"></div>
      </div>
    </div>
  );
}

export default Home;
