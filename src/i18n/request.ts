import { getRequestConfig } from "next-intl/server";

const locales = ["es", "en"];

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locales.includes(locale ?? "") ? locale! : "es";

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
