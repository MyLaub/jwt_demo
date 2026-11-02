import { getData } from "../../apiFacade.js";
import { useState } from "react";

function ViewData() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const data = await getData();
    console.log("data", data);
    setData(data);
  };

  return (
    <div>
      <button onClick={handleClick}>View Data</button>
      {data && <div>{data.msg}</div>}
    </div>
  );
}

export default ViewData;
