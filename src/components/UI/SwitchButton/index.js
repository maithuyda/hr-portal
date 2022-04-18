import "./index.scss";

const SwitchButton = (props) => {
  return (
    <div className="switch-button">
      <input
        id="toggle-on"
        className="toggle toggle-left"
        name="toggle"
        value="false"
        type="radio"
        checked
      />
      <label for="toggle-on" className="btn">
        Yes
      </label>
      <input
        id="toggle-off"
        className="toggle toggle-right"
        name="toggle"
        value="true"
        type="radio"
      />
      <label for="toggle-off" className="btn">
        No
      </label>
    </div>
  );
};

export default SwitchButton;
