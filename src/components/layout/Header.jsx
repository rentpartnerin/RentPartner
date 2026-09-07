import {Link} from "react-router-dom";
import {useState} from "react";
import Icon from "../common/Icon";
import Logo from "./Logo";

export default function Header() {
  const [open,setOpen] = useState(false);
    {/* additionally add partners
     ["Partners","/partners"],*/}
  const nav=[["Book a Partner","/book"],["Services","/services"],["Safety","/safety"],["About","/about"]];
  return <header><div className="nav-wrap container"><Logo/>
    <nav className={open ? "open" : ""}>{nav.map(([label,path])=>
      <Link key={path} onClick={()=>setOpen(false)} to={path}>{label}</Link>)}
      {/*<Link onClick={()=>setOpen(false)} to="/become-a-partner">Become a Partner</Link>
      <Link onClick={()=>setOpen(false)} to="/login">Login</Link>*/}
      </nav>
    <Link className="btn btn-small" to="/book">Book Now</Link>
    <button className="icon-btn menu" onClick={()=>setOpen(!open)} aria-label="Open menu"><Icon name={open?"X":"Menu"}/></button>
  </div></header>;
}
