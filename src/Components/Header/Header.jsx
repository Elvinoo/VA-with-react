import "./Header.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  return (
    <header className="header">
      <img src="./images/logo.svg" alt="logo" />
      <div className="navbar">
        <a
          target="_blank"
          title="Click to write on whatsapp"
          href="https://api.whatsapp.com/send?phone=994515855564"
        >
          <span className="whatsapp-icon">
            <WhatsAppIcon /> +994515855564
          </span>
        </a>
        <a href="mailto:incoming@vatravel.az">
          <span> incoming@vatravel.az</span>
        </a>
        <select className="language-select" name="" id="english">
          <option value="english">EN</option>
          <option value="french">FR</option>
          <option value="italian">IT</option>
          <option value="spanish">SP</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
