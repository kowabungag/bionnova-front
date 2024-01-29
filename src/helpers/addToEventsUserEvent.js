export const addToEventsUserEvent = (
  userProgramEvents = [],
  globalEvents = [],
  userAvailableWebinars
) => {
  const matchingEvents = globalEvents.filter((event) => {
    return userAvailableWebinars.some((webinar) => webinar.id === event.id);
  });

  return [...userProgramEvents, ...matchingEvents];
};
