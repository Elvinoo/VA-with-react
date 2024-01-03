const ButtonsAfterHover = ({ handleHoverOut }) => {
  return (
    <div className="buttons-after-hover">
      <button className="home-button">Home</button>

      <ul class="menu-hover" onMouseLeave={handleHoverOut}>
        <li>
          <a href="/azerbaijan">About Azerbaijan</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/tours">Tours</a>
        </li>
        <li>
          <a href="/evisa">E-visa</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/contactus">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default ButtonsAfterHover;
