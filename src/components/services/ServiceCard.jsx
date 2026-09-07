import {Link} from "react-router-dom";
import Icon from "../common/Icon";
export default function ServiceCard({service:s}) {
 return <Link className="service-card card" to={`/services/${s.id}`}><div className="service-icon"><Icon name={s.icon}/></div><h3>{s.name}</h3><p>{s.short}</p><span>Explore <Icon name="ArrowUpRight"/></span></Link>;
}
