"use client";

import { PropsWithChildren, useEffect, useState } from "react";

export default function CustomHtml({ children }: PropsWithChildren<{}>) {
    const [className, setClassName] = useState("dark");

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");
        matcher.addEventListener("change", (e) => {
            setClassName(e.matches ? "dark" : "light");
        });
        return () => {
            matcher.removeEventListener("change", () => {});
        };
    }, []);

    return <html className={className}>{children}</html>
}