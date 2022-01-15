import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_dkZNctuGSFsAvdZDM2ZSJ");

export const SERVICE_ID = "service_tsfzkek";
export const TEMPLATE_ID = "template_hdda4m8";
export const USER_ID = "user_G5rifPzrHZrhKO4TebWZF";

export const submitRequest = (subject, customerDetails, productDetails, customerResponse) => {
    send(
        SERVICE_ID, TEMPLATE_ID,
        {
            subject: subject,
            customerDetails: customerDetails,
            productDetails: productDetails,
            customerResponse: customerResponse
        },
        USER_ID
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
};