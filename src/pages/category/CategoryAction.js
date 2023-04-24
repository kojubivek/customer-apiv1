import { fetchCategory } from "../../helper/axiosHelper";
import { setCategory } from "./CategorySlice";

export const getCategoryAction = () => async (dispatch) => {
  const { status, cat } = await fetchCategory();

  if (status === "success") {
    dispatch(setCategory(cat));
  } else {
    console.log("error");
  }
};
