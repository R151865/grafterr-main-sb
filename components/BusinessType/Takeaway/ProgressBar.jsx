import React, { useState } from "react";
import Styles from "../../../styles/pages/BusinessType/Takeaways/progressbar.module.css";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <div className={`${Styles.progress}`}>
      <div className={`${Styles.progressDone}`} style={style}></div>
    </div>
  );
};

export default ProgressBar;
