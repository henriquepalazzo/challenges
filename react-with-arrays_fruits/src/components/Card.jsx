import "./Card.css";

export default function Card({ fruit: { name, color } }) {
  return <p className={`card card--${color}`}>{name}</p>;
}
