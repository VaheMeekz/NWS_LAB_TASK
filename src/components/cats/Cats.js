import React from "react";
const Cats = ({ cats }) => {
  return (
    <div className="catsContainer">
      {cats?.map(({ id, url }) => {
        return (
          <div key={id} className="catItem">
            <img src={url} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Cats;
