import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { ToggleContext } from "../../context/ToggleProvider";

const SearchItems = ({ filteredData }) => {
  const { control, setControl } = useContext(ToggleContext);
  return (
    <div className=''>
      {filteredData?.map((item, i) => (
        <ItemCard
          setControl={setControl}
          control={control}
          key={i}
          singleData={item}
        />
      ))}
    </div>
  );
};

export default SearchItems;
