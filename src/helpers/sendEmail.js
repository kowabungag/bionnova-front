import { toast } from "react-toastify";
import axios from "axios";
import {t} from "i18next";
import strapiAxios from "@/api/strapiAxios";
async function sendEmail(body) {

    const config = {
        to: 'info@bioinnova.com.ua',
        html:  body
    };

    try {
        const response = await strapiAxios.post('api/email', config);
        if (response && response.status === 200) {
            toast.success(t('toast.message.success'));
        } else {
            toast.error(t('toast.message.failed'));
        }
    } catch (error) {
        toast.error(`An error occurred: ${error.message || 'Unknown error'}`);
    }
}

export default sendEmail;