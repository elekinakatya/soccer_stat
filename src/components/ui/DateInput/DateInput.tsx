import styles from './DateInput.module.css'
import calendarIcon from "../../../assets/icons/calendar.svg";
import {useRef} from "react";

interface DateInputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}
export const DateInput = ({ value = '', onChange, placeholder = '' }: DateInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const hasValue = value.length > 0
    return (
        <div className={`${styles.dateWrapper} ${hasValue ? styles.hasValue : ''}`}>

            <input
                ref={inputRef}
                type="date"
                placeholder={placeholder}
                title=""
                className={styles.input}
                value={value}
                onChange={handleChange}
            />
            <img
                src={calendarIcon}
                alt="Calendar icon"
                className={styles.calendarIcon}
                onClick={handleIconClick}
            />

        </div>
    )
}