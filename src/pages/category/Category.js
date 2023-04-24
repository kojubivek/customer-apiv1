import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Layout } from "../layout/Layout";
import { fetchCategory } from "../../helper/axiosHelper";
import { getCategoryAction } from "../category/CategoryAction";
import CustomCard from "../../components/custom-card/CustomCard";
export const Category = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState({});

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);
  const { category } = useSelector((state) => state.category);
  console.log(category);
  const activeCat = category.filter((cat, i) => cat.status === "active");
  return (
    <div>
      <Layout>
        {activeCat.map((cat, i) => (
          <>
            {" "}
            <h1>{cat.name}</h1>{" "}
            <CustomCard
              name={cat.name}
              imageUrl={"https://picsum.photos/id/1018/200/300"}
              price={3}
            ></CustomCard>
          </>
        ))}
      </Layout>
    </div>
  );
};
