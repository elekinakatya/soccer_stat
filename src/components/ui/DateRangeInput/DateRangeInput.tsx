import styles from './DateRangeInput.module.css'
import {DateInput} from "../DateInput/DateInput.tsx";
import {useState} from "react";

interface DateRangeInputProps {
    onDateChange?: (dateFrom: string, dateTo: string) => void;
}
export const DateRangeInput = ({onDateChange}: DateRangeInputProps) => {
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleDateFromChange = (value: string) => {
        setDateFrom(value);
        if (onDateChange) {
            onDateChange(value, dateTo);
        }
    };

    const handleDateToChange = (value: string) => {
        setDateTo(value);
        if (onDateChange) {
            onDateChange(dateFrom, value);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span className={styles.label}>Матчи с</span>
                <DateInput value={dateFrom} onChange={handleDateFromChange} placeholder="Дата с" ></DateInput>
            </div>
            <div className={styles.right}>
                <span className={styles.label}>по</span>
                <DateInput value={dateTo} onChange={handleDateToChange} placeholder="Дата по" ></DateInput>
            </div>

        </div>
    )
}