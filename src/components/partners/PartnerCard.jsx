import {Link} from "react-router-dom";
import Icon from "../common/Icon";
export default function PartnerCard({partner:p}) {
 return <div className="partner-card card"><div className="avatar">{p.name[0]}</div><div className="partner-top"><div><h3>{p.name} <span className="verified"><Icon name="BadgeCheck"/></span></h3><small><Icon name="MapPin"/> {p.city}</small></div><strong>★ {p.rating}</strong></div><p>{p.intro}</p><div className="tag-row">{p.services.map(s=><span key={s}>{s}</span>)}</div><div className="partner-bottom"><b>{p.price}</b><Link to={`/partners/${p.id}`}>View profile <Icon name="ArrowRight"/></Link></div></div>;
}
