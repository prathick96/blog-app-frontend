import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "./spinner.css";

const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner">
        <Loader type="TailSpin" color="#8F8F8F" height="100" width="100" />
      </div>
    )
  );
};

export default Spinner;
