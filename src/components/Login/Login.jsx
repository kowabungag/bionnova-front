"use client"
import React, {useState} from "react";

import axios from "axios";
import {toast} from "react-toastify";


import {Formik} from "formik";

//helpers


//styles
import * as styles from "./login.module.scss"
import Container from "../Container/Container";
import {useRouter} from "next/navigation";
import {storeUser} from "@/helpers/userData";
import {useTranslation} from "react-i18next";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const initialUser = {password: "", identifier: ""};

const Login = () => {
    const {t} = useTranslation();
    const [user, setUser] = useState(initialUser);
    const router = useRouter();

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };


    const handleLogin = async (event, values) => {
        event.preventDefault()
        const url = `${process.env.NEXT_PUBLIC_STRAPI_BACKEND}api/auth/local`;
        try {
            if (values.identifier && values.password) {
                const {data} = await axios.post(url, values);
                if (data.jwt) {
                    storeUser(data);
                    toast.success(t('toast.login.success'), {
                        hideProgressBar: true,
                    });
                    setUser(initialUser);
                    window.location.href = '/home/webinars/#webinars';
                }
            }
        } catch (error) {
            toast.error(t('toast.login.failed'), {
                hideProgressBar: true,
            });
        }
    };

    return (
        <Container>
            <div className={styles.root}>
                <h2 className={styles.title}>{t('login.accountLogin')}</h2>
                <Formik
                    initialValues={{identifier: "", password: ""}}
                    validate={values => {
                        const errors = {};

                        return errors;
                    }}
                >
                    {({

                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form
                            className={styles.form}
                            onSubmit={(event) => handleLogin(event,values)}
                        >
                            <div className={styles.formContainer}>

                                <div className={styles.formBlock}>
                                    <label className="text40" htmlFor="identifier">{t('login.login')}</label>
                                    <input
                                        className="text24"
                                        type="text"
                                        name="identifier"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.identifier}
                                    />
                                    {errors.identifier && touched.identifier && errors.identifier}

                                </div>
                                <div className={styles.formBlock}>
                                    <label className="text40" htmlFor="password">{t('login.password')}</label>
                                    <input
                                        className="text24"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <p className={styles.error}>{errors.passwod && touched.passwod && errors.passwod}</p>
                                </div>
                            </div>
                            <div className={styles.btnBlock}>
                                <button type="submit" disabled={isSubmitting}>

                                    {t('additional.enter')}
                                </button>
                            </div>


                        </form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default Login;