import styles from './SearchInput.module.css'
import searchIcon from '../../../assets/icons/Search.svg'
import cancelIcon from '../../../assets/icons/Cancel.svg'
import {useEffect, useRef, useState} from "react";

interface SearchInputProps {
    onChange?: (value: string) => void
    placeholder?: string
    delay?: number
}
export const SearchInput = ({onChange, placeholder = 'Search', delay = 300}: SearchInputProps)=> {
    const [searchText, setSearchText] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        const timer = setTimeout(() => {
            if (onChange) {
                onChange(searchText)
            }
        }, delay)
        return () => clearTimeout(timer)
    },[onChange,delay,searchText])

    const handleClear = () => {
        setSearchText('')
        if (onChange) onChange('')
        inputRef.current?.focus()
    }

    const hasValue = searchText.length > 0

    return (
        <div className={`${styles.searchWrapper} ${hasValue ? styles.hasValue : ''}`}>
            <img
                src={searchIcon}
                alt="Search"
                className={styles.searchIcon}
            />
            <input
                ref={inputRef}
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            {hasValue &&(<button
            type="button"
            onClick={handleClear}
            className={styles.cancelIcon}>
                <img src={cancelIcon}
                alt="Cancel"/>
            </button>)}
        </div>
    )
}