'use client';

import { useState } from 'react';
import Loader from '../loader/component';
import { useSelector } from 'react-redux';

const AddButton = ({ children, createNewOrder }) => {
  const [loader, setLoader] = useState(false);
  const admin = useSelector((state) => state.admin.admin);

  const handleButtonClick = () => {
    setLoader(true);
    createNewOrder()
      .then((resolve) => {
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  return loader ? (
    <Loader />
  ) : (
    admin && (
      <button
        onClick={() => {
          handleButtonClick();
        }}
      >
        {children}
      </button>
    )
  );
};

export default AddButton;
