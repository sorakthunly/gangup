import { format } from 'date-fns'

const DEFAULT_DATE_FORMAT = 'MM/dd/yyyy';

export const  reformat = (timeString = '', dateFormat = DEFAULT_DATE_FORMAT) => {
    return format(new Date(timeString), dateFormat);
};