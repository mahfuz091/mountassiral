import React from "react";

const optionCard = ({ singleOption }) => {
  console.log(singleOption);
  return (
    <div className='modal-card px-[20px] flex items-center gap-[15px] mb-[20px]'>
      <img src={singleOption.image} alt='' />
      <div>
        <h4>{singleOption.name}</h4>
        <p>{singleOption.price} Dhs</p>
      </div>
    </div>
  );
};

export default optionCard;
