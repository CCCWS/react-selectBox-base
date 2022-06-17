import React, { useEffect, useRef, useState } from "react";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";

import "./SelectBox.css";

function SelectBox({ data, value, setValue }) {
  const selectRef1 = useRef();
  const selectRef2 = useRef();

  const [click, setClick] = useState(false);

  const open = () => {
    setClick(!click);
  };

  const select = (e) => {
    setValue(e.target.innerText);
    setClick(!click);
  };

  const clickOutside = ({ target }) => {
    if (
      click &&
      !selectRef1.current.contains(target) &&
      !selectRef2.current.contains(target)
    )
      setClick(false);
  };

  useEffect(() => {
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [click]);

  return (
    <div className="SelectBox" onClick={open} ref={selectRef1}>
      {value}
      <div className="caret-filled">
        {click ? <CaretUpFilled /> : <CaretDownFilled />}
      </div>
      <ul
        className={[
          `select-value ${click ? "select-value-open" : "select-value-close"}`,
        ].join(" ")}
        onChange={select}
        ref={selectRef2}
      >
        <li onClick={select} className="select-value-list" id="category">
          value 1
        </li>
        <li onClick={select} className="select-value-list" id="category">
          value 2
        </li>
        <li onClick={select} className="select-value-list" id="category">
          value 3
        </li>
        <li onClick={select} className="select-value-list" id="category">
          value 4
        </li>
        <li onClick={select} className="select-value-list" id="category">
          value 5
        </li>
      </ul>
    </div>
  );
}

export default React.memo(SelectBox);
