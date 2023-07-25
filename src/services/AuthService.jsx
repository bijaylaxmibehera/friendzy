import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const logoutUser = (setToken, setUser, setLoader) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setLoader(true);
    setTimeout(() => {
        setLoader(false);
        toast.info(`Logged out`);
    }, 300);
};