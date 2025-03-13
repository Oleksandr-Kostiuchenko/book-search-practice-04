import style from "./Loader.module.css";

import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <FallingLines
        color="white"
        width="150"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loader;
