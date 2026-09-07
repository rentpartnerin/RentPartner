import {Link} from "react-router-dom";
import Icon from "../components/common/Icon";
import SectionHead from "../components/common/SectionHead";
import ServiceCard from "../components/services/ServiceCard";
import {services} from "../data/services";

function QuickBook(){return <div className="quick card"><div className="quick-top"><div><small>Quick booking</small><h3>Tell us what you need.</h3></div><Icon name="Sparkles"/></div><label>Service<select><option>Choose a service</option>{services.map(s=><option key={s.id}>{s.name}</option>)}</select></label><div className="two"><label>City<input placeholder="e.g. Jaipur"/></label><label>Date<input type="date"/></label></div><Link className="btn full" to="/book">Search Partners <Icon name="Search"/></Link><small className="muted">Availability is checked after you submit your request.</small></div>}

export default function Home(){return <>
<section className="hero"><div className="container hero-grid"><div><div className="eyebrow"><span className="pulse"/> Trusted lifestyle services in India</div><h1>Find the Right <em>Partner</em> for Your Time.</h1><p className="lead">Book trusted partners for travel, companionship, pet walking, house care and everyday lifestyle services.</p><div className="actions"><Link className="btn" to="/book">Book a Partner <Icon name="ArrowRight"/></Link>
{/*<Link className="btn btn-ghost" to="/become-a-partner">Become a Partner</Link>*/}
</div><div className="trust-row"><span><Icon name="ShieldCheck"/> Verification-focused</span><span><Icon name="LockKeyhole"/> Privacy-conscious</span><span><Icon name="Headphones"/> Human support</span></div></div>
{/*<QuickBook/>*/} 
</div></section>
<section className="section"><div className="container"><SectionHead kicker="Explore services" title="Services built around real life" text="Choose a service, share your requirements and let our team check availability."/><div className="cards five">{services.map(s=><ServiceCard key={s.id} service={s}/>)}</div></div></section>
<section className="section soft"><div className="container"><SectionHead kicker="Simple process" title="Book with confidence"/><div className="steps">{[["1","Choose","Select a service and tell us when and where."],["2","Request","Send your booking request through WhatsApp or Telegram."],["3","Check","Our team checks partner availability and fit."],["4","Confirm","You receive confirmation before the service starts."]].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
<section className="cta"><div className="container cta-inner"><div><div className="eyebrow">Ready when you are</div><h2>Need a partner for your next plan?</h2><p>Start with a booking request. No automatic confirmation.</p></div><Link className="btn light" to="/book">Start Booking <Icon name="ArrowRight"/></Link></div></section>
</>}
