import React from "react";

export default function ProductLayout ({ children }: { children : React.ReactNode}) {
    return (
        <>
            { children }
            <h4>you are in dynamic products route</h4>
        </>
    )
}