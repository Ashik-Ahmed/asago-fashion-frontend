"use client";

import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/pageProps/Breadcrumbs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const About = () => {
    const location = usePathname()
    const [prevLocation, setPrevLocation] = useState("");

    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="About" prevLocation={prevLocation} />
            <div className="pb-10">
                <h1 className="max-w-[600px] text-base text-lightText mb-2">
                    <span className="text-primeColor font-semibold text-lg">Asago Fashion</span>{" "}
                    is one of the world's leading ecommerce brands and is internationally
                    recognized for celebrating the essence of classic Worldwide cool
                    looking style.
                </h1>
                <Link href="/shop">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
