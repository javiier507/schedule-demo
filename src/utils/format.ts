type Format = {
  locale?: "en-US";
  dateStyle?: "full" | "long" | "medium" | "short" | undefined;
  timeStyle?: "full" | "long" | "medium" | "short" | undefined;
  weekday?: "long" | "short" | "narrow" | undefined;
  era?: "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  hour12?: boolean | undefined;
  timeZone?: string | undefined;
};

/**
 * Convierte una fecha UTC a formato local
 * @param date Fecha a formatear
 * @param format Formato
 * @returns
 */
export function formatDatetime(
  date: Date,
  {
    locale = "en-US",
    timeZone = "America/New_York",
    dateStyle,
    timeStyle,
    ...rest
  }: Format = {}
) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle,
    timeStyle,
    timeZone,
    ...rest,
  }).format(date);
}
