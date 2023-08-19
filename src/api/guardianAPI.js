import { useQuery } from "react-query";
import { ajax } from "./API";

const getGuardianMe = ({ accessToken }) => {
  const options = {
    method: "GET",
    url: "/guardian/me",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery("guardianMe", () => ajax(options));
};

const updateGuardianMe = ({ accessToken }) => {
  return useMutation((name, phoneNumber) =>
    ajax({
      method: "PUT",
      url: "/guardian/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name,
        phoneNumber,
      },
    })
  );
};

const guardianAPI = {
  getGuardianMe,
  updateGuardianMe,
};

export default guardianAPI;
