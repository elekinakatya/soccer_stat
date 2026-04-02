import styles from './DateInput.module.css'
import calendarIcon from "../../../assets/icons/calendar.svg";
import {useRef, useState} from "react";

export const DateInput = () => {
    const [date, setDate] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    }

    const hasValue = date.length > 0
    return (
        <div className={`${styles.dateWrapper} ${hasValue ? styles.hasValue : ''}`}>

            <input
                ref={inputRef}
                type="date"
                placeholder=""
                title=""
                className={styles.input}
                value={date}
                onChange={e => setDate(e.target.value)}
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