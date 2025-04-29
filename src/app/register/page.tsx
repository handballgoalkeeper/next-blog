'use client';

import React, {useEffect, useState} from "react";
import RegisterUserType from "@/types/users/registerUser.type";
import {validateEmail, validatePassword} from "@/validators/user/registerUser.validator";
import { auth } from '../firebase';
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {useAuth} from "@/context/auth.context";

const Register = (): React.JSX.Element => {
    const user = useAuth();

    const [email, setEmail] = useState<string>();
    const [confirmEmail, setConfirmEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const [emailError, setEmailError] = useState<string>();
    const [confirmEmailError, setConfirmEmailError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>();

    useEffect(() => {
        setEmailError(undefined);
    }, [email]);

    useEffect(() => {
        setConfirmEmailError(undefined)
    }, [confirmEmail]);

    useEffect(() => {
        setPasswordError(undefined);
    }, [password]);

    useEffect(() => {
        setConfirmPasswordError(undefined);
    }, [confirmPassword]);


    const handleRegistration = async () => {
        if(!validateEmail(email, 'Email', setEmailError)) return;

        if (!validateEmail(confirmEmail, 'Confirm email', setConfirmEmailError)) return;

        if (email !== confirmEmail) {
            setConfirmEmailError("Confirm email you entered is not the same.")
            return;
        }

        if(!validatePassword(password, 'Email', setEmailError)) return;

        if(!validatePassword(confirmPassword, 'Confirm password', setConfirmPasswordError)) return;

        if (password !== confirmPassword) {
            setConfirmPasswordError("Confirm password you entered is not the same.")
        }

        const user = {
            email: email,
            password: password
        } as RegisterUserType

        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark-subtle">
                <form
                    className="border px-5 py-3 rounded-4 shadow-lg bg-light d-flex flex-column gap-2"
                >
                    <div>
                        <label
                            htmlFor="emailInput"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            aria-labelledby="emailInputHelp"
                            aria-errormessage="emailInputError"
                            placeholder="example@example.com"
                            required
                            onKeyUp={e => {
                                const element = e.target as HTMLInputElement;
                                setEmail(element.value);
                            }}
                            autoComplete="on"
                        />
                        <small className="text-muted" id="emailInputHelp">We will not share your data with anyone.</small>
                        <br/>
                        {emailError &&
                            <small className="text-danger" id="emailInputError">{emailError}</small>
                        }
                    </div>
                    <div>
                        <label
                            htmlFor="confirmEmailInput"
                            className="form-label"
                        >
                            Confirm email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="confirmEmailInput"
                            aria-labelledby="confirmEmailInputHelp"
                            aria-errormessage="confirmEmailInputError"
                            placeholder="example@example.com"
                            required
                            autoComplete="off"
                            onKeyUp={e => {
                                const element = e.target as HTMLInputElement;
                                setConfirmEmail(element.value);
                            }}
                        />
                        <small className="text-muted" id="confirmEmailInputHelp">Please confirm your email address.</small>
                        <br/>
                        {confirmEmailError &&
                            <small className="text-danger" id="confirmEmailInputError">{confirmEmailError}</small>
                        }
                    </div>
                    <div>
                        <label
                            htmlFor="passwordInput"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            aria-labelledby="passwordInputHelp"
                            aria-errormessage="passwordInputError"
                            placeholder="Password..."
                            required
                            autoComplete="on"
                            onKeyUp={e => {
                                const element = e.target as HTMLInputElement;
                                setPassword(element.value);
                            }}
                        />
                        <small className="text-muted" id="passwordInputHelp">We will not share your data with anyone.</small>
                        <br/>
                        {passwordError &&
                            <small className="text-danger" id="passwordInputError">{passwordError}</small>
                        }
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPasswordInput"
                            className="form-label"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPasswordInput"
                            aria-labelledby="confirmPasswordInputHelp"
                            aria-errormessage="confirmPasswordInputError"
                            placeholder="Password..."
                            required
                            autoComplete="off"
                            onKeyUp={e => {
                                const element = e.target as HTMLInputElement;
                                setConfirmPassword(element.value);
                            }}
                        />
                        <small className="text-muted" id="confirmPasswordInputHelp">Please confirm your password.</small>
                        <br/>
                        {confirmPasswordError &&
                            <small className="text-danger" id="confirmPasswordInputError">{confirmPasswordError}</small>
                        }
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleRegistration}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;