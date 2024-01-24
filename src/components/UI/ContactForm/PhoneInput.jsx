import {useTranslation} from "react-i18next";
import PhoneInput from "react-phone-number-input";
import React from "react";

const Phone = ({field, form}) => {
    const {t} = useTranslation()
    return (
        <PhoneInput
            placeholder={t('form.phone')}
            value=""
            name="phone"
            id="phone"

            onChange={value => {
                if (!form.touched[field.name]) form.setFieldTouched(field.name);
                form.setFieldValue(field.name, value);
            }}
        />
    );
};

export default Phone;