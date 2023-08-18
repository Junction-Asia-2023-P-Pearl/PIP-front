import { useQuery } from "react-query";
import { ajax } from "./api";

const getMedicines = () => {
  const options = {
    method: "GET",
    url: "/medicine",
  };
  return useQuery("medicines", () => ajax(options));
};

const getMedicine = ({ id }) => {
  const options = {
    method: "GET",
    url: `/medicine/${id}`,
  };
  return useQuery(["medicine", id], () => ajax(options));
};

const medicineAPI = {
  getMedicines,
  getMedicine,
};

export default medicineAPI;
