import React, { useState } from "react";
import Swal from "sweetalert2";

const ItemModal2 = ({
  singleData,
  setShowModal,
  value,
  setControl,
  control,
}) => {
  console.log(value);
  const { name, image, price, qty } = singleData;
  const [item, setItem] = useState([]);
  const handleOK = (singledata) => {
    Swal.fire({
      title: "Produit bien ajouté",
      icon: "success",
      text: "vous serez redirigé dans quelques instants...",
      showConfirmButton: false,
      timer: 2000,
    });
    setShowModal(false);

    let newItem = [];
    const item = { singleData };
    const selectedqty = value;
    console.log(selectedqty);
    singleData.qty = selectedqty;
    const previousItem = JSON.parse(localStorage.getItem("item"));
    if (previousItem) {
      const newItem = [...previousItem, item];
      const isThisItem = previousItem.find((it) => it.id === singleData.id);

      localStorage.setItem("item", JSON.stringify(newItem));
      setItem(newItem);
      setControl(!control);
    } else {
      newItem.push(item);
      localStorage.setItem("item", JSON.stringify(newItem));
      setItem(newItem);
      setControl(!control);
    }

    // console.log(newItem);
  };
  return (
    <>
      <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
        <div className='relative  my-6 mx-auto w-[360px] h-1/2'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='modal-box'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className='close-btn absolute right-[10px] top-[10px]'
                >
                  ✕
                </button>
              </form>
              <h3 className='comment-title'>Choisir Boisson</h3>
              <div className='modal-card px-[20px] flex items-center gap-[15px] mb-[20px]'>
                <img src={image} alt='' />
                <div>
                  <h4>{name}</h4>
                  <p>{price} Dhs</p>
                </div>
              </div>
              <div className='modal-card px-[20px] flex items-center gap-[15px] mb-[20px]'>
                <img src={image} alt='' />
                <div>
                  <h4>Cafe Noir</h4>
                  <p>18 Dhs</p>
                </div>
              </div>
              <div className='modal-card px-[20px] flex items-center gap-[15px] mb-[20px]'>
                <img src={image} alt='' />
                <div>
                  <h4>Cafe Noir</h4>
                  <p>18 Dhs</p>
                </div>
              </div>
              <input
                type='text'
                name=''
                id=''
                className='modal-input'
                placeholder='Write something...'
              />

              <button
                className='ok-btn'
                onClick={() =>
                  // Swal.fire({
                  //   title: "Produit bien ajouté",

                  //   icon: "success",
                  //   text: "vous serez redirigé dans quelques instants...",

                  //   showConfirmButton: false,
                  //   timer: 2000,
                  // })
                  handleOK(singleData)
                }
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemModal2;
