/**
 * @param {string} value 
 * @param {Intl.DateTimeFormatOptions} format 
 */
export function dateFormat(
    value: number | string | Date,
    format: Intl.DateTimeFormatOptions = { day: 'numeric' , month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' }) {
        format.timeZone = 'UTC';
    return new Date(value).toLocaleString('pl-PL', format);
}