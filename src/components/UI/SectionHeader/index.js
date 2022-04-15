import { Fragment } from "react";
import SwitchButton from "../SwitchButton";

import "./index.scss";

const SectionHeader = (props) => {
  return (
    <Fragment>
      <div className="section-header_wrapper">
        <div className="section-header">
          <h2>{props.title}</h2>
        </div>
        <SwitchButton />
      </div>
    </Fragment>
  );
};

export default SectionHeader;
