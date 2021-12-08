import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_dkZNctuGSFsAvdZDM2ZSJ");

export const SERVICE_ID = "service_hq35emr";
export const TEMPLATE_ID = "template_dd5m1ut";
export const USER_ID = "user_dkZNctuGSFsAvdZDM2ZSJ";

export const onSubmit = (name, contact, query) => {
    send(
        SERVICE_ID, TEMPLATE_ID,
        {
            name: name,
            contact: contact,
            query: query
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