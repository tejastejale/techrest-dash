import React, { useEffect } from "react";

function Await() {
  const url =
    "https://techrest.pythonanywhere.com/menu/chai-tapri/chai-tapri-college-road/";
  const [data3, setData] = useState([]);
  async function fetchdata() {
    const response = await fetch(url);
    const res = await response.json();
    setData(res);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return <div>Await</div>;
}

export default Await;
