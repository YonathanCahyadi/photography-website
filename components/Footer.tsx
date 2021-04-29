import ConctactIcon from "./ContactIcon";
import GoogleMap from "./GoogleMap";

function Footer() {
  return (
    <footer>
      <div className="contacts-footer-container">
        <ConctactIcon imgLocation="email.png" name="test@gmail.com" />
        <ConctactIcon imgLocation="telephone.png" name="+61 023 2342" />
        <ConctactIcon imgLocation="location.png" name="Test Road, QLD, 5005" />
        <ConctactIcon imgLocation="facebook.png" name="PhotoGraphy" />
        <ConctactIcon imgLocation="twitter.png" name="@PhotoGraphy" />
        <ConctactIcon imgLocation="instagram.png" name="PhotoGraphy" />
      </div>
      <div className="vertical-divider"></div>
      <div className="map-container">
        <GoogleMap location="Australia" />
      </div>
    </footer>
  );
}

export default Footer;
