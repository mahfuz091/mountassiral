import React from "react";

const CardOption = ({
  singleOption,
  handleOK,
  setAddItem,
  addToItem,
  selectedItem,
  handleItemClick,
}) => {
  return (
    <div
      onClick={() => {
        addToItem(singleOption);
        handleItemClick(singleOption.id);
      }}
      className={
        selectedItem === singleOption.id
          ? "modal-card bg-slate-100 px-[20px] flex items-center gap-[15px] mb-[20px]"
          : "modal-card  px-[20px] flex items-center gap-[15px] mb-[20px]"
      }
    >
      <img src={singleOption.image} alt='' />
      <div>
        <h4>{singleOption.name}</h4>
        <p>{singleOption.price} Dhs</p>
      </div>
    </div>
  );
};

export default CardOption;
