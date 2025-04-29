'use client';

import React, {createContext, useContext, useEffect, useState} from "react";
import {auth} from "@/app/firebase";
import {User} from "@firebase/auth";

const AuthContext = createContext({});
export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        return auth.onAuthStateChanged(setupInitialUser);
    }, []);

    const setupInitialUser = async (authUser: User | null) => {
        if (authUser) {
            setUser(authUser);
            setLoggedIn(true);
        }

        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, loggedIn, isLoading }}>
            {isLoading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;