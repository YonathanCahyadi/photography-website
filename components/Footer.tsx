import ConctactIcon from "./ContactIcon";
import GoogleMap from "./GoogleMap";

function Footer() {
  return (
    <footer>
      <div className="contacts-footer-container">
        <ConctactIcon imgLocation="email.png" name="test@gmail.com" imgAlt="email.png" />
        <ConctactIcon imgLocation="telephone.png" name="+61 023 2342" imgAlt="telephone.png" />
        <ConctactIcon imgLocation="location.png" name="Test Road, QLD, 5005" imgAlt="location.png" />
        <ConctactIcon imgLocation="facebook.png" name="PhotoGraphy" imgAlt="facebook.png" />
        <ConctactIcon imgLocation="twitter.png" name="@PhotoGraphy" imgAlt="twitter.png" />
        <ConctactIcon imgLocation="instagram.png" name="PhotoGraphy" imgAlt="instagram.png" />
      </div>

      <div className="vertical-divider"></div>

      <div className="map-container">
        <GoogleMap location="Australia" />
      </div>
    </footer>
  );
}

export default Footer;
