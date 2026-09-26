import {useState} from "react"; import {Link} from "react-router-dom"; import Page from "../components/common/Page"; import SectionHead from "../components/common/SectionHead"; import Field from "../components/common/Field"; import Icon from "../components/common/Icon";import "../../src/booking.css";
// export default function BecomePartner(){const[done,setDone]=useState(false);const[f,setF]=useState({name:"",mobile:"",email:"",city:"",services:"",experience:"",availability:"",intro:""});const u=e=>setF({...f,[e.target.name]:e.target.value});if(done)return <Page narrow><div className="success card"><div className="success-icon"><Icon name="Check"/></div><div className="eyebrow">Application received</div><h1>Thanks for applying.</h1><p>We have your partner application details. Our team can review your information and contact you about the next steps.</p><Link className="btn" to="/">Back to home</Link></div></Page>;return <Page narrow><SectionHead kicker="Become a partner" title="Turn your time into an opportunity." text="Apply to offer services through RentPartner. Applications are reviewed before approval."/><form className="form card" onSubmit={e=>{e.preventDefault();setDone(true)}}><div className="two"><Field label="Full name *"><input required name="name" value={f.name} onChange={u}/></Field><Field label="Mobile *"><input required name="mobile" value={f.mobile} onChange={u}/></Field></div><div className="two"><Field label="Email"><input type="email" name="email" value={f.email} onChange={u}/></Field><Field label="City *"><input required name="city" value={f.city} onChange={u}/></Field></div><Field label="Services you want to offer *"><input required name="services" value={f.services} onChange={u}/></Field><Field label="Experience"><textarea name="experience" value={f.experience} onChange={u} rows="3"/></Field><Field label="Availability"><input name="availability" value={f.availability} onChange={u}/></Field><Field label="Short introduction"><textarea name="intro" value={f.intro} onChange={u} rows="4"/></Field><button className="btn full">Submit application <Icon name="ArrowRight"/></button></form></Page>}

import { APP_CONFIG } from "../config/app";

const TELEGRAM_GROUP = APP_CONFIG.telegramUrl;
//   "https://t.me/RentPartnerCompanions";

const WHATSAPP_GROUP = APP_CONFIG.whatsappUrl;
//   "https://chat.whatsapp.com/Lc4qszwYYh21hWpiDOjW5y?s=cl&p=a&mlu=4&ilr=4";

export default function BecomePartner() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [f, setF] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    services: "",
    experience: "",
    availability: "",
    intro: "",
  });

  const u = (e) => {
    setF({
      ...f,
      [e.target.name]: e.target.value,
    });
  };

  const buildMessage = () => {
    return `🤝 NEW RENTPARTNER PARTNER APPLICATION

👤 Name: ${f.name}
📱 Mobile: ${f.mobile}
📧 Email: ${f.email || "Not provided"}
📍 City: ${f.city}

🛠️ Services:
${f.services}

💼 Experience:
${f.experience || "Not provided"}

🕐 Availability:
${f.availability || "Not provided"}

📝 Introduction:
${f.intro || "Not provided"}

━━━━━━━━━━━━━━━━━━
Submitted from RentPartner`;
  };

  const submitApplication = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const message = buildMessage();

      // Save application locally
      localStorage.setItem(
        "rentpartnerPartnerApplication",
        JSON.stringify({
          ...f,
          submittedAt: new Date().toISOString(),
        })
      );

      // Save the application message
      localStorage.setItem(
        "rentpartnerPartnerApplicationMessage",
        message
      );

      // Copy application message to clipboard
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(message);
      }

      /*
       * Open the exact Telegram group.
       */
      window.open(
        TELEGRAM_GROUP,
        "_blank",
        "noopener,noreferrer"
      );

      /*
       * Open the exact WhatsApp group.
       */
      setTimeout(() => {
        window.open(
          WHATSAPP_GROUP,
          "_blank",
          "noopener,noreferrer"
        );
      }, 700);

      setDone(true);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to prepare the application. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <Page narrow>
        <div className="success card">
          <div className="success-icon">
            <Icon name="Check" />
          </div>

          <div className="eyebrow">
            Application ready
          </div>

          <h1>Thanks for applying.</h1>

          <p>
            Your application details have been copied.
            Telegram and WhatsApp groups have also been
            opened. Paste the application message into the
            appropriate group and send it.
          </p>

          <div className="success-actions">

            <a
              className="btn"
              href={TELEGRAM_GROUP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Telegram Group
            </a>

            <a
              className="btn secondary"
              href={WHATSAPP_GROUP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp Group
            </a>

            <button
              className="btn secondary"
              type="button"
              onClick={async () => {
                const message =
                  localStorage.getItem(
                    "rentpartnerPartnerApplicationMessage"
                  );

                if (message && navigator.clipboard) {
                  await navigator.clipboard.writeText(message);
                  alert(
                    "Application message copied."
                  );
                }
              }}
            >
              Copy Application
            </button>

            <Link
              className="btn secondary"
              to="/"
            >
              Back to Home
            </Link>

          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page narrow>
      <SectionHead
        kicker="Become a partner"
        title="Turn your time into an opportunity."
        text="Apply to offer services through RentPartner. Applications are reviewed before approval."
      />

      <form
        className="form card"
        onSubmit={submitApplication}
      >

        <div className="two">

          <Field label="Full name *">
            <input
              required
              name="name"
              value={f.name}
              onChange={u}
              autoComplete="name"
              placeholder="Your full name"
            />
          </Field>

          <Field label="Mobile *">
            <input
              required
              name="mobile"
              value={f.mobile}
              onChange={u}
              type="tel"
              autoComplete="tel"
              placeholder="Your mobile number"
            />
          </Field>

        </div>

        <div className="two">

          <Field label="Email">
            <input
              type="email"
              name="email"
              value={f.email}
              onChange={u}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>

          <Field label="City *">
            <input
              required
              name="city"
              value={f.city}
              onChange={u}
              autoComplete="address-level2"
              placeholder="Your city"
            />
          </Field>

        </div>

        <Field label="Services you want to offer *">
          <input
            required
            name="services"
            value={f.services}
            onChange={u}
            placeholder="e.g. Travelling Partner, Pet Walker"
          />
        </Field>

        <Field label="Experience">
          <textarea
            name="experience"
            value={f.experience}
            onChange={u}
            rows="3"
            placeholder="Tell us about your experience"
          />
        </Field>

        <Field label="Availability">
          <input
            name="availability"
            value={f.availability}
            onChange={u}
            placeholder="e.g. Monday-Friday, 6 PM-10 PM"
          />
        </Field>

        <Field label="Short introduction">
          <textarea
            name="intro"
            value={f.intro}
            onChange={u}
            rows="4"
            placeholder="Introduce yourself briefly"
          />
        </Field>

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        <button
          className="btn full"
          type="submit"
          disabled={sending}
        >
          {sending
            ? "Preparing application..."
            : "Submit application"}

          {!sending && (
            <Icon name="ArrowRight" />
          )}
        </button>

      </form>
    </Page>
  );
}