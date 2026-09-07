import {Link} from "react-router-dom";
import Logo from "./Logo";
import {APP_CONFIG} from "../../config/app";

export default function Footer() {
 return <footer><div className="container footer-grid">
  <div><Logo/><p>Trusted lifestyle services and partner booking in India.</p></div>
  <div><b>Explore</b><Link to="/services">Services</Link>
  <Link to="/book">Book a Partner</Link>
  {/*<Link to="/partners">Partners</Link>
  <Link to="/become-a-partner">Become a Partner</Link>*/}
  </div>
  <div><b>Company</b><Link to="/about">About</Link><Link to="/safety">Safety</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
  <div><b>Support</b><span>{APP_CONFIG.supportEmail}</span><span>{APP_CONFIG.supportPhone}</span></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RentPartner. All rights reserved.</span><span>Requests are reviewed before confirmation.</span></div></footer>;
}
