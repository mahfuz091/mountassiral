import React, { useState } from "react";

const ItemCard = ({ singleData }) => {
  const { name, image, price, qty } = singleData;
  console.log(singleData);
  const [value, setValue] = useState(qty)
  const setIncrease = () => {
    setValue(parseInt(value) + 1)
  }
  const setDecrease = () => {
    setValue(parseInt(value) - 1)
  }
  return (
    <div className='card relative'>
      <img src={image} alt='' />
      <h2>{name}</h2>
      <button className='add-btn'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M10 5V15M15 10H5'
            stroke='white'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
      <div className='flex gap-[10px] items-center ml-[10px]'>
        <p className='price'>{price} Dhs</p>
        <div className='input-group'>
          <button onClick={() => setDecrease()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='1'
              viewBox='0 0 5 1'
              fill='none'
            >
              <path
                d='M0.21875 0.942242H4.25272V0H0.21875V0.942242Z'
                fill='#3F3F3F'
              />
            </svg>

          </button>
          <p>{value}</p>
          <button onClick={() => setIncrease()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='5'
              viewBox='0 0 5 5'
              fill='none'
            >
              <path
                d='M1.98263 0V2.03171H0V2.97395H1.98263V5.00566H3.02302V2.97395H5.00566V2.03171H3.02302V0H1.98263Z'
                fill='#F06D23'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
