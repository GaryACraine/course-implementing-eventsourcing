'use client'

import React, {useEffect} from "react";
import {DebugEvents} from "@/app/debug/eventsdebug";
import Navigation from "@/app/components/Navigation";

export default function PrototypePage() {

    return (<>
        <Navigation/>
        <section className="section main-container">
        <div className="">
            <div className="columns">
                <div className={"container"}>
                   No cart items Read Model implemented
                </div>
            </div>
        </div>
        <DebugEvents/>

    </section></>)
}