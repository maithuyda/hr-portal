import "./index.scss";

const FooterList = (props) => {
  const itemsList = props.items.map((item) => (
    <li key={item.path}>
      <a href={item.path}>{item.content}</a>
    </li>
  ));
  return (
    <div>
      <h3>{props.header}</h3>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default FooterList;
