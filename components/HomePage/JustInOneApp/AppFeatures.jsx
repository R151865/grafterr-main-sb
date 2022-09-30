import React from "react";
import { useState } from "react";
import Image from "next/image";

/* Import Images */
import plus from "../../../public/grafterrImage/justOneApp/plus.svg";
import minus from "../../../public/grafterrImage/justOneApp/minus.svg";

/* data import */
import { data } from "./FeaturesData";

const AppFeatures = (props) => {
  const [selected, setSelected] = useState();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    props.setValue(i + 1);
  };

  return (
    <div className="accordianWrapper">
      <div className="accordionCard">
        {data.map((element, i) => (
          <div
            key={i}
            className={selected === i ? "item itemSelected" : "item"}
          >
            <div
              className="title"
              onClick={() => {
                toggle(i);
              }}
            >
              <h5>{element.question}</h5>
              <Image src={selected === i ? minus : plus} alt="plus/minus" />
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{element.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppFeatures;
