import React from 'react';
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";

const phoneRegExp =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

export const ContactUsForm =(t,location) => {
// Define the base schema
    const baseSchema = {
        name: Yup.string()
            .min(1, t('form.short'))
            .max(30, t('form.long'))
            .required(t('form.nameIsRequired')),
        phone: Yup.string().matches(phoneRegExp, t('form.phoneIsNotValid')).required(t('form.phoneIsRequired')),
        email: Yup.string().email(t('form.invalidEmail')).required(t('form.emailIsRequired')),
    };

    // Conditionally add the "them" validation
    if (location !== 'basket') {
        baseSchema.them = Yup.string()
            .min(2, t('form.short'))
            .max(200, t('form.long'))
            .required(t('form.topicIsRequired'));
    }

    return Yup.object().shape(baseSchema);
}