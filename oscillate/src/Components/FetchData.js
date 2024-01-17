import React, { useEffect, useState } from "react";
import Select from "react-select";

const FetchData = () => {
  const [dataReceived, setDataReceived] = useState([]);
  const [value,setValue]=useState(null)
  const API_DATA = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_DATA);
        const data = await response.json();
        setDataReceived(
          data.map((user) => ({ value: user.id, label: user.name }))
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(dataReceived);

  return (
    <div style={{margin:"10%"}} >
      {dataReceived && (
        <Select
          options={dataReceived}
          defaultValue={value}
          placeholder="Selected Items"
          onChange={setValue}
          isMulti
          isSearchable
          noOptionsMessage={()=>"No Users Found"}
        />
      )}
    </div>
  );
};

export default FetchData;
