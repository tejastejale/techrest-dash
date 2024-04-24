import React, { useState, useEffect } from "react";
import axios from "axios";
// Assuming data3 is provided as described in the new dataset structure

const MenuComponent = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName === activeCategory ? null : categoryName);
  };
  const data3 = {
    id: 1,
    categories: [
      {
        name: "Kabhi-Kabhi",
        subcategories: [
          {
            name: "Pizza",
            menus: [
              {
                id: 1,
                name: "Veg Supreme Pizza",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description:",
                price: "120.00",
                images: [],
              },
              {
                id: 2,
                name: "Paneer Tikka Pizza",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "140.00",
                images: [],
              },
              {
                id: 3,
                name: "Corn Cheese Pizza",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "140.00",
                images: [],
              },
            ],
          },
          {
            name: "Sandwiches",
            menus: [
              {
                id: 4,
                name: "Veg Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "50.00",
                images: [],
              },
              {
                id: 5,
                name: "Veg Cheese Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "100.00",
                images: [],
              },
              {
                id: 6,
                name: "Veg Mayo Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "80.00",
                images: [],
              },
              {
                id: 7,
                name: "Corn Cheese Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "80.00",
                images: [],
              },
              {
                id: 8,
                name: "Paneer Tikka Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "100.00",
                images: [],
              },
              {
                id: 13,
                name: "Bombay Masala Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "100.00",
                images: [],
              },
              {
                id: 14,
                name: "Chocolate Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "70.00",
                images: [],
              },
              {
                id: 15,
                name: "Cheese Lava Sandwich",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "90.00",
                images: [],
              },
            ],
          },
        ],
      },
      {
        name: "Garma-Garam",
        subcategories: [
          {
            name: "Chai",
            menus: [
              {
                id: 9,
                name: "Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "20.00",
                images: [],
              },
              {
                id: 10,
                name: "Cutting Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "15.00",
                images: [],
              },
              {
                id: 11,
                name: "Special Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "30.00",
                images: [],
              },
              {
                id: 12,
                name: "Make My Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "30.00",
                images: [],
              },
              {
                id: 16,
                name: "Ginger Lemon Honey Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "50.00",
                images: [],
              },
              {
                id: 17,
                name: "Sugar Free Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "30.00",
                images: [],
              },
              {
                id: 18,
                name: "Black Chai",
                icon: null,
                gif: null,
                expected_delivery: 5,
                description: "description",
                price: "30.00",
                images: [],
              },
              {
                id: 19,
                name: "Green Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "30.00",
                images: [],
              },
            ],
          },
          {
            name: "Coffee",
            menus: [
              {
                id: 20,
                name: "Hot Coffee",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "40.00",
                images: [],
              },
            ],
          },
          {
            name: "Maggi",
            menus: [
              {
                id: 27,
                name: "Masala Maggi",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "50.00",
                images: [],
              },
              {
                id: 28,
                name: "Butter Maggi",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 29,
                name: "Masala Maggi Peri Peri",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 30,
                name: "Masala Maggi Shezwan",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 31,
                name: "Butter Cheese Maggi",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "70.00",
                images: [],
              },
              {
                id: 32,
                name: "Butter Onion Maggi",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 33,
                name: "Butter Onion Cheese Maggi",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
            ],
          },
        ],
      },
      {
        name: "Sath-Sath",
        subcategories: [
          {
            name: "Bun",
            menus: [
              {
                id: 21,
                name: "Bun Maska",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "45.00",
                images: [],
              },
              {
                id: 22,
                name: "Bun Maska Jam",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "50.00",
                images: [],
              },
              {
                id: 23,
                name: "Bun Cheese Maska",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "60.00",
                images: [],
              },
              {
                id: 24,
                name: "Bun Maska Chocolate",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "50.00",
                images: [],
              },
            ],
          },
          {
            name: "Toast",
            menus: [
              {
                id: 34,
                name: "Garlic Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "30.00",
                images: [],
              },
              {
                id: 35,
                name: "Chilli Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "30.00",
                images: [],
              },
              {
                id: 36,
                name: "Cheese Chilli Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "60.00",
                images: [],
              },
              {
                id: 37,
                name: "Cheese Garlic Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "60.00",
                images: [],
              },
              {
                id: 38,
                name: "Onion Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "30.00",
                images: [],
              },
              {
                id: 39,
                name: "Cheese Onion Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "60.00",
                images: [],
              },
            ],
          },
          {
            name: "Fries",
            menus: [
              {
                id: 40,
                name: "French Fries",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "60.00",
                images: [],
              },
              {
                id: 41,
                name: "French Fries Peri Peri",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "70.00",
                images: [],
              },
              {
                id: 42,
                name: "Cheesy Fries",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "90.00",
                images: [],
              },
            ],
          },
          {
            name: "Bread",
            menus: [
              {
                id: 25,
                name: "Bread Butter Regular / Toast",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "45.00",
                images: [],
              },
              {
                id: 26,
                name: "Bread Butter Jam",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "Description",
                price: "50.00",
                images: [],
              },
            ],
          },
          {
            name: "Khari",
            menus: [
              {
                id: 52,
                name: "Khari",
                icon: null,
                gif: null,
                expected_delivery: 5,
                description: "description",
                price: "30.00",
                images: [],
              },
              {
                id: 53,
                name: "Butter Khari",
                icon: null,
                gif: null,
                expected_delivery: 5,
                description: "description",
                price: "40.00",
                images: [],
              },
            ],
          },
        ],
      },
      {
        name: "Thanda-Thanda",
        subcategories: [
          {
            name: "Chai",
            menus: [
              {
                id: 43,
                name: "Lemon Iced Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "50.00",
                images: [],
              },
              {
                id: 44,
                name: "Peach Iced Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 45,
                name: "Green Apple Iced Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 46,
                name: "Cranberry Iced Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 47,
                name: "Passion Fruit Iced Chai",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
            ],
          },
          {
            name: "Coffee",
            menus: [
              {
                id: 50,
                name: "Cold Coffe",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 51,
                name: "Thick Cold Coffee",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "90.00",
                images: [],
              },
            ],
          },
          {
            name: "Other",
            menus: [
              {
                id: 48,
                name: "Cold Bournvita",
                icon: null,
                gif: null,
                expected_delivery: 5,
                description: "description",
                price: "60.00",
                images: [],
              },
              {
                id: 49,
                name: "Nimbu Pani",
                icon: null,
                gif: null,
                expected_delivery: 5,
                description: "description",
                price: "35.00",
                images: [],
              },
            ],
          },
          {
            name: "Milk Coolers",
            menus: [
              {
                id: 54,
                name: "Black Current",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
              {
                id: 55,
                name: "Vanilla",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
              {
                id: 56,
                name: "Rose",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
              {
                id: 57,
                name: "Strawberry",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
              {
                id: 58,
                name: "Butter Scotch",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
              {
                id: 59,
                name: "Mango",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "80.00",
                images: [],
              },
            ],
          },
          {
            name: "Shakes",
            menus: [
              {
                id: 60,
                name: "Chocolate Shake",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "90.00",
                images: [],
              },
              {
                id: 61,
                name: "Oreo Shake",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "90.00",
                images: [],
              },
              {
                id: 62,
                name: "Kitkat Shake",
                icon: null,
                gif: null,
                expected_delivery: 10,
                description: "description",
                price: "90.00",
                images: [],
              },
            ],
          },
        ],
      },
      {
        name: "Other",
        subcategories: [
          {
            name: "Other",
            menus: [
              {
                id: 63,
                name: "Mineral Water 500 ml",
                icon: null,
                gif: null,
                expected_delivery: 1,
                description: "description",
                price: "10.00",
                images: [],
              },
              {
                id: 64,
                name: "Mineral Water 1 l",
                icon: null,
                gif: null,
                expected_delivery: 1,
                description: "description",
                price: "20.00",
                images: [],
              },
              {
                id: 65,
                name: "Extra Toppings",
                icon: null,
                gif: null,
                expected_delivery: 1,
                description: "description",
                price: "20.00",
                images: [],
              },
            ],
          },
        ],
      },
    ],
    outlet: {
      id: 1,
      name: "ChaiTapri College Road",
      address: "College Road, Nashik",
      phone_number: "7878787878",
      slug: "chai-tapri-college-road",
      outlet_license:
        "/media/outlet_license/72da8e918336efe1313e62f05f090e08.jpg",
      photo: "/media/outlet_photo/72da8e918336efe1313e62f05f090e08.jpg",
      code: "422009",
      no_of_employees: 10,
      franchise: 1,
      manager: 2,
    },
    name: "ChaiTapri",
    description: "Chai se Shurvat",
    location: "Nashik",
    opening_hours: "8:30am – 10pm",
    is_vegetarian: true,
    slug: "chai-tapri",
    owner: 2,
  };

  const url =
    "https://techrest.pythonanywhere.com/tables-view/chai-tapri/chai-tapri-college-road/";

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true); // State for loading spinner

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or error
      }
    }
    fetchData();
  }, []);
  console.log("Asa");
  return (
    <div>
      {console.log("as")}
      {data3.categories.map((category) => (
        <div key={category.name}>
          <h1
            className="text-xl"
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </h1>
          {activeCategory === category.name && (
            <div>
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                  <h3>{subcategory.name}</h3>
                  <ul>
                    {subcategory.menus.map((menu) => (
                      <li key={menu.id}>
                        {menu.name} - Price: {menu.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
