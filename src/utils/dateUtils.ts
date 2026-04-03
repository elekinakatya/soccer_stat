import { format, parseISO } from 'date-fns';

export const formatMatchDate = (utcDate: string): string => {
    const date = parseISO(utcDate);
    return format(date, 'dd.MM.yyyy');
};

export const formatMatchTime = (utcDate: string): string => {
    const date = parseISO(utcDate);
    return format(date, 'HH:mm');
};