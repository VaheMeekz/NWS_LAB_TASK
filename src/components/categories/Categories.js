import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAC } from "../../store/actions/categoryAction";
import { getCatsAC } from "../../store/actions/catsAction";

const Categories = ({ limit }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.category.categories);
  const handlerChangeCategory = useCallback((id) => {
    dispatch(getCatsAC(limit, id));
  }, []);

  useEffect(() => {
    dispatch(getCategoryAC());
  }, []);

  return (
    <div className="categoriesBox">
      {categories?.map(({ id, name }) => {
        return (
          <div key={id} onClick={() => handlerChangeCategory(id)}>
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
