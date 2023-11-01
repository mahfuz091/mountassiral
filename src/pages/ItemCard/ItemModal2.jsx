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

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedOption, setSelectedOption] = useState([])
  const handleItemClick = (itemId) => {
    let newSelectItem = [];
    // console.log(itemId);

    // console.log(typeof newSelectItem);

    if (selectedItem) {

      const newSelectItem = [...selectedItem, itemId];

      setSelectedItem(newSelectItem)
    }
    else {
      newSelectItem.push(itemId)
      setSelectedItem(newSelectItem);
    }

    // newSelectItem.push(data);





  };
  // console.log(selectedItem);
  useEffect(() => {
    if (option.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [option]);

  const handleItemAdd = (data) => {
    let newSelectItem = [];

    const item = { data }
    if (selectedOption) {

      const newSelectItem = [...selectedOption, item];

      setSelectedOption(newSelectItem);
      setDisabled(false);
    }
    else {
      newSelectItem.push(item)
      setSelectedOption(newSelectItem);
      setDisabled(false);
    }
  }
  console.log(selectedOption);

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
      const isThisItem = previousItem.find((it) => it.data.id == data.id);
      // console.log(isThisItem);
      if (isThisItem) {
        Swal.fire({
          title: "Produit déjà ajouté",
          icon: "error",
          text: "vous serez redirigé dans quelques instants...",
          showConfirmButton: false,
          timer: 2000,
        })
      }
      else {
        localStorage.setItem("item", JSON.stringify(newItem));
        setItem(newItem);
        setDisabled(false);
      }


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
      console.log(previousItem);
      if (previousItem) {
        const newItem = [...previousItem, runningItem];
        const isThisItem = previousItem.find((it) => it.data.id === data.id);
        // console.log(isThisItem);
        if (isThisItem) {
          Swal.fire({
            title: "Produit déjà ajouté",
            icon: "error",
            text: "vous serez redirigé dans quelques instants...",
            showConfirmButton: false,
            timer: 2000,
          })
        }
        else {
          localStorage.setItem("item", JSON.stringify(newItem));
          setItem(newItem);
          setControl(!control);
        }

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
                      handleItemAdd={handleItemAdd}
                      selectedOption={selectedOption}
                      setInputValue={setInputValue}
                      inputValue={inputValue}
                    />
                  ))}
                </>
              ) : (
                <>
                  <div className='mt-[50px]'></div>
                </>
              )}

              {
                option.length > 0 ? <></> : <> <input
                  type='text'
                  name=''
                  id=''
                  className='modal-input ml-[20px]'
                  placeholder='Write something...'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                /></>
              }

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
