import { getToken } from "firebase/app-check";
import { appCheck } from "@/lib/firebase";


const API_URL = import.meta.env.PUBLIC_API_URL || 'http://127.0.0.1:7001/demo-vpm/us-central1/portal/api/v1';

const secureSubmit = async (endpoint: string, data: any) => {
    try {
        if (!appCheck) {
            throw new Error("AppCheck is not initialized. This action may only be performed in the browser.");
        }
        const appCheckTokenResponse = await getToken(appCheck, false);
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Firebase-AppCheck": appCheckTokenResponse.token,
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

        await response.json();
        return { success: true };
    } catch (error) {
        console.error("Error submitting form:", error);
        return { success: false, error: error instanceof Error ? error.message : "We were unable to process your request at this time. Please try again later or contact us at support@oasishealthservices.com" };
    }
}

export const submitContactForm = async (formData: any) => {
    return await secureSubmit("contact-us", formData);
}

export const submitReferralForm = async (formData: any) => {
    return await secureSubmit("referral", formData);
}

export const submitPartnershipForm = async (formData: any) => {
    return await secureSubmit("collaboration", formData);
}

export const verifyInsurance = async (formData: any) => {
    return await secureSubmit("verify-insurance", formData);
}