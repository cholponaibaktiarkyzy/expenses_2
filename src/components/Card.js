import "./Card.css";

const Card = (props) => {
  const classes = "card" + " " + props.className; //card Card-filter

  return <div className={classes}>{props.children}</div>;
};

export default Card;
