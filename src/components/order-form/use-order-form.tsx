'use client';
import { useCallback } from 'react';
import { useReducer } from 'react';

interface OrderState {
  // id: string;
  // comments: [];
  // status: string;
  // number: number;
  // date: number;
  // client: string;
  driver: string;
  // code: number;
  // clientName: string;
}

const initialState: OrderState = {
  // id: '',
  // comments: [],
  // status: '',
  // number: 0,
  // date: 0,
  // client: '',
  driver: '',
  // code: 0,
  // clientName: '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    // case 'setComment':
    //   return {
    //     ...state,
    //     comment: payload,
    //   };
    // case 'setStatus':
    //   return {
    //     ...state,
    //     status: payload,
    //   };
    // case 'setId':
    //   return {
    //     ...state,
    //     id: payload,
    //   };
    // case 'setNumber':
    //   return {
    //     ...state,
    //     number: payload,
    //   };
    // case 'setDate':
    //   return {
    //     ...state,
    //     date: payload,
    //   };
    // case 'setPhone':
    //   return {
    //     ...state,
    //     client: payload,
    //   };
    case 'setDriver':
      return {
        ...state,
        driver: payload,
      };
    // case 'setCode':
    //   return {
    //     ...state,
    //     code: payload,
    //   };
    // case 'setClientName':
    //   return {
    //     ...state,
    //     clientName: payload,
    //   };

    default:
      return state;
  }
};

export const useReviewForm = (initialValue = initialState, orderId) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  // const setComment = useCallback((event) => {
  //   dispatch({ type: 'setComment', payload: event.target.value });
  // }, []);

  // const setStatus = useCallback(
  //   (event) => dispatch({ type: 'setStatus', payload: event.target.value }),
  //   []
  // );
  // const setId = useCallback(
  //   (event) => dispatch({ type: 'setId', payload: event.target.value }),
  //   []
  // );
  // const setNumber = useCallback(
  //   (event) => dispatch({ type: 'setNumber', payload: event.target.value }),
  //   []
  // );
  // const setDate = useCallback(
  //   (event) => dispatch({ type: 'setDate', payload: event.target.value }),
  //   []
  // );
  // const setPhone = useCallback(
  //   (event) => dispatch({ type: 'setPhone', payload: event.target.value }),
  //   []
  // );
  const setDriver = useCallback(
    (event) => dispatch({ type: 'setDriver', payload: event.target.value }),
    []
  );
  // const setCode = useCallback(
  //   (event) => dispatch({ type: 'setCode', payload: event.target.value }),
  //   []
  // );
  // const setClientName = useCallback(
  //   (event) => dispatch({ type: 'setClientName', payload: event.target.value }),
  //   []
  // );

  return {
    form,
    // setClientName,
    setDriver,
    // setCode,
    // setPhone,
    // setDate,
    // setNumber,
    // setId,
    // setStatus,
    // setComment,
  };
};
