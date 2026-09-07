import SectionHead from "../../components/common/SectionHead";
import Notice from "../../components/common/Notice";
import ServiceCard from "../../components/services/ServiceCard";
import {services} from "../../data/services";
import Page from "../../components/common/Page";
export default function Services(){return <Page><SectionHead kicker="Our services" title="Practical services. Clear expectations." text="Choose the experience that matches your needs. Each service has its own scope, rules and availability."/><div className="cards five">{services.map(s=><ServiceCard key={s.id} service={s}/>)}</div><Notice><b>Important:</b> RentPartner services are subject to availability and applicable local laws. Booking requests are reviewed before confirmation.</Notice></Page>}
