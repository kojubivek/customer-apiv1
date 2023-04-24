import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1";
const productApi = rootUrl + "/product";
const categoryApi = rootUrl + "/category";

const fetchProcessor = async ({ method, url, data }) => {
  try {
    const res = await axios({
      method,
      url,
      data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error,
    };
  }
};

export const fetchCategory = async () => {
  const url = categoryApi;
  const obj = {
    method: "get",
    url,
  };

  return fetchProcessor(obj);
};

export const fetchproduct = async () => {
  const url = productApi;
  const obj = {
    method: "get",
    url,
  };
  return fetchProcessor(obj);
};
