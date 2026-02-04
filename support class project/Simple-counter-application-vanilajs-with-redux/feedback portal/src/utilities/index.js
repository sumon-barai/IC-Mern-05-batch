import { toast } from "react-toastify";

export function successNotification({ message = "no message" }, config = {}) {
  toast(message, { theme: "dark", ...config });
}
export function errorNotification({ message = "no message", config = {} }) {
  toast(message, { ...config });
}

/* {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
} */
