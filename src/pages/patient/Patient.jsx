import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/API";
import { useSelector } from "react-redux";

const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}-${month}-${day}`;
};

function Patient() {
  const { accessToken } = useSelector((state) => state.userAuth);
  const { patientId } = useParams();

  const { data: patientInfo } = API.getPatient({ id: patientId, accessToken });
  return (
    <div className="bg-extrabright rounded-2xl p-7 h-full w-11/12 mb-3 flex flex-col justify-between items-center border-0 shadow-normal">
      <div className="h-1/2 w-11/12 flex flex-col items-start">
        <div className="flex w-full text-2xl font-light">
          <p className="text-dark mr-2">Name</p>
          <p>: {patientInfo?.data?.name}</p>
        </div>
        <div className="flex w-full my-5 text-lg font-light">
          <p className="text-dark mr-2">Birth</p>
          <p>
            :{" "}
            {patientInfo?.data?.birthDate &&
              formatDate(patientInfo.data.birthDate)}
          </p>
        </div>
        <div className="flex w-full text-lg font-light">
          <p className="text-dark mr-2">Weight</p>
          <p>: {patientInfo?.data?.weight}kg</p>
        </div>
        <div className="flex w-full text-lg font-light">
          <p className="text-dark mr-2">Height</p>
          <p>: {patientInfo?.data?.height}cm</p>
        </div>
        <div className="flex border-t-2 border-bright flex-col w-full mt-5 pt-5 text-lg font-light">
          <p className="text-red-400 text-xl">Caution</p>
          <p className="whitespace-pre-line">{patientInfo?.data?.caution}</p>
        </div>
      </div>
    </div>
  );
}

export default Patient;
