import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {redirect} from "next/navigation";


export const storeUser = (data) => {
    typeof window !== 'undefined' ?
        localStorage.setItem(
            "user",
            JSON.stringify({
                username: data.user.username,
                userId: data.user.id,
                jwt: data.jwt,
            })
        )
        :
        ''
};

export const userData = () => {
    const stringifiedUser = typeof window !== 'undefined' ? localStorage.getItem("user") || '{}' : '{}';
    return JSON.parse(stringifiedUser);
};

export const removeUserData = () => {
    localStorage.removeItem("user");
    window.location.href = '/';
}

export const Protector = ({ children }) => {
    const { jwt } = userData();

    useEffect(() => {
        if (!jwt) {
            redirect("/login");
        }
    }, [jwt]);

    return <>{children}</>;
};