import React from "react";
import MasonryImageList from "./MasonryImageList";

const OldMemories = ({ data }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MasonryImageList data={data}></MasonryImageList>
      </div>
    </div>
  );
};

export default OldMemories;
