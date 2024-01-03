import { useNavigate } from "react-router-dom";
const ButtonsBeforeHover = ({ handleHover }) => {
  let navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="buttons-before-hover">
      <button className="home-button" onClick={goToHome}>
        Home
      </button>

      <button className="menu-button" onMouseEnter={handleHover}>
        Menu
      </button>
    </div>
  );
};

export default ButtonsBeforeHover;
