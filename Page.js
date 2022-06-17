import React, { useState } from "react";
import SelectBox from "./SelectBox";

function Page() {
  const [selectItem, setSelectItem] = useState("카테고리 선택");
  return (
    <div>
      <SelectBox
        setValue={setSelectItem}
        value={selectItem}
      />
    </div>
  );
}

export default Page;
