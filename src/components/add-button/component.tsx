'use client';

import { useState } from 'react';
import Loader from '../loader/component';

const AddButton = ({ children, createNewOrder }) => {
  const [loader, setLoader] = useState(false);

  const handleButtonClick = () => {
    console.log('post');
    setLoader(true);
    createNewOrder()
      .then((resolve) => {
        console.log('then');
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
    <button
      onClick={() => {
        handleButtonClick();
      }}
    >
      {children}
    </button>
  );
};

export default AddButton;
