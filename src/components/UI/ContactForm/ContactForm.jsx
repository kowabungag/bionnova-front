import React from 'react';
import {Field, Formik} from "formik";
import PhoneInput from "react-phone-number-input";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

import MyButton from "../MyButton/MyButton";

import {ContactUsForm} from "@/components/UI/ContactForm/schema";
import sendEmail from "@/helpers/sendEmail";
import {removeBasketElements} from "@/features/basket/basketSlice";


import "./contactForm.scss"

const Phone = ({field, form}) => {
    const {t} = useTranslation()
    return (
        <PhoneInput
            placeholder={t('form.phone')}
            value={field.value}
            name="phone"
            id="phone"
            onChange={value => {
                if (!form.touched[field.name]) form.setFieldTouched(field.name);
                form.validateField(field.name)
                form.setFieldValue(field.name, value);
            }}
        />
    );
};


const ContactForm = ({type, isWhite, location, price, basketData}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const handleSend = (values) => {
        const sentBody = `
            <div>
                <p>Name: ${values.name}</p>
                <p>Phone: ${values.phone}</p>
                <p>Email: ${values.email}</p>
                ${basketData ? `<div>${basketData}</div>` : `<p>Theme: ${values.them}</p>`}
            </div>
        `;

        sendEmail(sentBody);
        handleRemove()
    }

    const handleRemove = () => {
        dispatch(removeBasketElements())
    }

    const onSubmit = (values, actions) => {
        handleSend(values)
        actions.resetForm()
    }

    return (
        <div className="contactForm">
            <Formik
                className={`
                        form 
                        ${type === 'individual' ? 'form_individual' : ''}
                        ${location === 'basket' ? 'form_basket' : ''}
                        ${isWhite ? 'form_white' : ''}
                        `}
                initialValues={{name: "", phone: "", them   : "", email: ""}}
                onSubmit={onSubmit}
                validationSchema={ () => ContactUsForm(t, location)}
            >
                {({

                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      validateField

                  }) => (
                    <form
                        className={`
                        form 
                        ${type === 'individual' ? 'form_individual' : ''}
                        ${location === 'basket' ? 'form_basket' : ''}
                        ${isWhite ? 'form_white' : ''}
                        `}
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div className="formContainer">
                            <div>
                                <input
                                    className="text24"
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder={t('form.name')}
                                    onChange={e => {
                                        handleChange(e)
                                        validateField("name")
                                    }}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <p className="error">{errors.name && touched.name && errors.name}</p>
                            </div>
                            <div>
                                <Field name="phone" component={Phone}/>
                                <p className="error">{errors.phone && touched.phone && errors.phone}</p>
                            </div>

                            <div>
                                <input
                                    className="text24"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder={t('form.email')}
                                    onChange={e => {
                                        handleChange(e)
                                        validateField("email")
                                    }}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <p className="error">{errors.email && touched.email && errors.email}</p>
                            </div>
                            <div className='basket-remove'>
                                <input
                                    className="text24"
                                    type="text"
                                    name="them"
                                    id="them"
                                    placeholder={t('form.them')}
                                    onChange={e => {
                                        handleChange(e)
                                        validateField("them")
                                    }}
                                    onBlur={handleBlur}
                                    value={values.them}
                                />
                                <p className="error">{errors.them && touched.them && errors.them}</p>
                            </div>
                        </div>
                        {location === 'basket'
                            &&
                            <p className='price'>{t('form.amount')}: {price} $</p>
                        }
                        {location === 'basket' ?
                            <div className='basket-btns'>
                                <MyButton
                                    onClick={handleRemove}
                                    goldenTransparent
                                >
                                    <p>{t('form.cancel')}</p>
                                </MyButton>
                                <MyButton
                                    type="submit"
                                    fullGolden
                                    onClick={handleSubmit}
                                >
                                    {t('form.send')}
                                </MyButton>
                            </div>
                            :
                            <MyButton
                                type={"submit"}
                                black={type === 'individual'}
                                golden={type !== 'individual'}
                                onClick={handleSubmit}
                            >
                                {t('form.send')}
                            </MyButton>
                        }
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;