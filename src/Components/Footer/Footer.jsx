import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <img src="./images/footerLogo.svg" alt="logo" />
      <div className="icons">
        <a href="">
          <p>Linkedin</p>
        </a>
        <a href="">
          {" "}
          <p>Instagram</p>
        </a>
        <a href="">
          <p>Facebook</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
