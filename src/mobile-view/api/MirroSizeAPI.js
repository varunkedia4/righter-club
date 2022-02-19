import {commonConstants} from "../constants/Common";

export const getAccessCode = async (customerName) => {

    const response = await fetch('https://api.user.mirrorsize.com/api/webBrowser/generateAccessCode/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "apiKey": "RE7tFGmJXMNpuscnZouZoTqt5HkxsLFPGUBpNV4eywE15Ya1kHV8uxToJmTAwp13",
            "merchantID": "kidxl2021@gmail.com",
            "productname": "GET_MEASURED",
            "emailId": "kidxl2021@gmail.com",
            "name": customerName,
            "mobileNo": commonConstants.WHATSAPP_NUMBER
        })
    })

    return response.json();
}

export const getMeasurementDetails = async (accessCode) => {

    const response = await fetch('https://api.user.mirrorsize.com/api/webBrowser/getmeasurement', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "apiKey": "RE7tFGmJXMNpuscnZouZoTqt5HkxsLFPGUBpNV4eywE15Ya1kHV8uxToJmTAwp13",
            "merchantID": "kidxl2021@gmail.com",
            "accessCode": accessCode
        })
    })

    console.log(response)

    return response.json();
}