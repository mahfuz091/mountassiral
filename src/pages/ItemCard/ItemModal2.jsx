import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../axios/axios-instance";

import CardOption from "./CardOption";

const ItemModal2 = ({
  singleData,
  setShowModal,
  value,
  setControl,
  control,
}) => {
  // console.log(singleData.id);
  const { name, image, price, qty } = singleData;
  const [item, setItem] = useState([]);
  const [option, setOption] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [bg, setBg] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };
  // console.log(option);
  useEffect(() => {
    if (option.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [option]);

  useEffect(() => {
    option.map((o) => console.log(o.categoryID));
  }, [option]);

  const addToItem = (data) => {
    let newItem = [];
    const comment = inputValue;
    // console.log(inputValue);
    data.comment = comment;
    const item = { data };
    const selectedqty = value;
    // console.log(selectedqty);
    singleData.qty = selectedqty;

    const previousItem = JSON.parse(localStorage.getItem("item"));
    if (previousItem) {
      const newItem = [...previousItem, item];
      const isThisItem = previousItem.find((it) => it.id === singleData.id);

      localStorage.setItem("item", JSON.stringify(newItem));
      setItem(newItem);
      setDisabled(false);
      // setControl(!control);
      // setBg(true);
    } else {
      newItem.push(item);
      localStorage.setItem("item", JSON.stringify(newItem));
      setItem(newItem);
      // setControl(!control);
      setDisabled(false);
      // setBg(true);
    }
  };
  // console.log(addItem);

  const handleOK = (data) => {
    Swal.fire({
      title: "Produit bien ajouté",
      icon: "success",
      text: "vous serez redirigé dans quelques instants...",
      showConfirmButton: false,
      timer: 2000,
    });
    setShowModal(false);
    if (data) {
      let newItem = [];
      const comment = inputValue;
      // console.log(inputValue);
      data.comment = comment;
      const runningItem = { data };
      const selectedqty = value;
      // console.log(selectedqty);
      singleData.qty = selectedqty;
      const previousItem = JSON.parse(localStorage.getItem("item"));
      if (previousItem) {
        const newItem = [...previousItem, runningItem];
        // const isThisItem = previousItem.find((it) => it.id === singleData.id);

        localStorage.setItem("item", JSON.stringify(newItem));
        setItem(newItem);
        setControl(!control);
        // setBg(true);
      }
      // if (previousItem) {
      //   setControl(!control);
      else {
        newItem.push(runningItem);
        localStorage.setItem("item", JSON.stringify(newItem));
        setItem(newItem);
        setControl(!control);
        // setBg(true);
      }
    } else {
      setControl(!control);
    }
  };

  useEffect(() => {
    async function getOption() {
      try {
        const response = await axiosInstance.get(
          `/prods/options/${singleData.id}`
        );
        // console.log(response.data.length);
        setOption(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getOption();
  }, [singleData]);
  const backgroundColor = bg ? "lightblue" : "white";
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
              {option.length > 0 ? (
                <>
                  <h3 className='comment-title'>
                    Choisir {singleData.categoryID}
                  </h3>
                </>
              ) : (
                ""
              )}

              {option.length > 0 ? (
                <>
                  {option?.map((singleOption, index) => (
                    <CardOption
                      selectedItem={selectedItem}
                      handleItemClick={handleItemClick}
                      handleOK={handleOK}
                      setAddItem={setAddItem}
                      addToItem={addToItem}
                      singleOption={singleOption}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <>
                  <div className='mt-[50px]'></div>
                </>
              )}

              <input
                type='text'
                name=''
                id=''
                className='modal-input'
                placeholder='Write something...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <button
                disabled={disabled}
                className={disabled ? "ok-btn-diasabled" : "ok-btn"}
                // className='ok-btn'
                onClick={
                  option.length > 0
                    ? () => handleOK()
                    : () => handleOK(singleData)
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
