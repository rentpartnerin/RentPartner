import {useState} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import {services} from "../../data/services";
import Field from "../common/Field";
import Icon from "../common/Icon";
import {buildBookingMessage} from "../../utils/booking";

export default function BookingForm(){
 const navigate=useNavigate(); const qs=new URLSearchParams(useLocation().search);
 const [form,setForm]=useState({service:qs.get("service")||"",name:"",mobile:"",whatsapp:"",email:"",city:"",pin:"",date:"",time:"",duration:"",people:"1",location:"",message:"",preference:"No Preference"});
 const upd=e=>setForm({...form,[e.target.name]:e.target.value});
 const valid=form.service&&form.name&&form.mobile&&form.whatsapp&&form.city&&form.date&&form.time&&form.duration&&form.location;
 const submit=e=>{e.preventDefault();if(!valid)return;sessionStorage.setItem("rentpartnerBooking",JSON.stringify(form));sessionStorage.setItem("rentpartnerBookingMessage",buildBookingMessage(form));navigate("/booking-success");};
 return <form className="form card" onSubmit={submit}>
  <div className="form-section"><h3>Service & schedule</h3><div className="two"><Field label="Service *"><select name="service" value={form.service} onChange={upd} required><option value="">Select a service</option>{services.map(s=><option value={s.name} key={s.id}>{s.name}</option>)}</select></Field><Field label="Duration *"><select name="duration" value={form.duration} onChange={upd} required><option value="">Select duration</option><option>1 hour</option><option>2 hours</option><option>Half day</option><option>Full day</option><option>Custom</option></select></Field></div><div className="three"><Field label="Preferred date *"><input type="date" name="date" value={form.date} onChange={upd} required/></Field><Field label="Preferred time *"><input type="time" name="time" value={form.time} onChange={upd} required/></Field>
  {/*<Field label="People"><input type="number" min="1" name="people" value={form.people} onChange={upd}/></Field>*/}
  </div></div>
  <div className="form-section"><h3>Your details</h3><div className="two"><Field label="Full name *"><input name="name" value={form.name} onChange={upd} placeholder="Your full name" required/></Field><Field label="Mobile *"><input name="mobile" value={form.mobile} onChange={upd} placeholder="+91..." required/></Field></div><div className="two"><Field label="WhatsApp *"><input name="whatsapp" value={form.whatsapp} onChange={upd} placeholder="+91..." required/></Field><Field label="Email"><input type="email" name="email" value={form.email} onChange={upd} placeholder="you@example.com"/></Field></div></div>
  <div className="form-section"><h3>Service location</h3><div className="two"><Field label="City *"><input name="city" value={form.city} onChange={upd} placeholder="e.g. Jaipur" required/></Field><Field label="Area / PIN"><input name="pin" value={form.pin} onChange={upd} placeholder="Area or PIN code"/></Field></div><Field label="Meeting / service location *"><input name="location" value={form.location} onChange={upd} placeholder="Hotel, home, public place, landmark..." required/></Field></div>
  <div className="form-section">
 {/*<h3>Preferences</h3><Field label="Partner preference"><select name="preference" value={form.preference} onChange={upd}><option>Male</option><option>Female</option><option>No Preference</option></select></Field>*/}
 <Field label="Special requirements / message"><textarea name="message" value={form.message} onChange={upd} rows="4" placeholder="Tell us anything important about the request..."/></Field></div>
  <div className="review"><Icon name="Info"/><span>After submitting, choose WhatsApp or Telegram to send the prepared request. Our team will check availability and contact you.</span></div>
  <button className="btn full" disabled={!valid}>Review & Prepare Request <Icon name="ArrowRight"/></button>
 </form>;
}
