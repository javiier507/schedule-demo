/**
 * Fecha en formato UTC
 */
type UtcDate = Date;

/**
 * Fecha corta. Solo compuesta de año, mes y día.
 */
type ShortDate = Date;

/**
 * Fecha corta en formato ISO (YYYY-MM-DD)
 */
type IsoShortDate = string;

/**
 * Convierte una Fecha Corta a Fecha UTC
 * @param input Fecha Corta
 * @returns Fecha UTC
 */
export function convertShortDateToUtc(input: ShortDate): UtcDate {
  const current = new Date();
  current.setFullYear(input.getUTCFullYear());
  current.setMonth(input.getUTCMonth());
  current.setDate(input.getUTCDate());
  return current;
}

/**
 * Formatea una Fecha UTC a Fecha Corta ISO
 * @param input Fecha UTC
 * @returns Fecha Corta ISO
 */
export function getShortISODate(input: Date): IsoShortDate {
  return input.toISOString().split("T")[0];
}
