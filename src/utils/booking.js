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

export function getWhatsAppUrl(message) {
  if (APP_CONFIG.whatsappNumber.startsWith("91+9057708005")) return "#";
  return `https://wa.me/${APP_CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
