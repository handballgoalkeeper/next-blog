"use client";

import React from "react";

const Footer = ():  React.JSX.Element => {
    return (
        <footer className="bg-light position-sticky text-center m-o p-0 border-top border-dark">
            <p className="p-3">Copyright © {new Date().getFullYear()} - {new Date().getFullYear() + 1} <strong>Dimitrije
                Jelić</strong>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;