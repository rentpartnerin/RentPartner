import { useState } from "react";
import { buildBookingMessage } from "../utils/booking";

export function useBooking(initialForm) {
  const [form, setForm] = useState(initialForm);
  const update = (event) => setForm((current) => ({...current, [event.target.name]: event.target.value}));
  const save = () => sessionStorage.setItem("rentpartnerBooking", JSON.stringify(form));
  const load = () => JSON.parse(sessionStorage.getItem("rentpartnerBooking") || "null");
  return {form,setForm,update,save,message:buildBookingMessage(form),load};
}
