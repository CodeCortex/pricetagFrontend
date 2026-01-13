import { toast } from "react-toastify";

export const showToast = (type = "success", message = "Done!") => {
  toast[type](message);
};
