export const getFeedbackByLanguage = (feedback, language) => {
    if (language === "ua") {
        language = 'uk';
    }

    return feedback.map(feedbackItem => {
        const localization = feedbackItem.attributes.localizations.data.find(localization => localization.attributes.locale === language);
        if (localization) {
            return {
                id: feedbackItem.id,
                userName: localization.attributes.userName,
                text: localization.attributes.text,
                createdAt: localization.attributes.createdAt,
                updatedAt: localization.attributes.updatedAt,
                publishedAt: localization.attributes.publishedAt,
                locale: localization.attributes.locale,
            };
        }else {
            return {
                id: feedbackItem.id,
                userName: feedbackItem.attributes.userName,
                text: feedbackItem.attributes.text,
                createdAt: feedbackItem.attributes.createdAt,
                updatedAt: feedbackItem.attributes.updatedAt,
                publishedAt: feedbackItem.attributes.publishedAt,
                locale: feedbackItem.attributes.locale,
            }
        }
    }).filter(Boolean);
};