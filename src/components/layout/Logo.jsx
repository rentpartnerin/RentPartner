import {Link} from "react-router-dom";
import LogoImage from "../../assert/Logo.jpg";
export default function Logo() {
  return <Link className="logo" to="/"><span className="logo-mark"><img src={LogoImage} alt="Logo" width={"20px"} height={"20px"}/></span><span>Rent<span>Partner</span></span></Link>;
}
