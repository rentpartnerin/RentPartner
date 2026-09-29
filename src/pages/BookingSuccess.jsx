import {Link} from "react-router-dom"; import Page from "../components/common/Page"; import Icon from "../components/common/Icon"; import {APP_CONFIG} from "../config/app"; import {getWhatsAppGroupUrl, getTelegramGroupUrl, getWhatsAppUrl, getWhatsAppShareUrl} from "../utils/booking";
// export default function BookingSuccess(){const form=JSON.parse(sessionStorage.getItem("rentpartnerBooking")||"null");if(!form)return <Page narrow><h1>No booking request found</h1><Link className="btn" to="/book">Start booking</Link></Page>;const text=sessionStorage.getItem("rentpartnerBookingMessage")||"";const wa=getWhatsAppUrl(text);return <Page narrow><div className="success card"><div className="success-icon"><Icon name="Check"/></div><div className="eyebrow">Request prepared</div><h1>Booking Request Ready!</h1><p>Your booking details are ready. Please send the message to RentPartner. Availability will be checked before any confirmation.</p><div className="summary"><b>{form.service}</b><span>{form.city} · {form.date} · {form.time}</span><span>{form.duration} · {form.name}</span></div><div className="actions center"><a className="btn" href={wa}>Send via WhatsApp <Icon name="Send"/></a><a className="btn btn-telegram" href={APP_CONFIG.telegramUrl}>Send via Telegram <Icon name="Send"/></a></div><div className="small-actions"><Link to="/book">Edit request</Link><Link to="/safety">Safety guidelines</Link><Link to="/">Back to home</Link></div></div></Page>}
export default function BookingSuccess() {
  const form = JSON.parse(
    sessionStorage.getItem("rentpartnerBooking") || "null"
  );

  if (!form)
    return (
      <Page narrow>
        <h1>No booking request found</h1>
        <Link className="btn" to="/book">
          Start booking
        </Link>
      </Page>
    );

  const text =
    sessionStorage.getItem("rentpartnerBookingMessage") || "";

  // const wa = getWhatsAppUrl(text);

  const waGURL = APP_CONFIG.whatsappUrl || `https://wa.me/?text=${encodeURIComponent(text)}`;

  const telegram = `https://t.me/share/url?url=${encodeURIComponent(
    APP_CONFIG.telegramUrl || "https://t.me/RentPartnerCompanions"
  )}&text=${encodeURIComponent(text)}`;

  const copyBooking = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      alert("Booking details copied.");
    } catch {
      alert("Unable to copy booking details.");
    }
  };

  return (
    <Page narrow>
      <div className="success card">
        <div className="success-icon">
          <Icon name="Check" />
        </div>

        <div className="eyebrow">Request prepared</div>

        <h1>Booking Request Ready!</h1>

        <p>
          Your booking details are ready. Please send the message to
          RentPartner. Availability will be checked before any confirmation.
        </p>

        <div className="summary">
          <b>{form.service}</b>
          <span>
            {form.city} · {form.date} · {form.time}
          </span>
          <span>
            {form.duration} · {form.name}
          </span>
        </div>

        <div className="success-actions">
          <a
            className="btn"
            href={waGURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send via WhatsApp
            <Icon name="Send" />
          </a>

          <a
            className="btn btn-telegram"
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send via Telegram
            <Icon name="Send" />
          </a>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={copyBooking}
          >
            Copy Booking
          </button>

          <Link className="btn btn-secondary" to="/">
            Back to Home
          </Link>
        </div>

        <div className="small-actions">
          <Link to="/book">Edit request</Link>
          <Link to="/safety">Safety guidelines</Link>
        </div>

        <div class="donation-card">
  <div class="donation-icon">♥</div>

  <div class="donation-content">
    <div class="donation-label">SUPPORT RENTPARTNER</div>

    <h3>Help us grow</h3>

    <p>
      Your support helps us improve RentPartner and build a
      better experience for our community.
    </p>

    <a
      class="donation-button"
      href="https://u.payu.in/BJ6CQO14eq1g"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>♥</span>
      Support Us
      <span class="donation-arrow">→</span>
    </a>

    <small>Secure payment powered by PayU</small>
  </div>
</div>

{/* <div> <a style=" width: 200px; background-color: #1CA953; text-align: center; font-weight: 800; padding: 11px 0px; color: white; font-size: 12px; display: inline-block; text-decoration: none; border-radius:3.229px; " href='https://u.payu.in/BJ6CQO14eq1g' > Donate Now </a> </div> */}


      </div>
    </Page>
  );
}