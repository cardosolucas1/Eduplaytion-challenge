import axios from "axios";

export const login = async (auth: any): Promise<any> => {
  return await axios({
    data: auth,
    method: "POST",
    url: "/login",
    baseURL: "https://staging-api.numetry.com",
  })
    .then((response) => response)
    .catch((error) => {
      throw "Email or password is wrong.";
    });
};
