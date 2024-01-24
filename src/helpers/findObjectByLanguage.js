const groupUserWebinars = (programs, webinars, language) => {
    const userWebinarIds = programs.webbinarrs.data.map(webinar => webinar.id)
    const userProgramWebinars = webinars.filter((item) => userWebinarIds.includes(item.id))

    let matchingObjects = []
    userProgramWebinars.forEach(webinar => {
        const webinarId = webinar.id
        let attributes = webinar.attributes
        if (attributes.locale === language) {
            matchingObjects.push({id: webinarId, ...attributes});
        }

        if (attributes.localizations && attributes.localizations.data) {

            attributes.localizations.data.forEach(localization => {
                if (localization.attributes.locale === language) {
                    matchingObjects.push({id: webinarId, ...localization.attributes});
                }
            });
        }
    })
    return {
        data: matchingObjects
    }

}

export const findObjectsByLanguage = (jsonResponse, language, isUserData, webinars) => {
    const matchingObjects = [];
///////
    if (language === "ua") {
        language = 'uk'
    }

    jsonResponse.forEach(item => {
        let attributes;
        let itemId;

        if (isUserData) {
            attributes = item.data.data.attributes;
            itemId = item.data.data.id;
        } else {
            attributes = item.attributes;
            itemId = item.id;
        }

        let webbinarrs
        if (webinars) {
            webbinarrs = groupUserWebinars(attributes, webinars, language)
        }

        if (attributes.locale === language) {

            matchingObjects.push({webbinarrs, id: itemId, ...attributes});
        }

        if (attributes.localizations && attributes.localizations.data) {

            attributes.localizations.data.forEach(localization => {
                if (localization.attributes.locale === language) {
                    matchingObjects.push({webbinarrs, id: itemId, ...localization.attributes});
                }
            });
        }
    });



    return matchingObjects;
};