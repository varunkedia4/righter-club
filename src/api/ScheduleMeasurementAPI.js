import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_dkZNctuGSFsAvdZDM2ZSJ");

export const SERVICE_ID = "service_hq35emr";
export const TEMPLATE_ID = "template_e780u2q";
export const USER_ID = "user_dkZNctuGSFsAvdZDM2ZSJ";

export const onSubmit = (name, contact, address, date, time, productName, productCode, productCategory, sellerName) => {
    send(
        SERVICE_ID, TEMPLATE_ID,
        {
            name: name,
            contact: contact,
            address: address,
            date: date,
            time: time,
            queryType: "Schedule Measurement",
            productName: productName,
            productCode: productCode,
            productCategory: productCategory,
            sellerName: sellerName
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