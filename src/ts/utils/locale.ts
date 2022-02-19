const getLocale = (): string => {
  return sessionStorage.getItem("locale") || "en";
};

const setLocale = (locale: string): void => {
  sessionStorage.setItem("locale", locale);
};

export { getLocale, setLocale };
