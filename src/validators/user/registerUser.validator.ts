import React, {SetStateAction} from "react";

export const validateEmail = (email: string | undefined, fieldName: string, callback: React.Dispatch<SetStateAction<string | undefined>>): boolean => {
    if (!email) {
        callback(`${fieldName} is required.`);
        return false;
    }

    if (email.trim() === '') {
        callback(`${fieldName} cannot be empty.`)
        return false;
    }

    if (!email.includes("@")) {
        callback(`This is not a valid email address.`)
        return false;
    }

    return true;
};

export const validatePassword = (password: string | undefined, fieldName: string, callback: React.Dispatch<SetStateAction<string | undefined>>): boolean => {
    if (!password) {
        callback(`${fieldName} is required.`)
        return false;
    }

    if (password.trim() === '') {
        callback(`${fieldName} cannot be empty.`)
        return true;
    }

    return true;
}