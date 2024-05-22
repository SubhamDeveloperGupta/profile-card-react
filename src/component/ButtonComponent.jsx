/* eslint-disable react/prop-types */
import "./ButtonComponent.css";

export default function ButtonComponent({ emoji, textEle, color }) {
  return (
    <button 
    className="btn" 
    style={{ background: color }}>
      {`${textEle} ${emoji}`}
    </button>
  );
}
