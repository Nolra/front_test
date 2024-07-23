import rocket from "../images/rocket.webp"

const Footer = () => (
  <footer className="footer">
      <img className="footer__img" src={rocket} alt="Rocket" width="93" height="81" />
      <div className="footer__text">Exciting space adventure!</div>
  </footer>
);

export default Footer;
