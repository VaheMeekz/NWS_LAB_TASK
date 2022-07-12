import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./components/categories/Categories";
import Cats from "./components/cats/Cats";
import { getCatsAC } from "./store/actions/catsAction";
function App() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(9);
  const cats = useSelector((state) => state?.cats.cats);

  const handlerChangeCount = useCallback(() => {
    setLimit(limit * 2);
  }, []);

  useEffect(() => {
    dispatch(getCatsAC(limit, 1));
  }, [limit]);

  return (
    <div>
      <Categories limit={limit} />
      <Cats setLimit={setLimit} limit={limit} cats={cats} />
      <div className="btnContainer">
        <button className="loadMoreBtn" onClick={handlerChangeCount}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
