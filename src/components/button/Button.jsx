import "./button.css";

export const Button = ({ title, color }) => {
  return (
    <button type="button" className={color}>
      {title}
    </button>
  );
};
