// import { APP_CONFIG } from "../config/app";

// export function buildBookingMessage(form) {
//   return `Hello RentPartner, I want to submit a booking request.

// Service: ${form.service}
// Name: ${form.name}
// Mobile: ${form.mobile}
// WhatsApp: ${form.whatsapp}
// Email: ${form.email || "Not provided"}
// City: ${form.city}
// Area/PIN: ${form.pin || "Not provided"}
// Date: ${form.date}
// Time: ${form.time}
// Duration: ${form.duration}
// People: ${form.people}
// Location: ${form.location}
// Partner preference: ${form.preference}
// Requirements: ${form.message || "None"}`;
// }

// export function getWhatsAppUrl(message) {
//   if (APP_CONFIG.whatsappNumber.startsWith("YOUR_")) return "#";
//   return `https://wa.me/${APP_CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
// }



//////////////////////                       ///////////////////////////////



import { APP_CONFIG } from "../config/app";

export function buildBookingMessage(form) {
  return `Hello RentPartner, I want to submit a booking request.

Service: ${form.service}
Name: ${form.name}
Mobile: ${form.mobile}
WhatsApp: ${form.whatsapp}
Email: ${form.email || "Not provided"}
City: ${form.city}
Area/PIN: ${form.pin || "Not provided"}
Date: ${form.date}
Time: ${form.time}
Duration: ${form.duration}
People: ${form.people}
Location: ${form.location}
Partner preference: ${form.preference}
Requirements: ${form.message || "None"}`;
}

/*
 * WhatsApp personal/business number
 */
export function getWhatsAppUrl(message) {
  if (
    !APP_CONFIG.whatsappNumber ||
    APP_CONFIG.whatsappNumber.startsWith("YOUR_")
  ) {
    return "#";
  }

  return `https://wa.me/${APP_CONFIG.whatsappNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
}

/*
 * RentPartner WhatsApp Group
 */
export function getWhatsAppGroupUrl() {
  return (
    APP_CONFIG.whatsappGroupUrl ||
    "https://chat.whatsapp.com/Lc4qszwYYh21hWpiDOjW5y?s=cl&p=a&mlu=4&ilr=4"
  );
}

/*
 * RentPartner Telegram Group
 */
export function getTelegramGroupUrl() {
  return (
    APP_CONFIG.telegramGroupUrl ||
    "https://t.me/RentPartnerCompanions"
  );
}

/*
 * Telegram share URL with the booking message prepared.
 */
export function getTelegramShareUrl(message) {
  return `https://t.me/share/url?url=${encodeURIComponent(
    getTelegramGroupUrl()
  )}&text=${encodeURIComponent(message)}`;
}

/*
 * WhatsApp share URL with the booking message prepared.
 *
 * This opens WhatsApp with the message ready.
 * User must choose the group/chat and press Send.
 */
export function getWhatsAppShareUrl(message) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}