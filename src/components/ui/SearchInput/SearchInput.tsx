import styles from './SearchInput.module.css'
import searchIcon from '../../../assets/icons/Search.svg'
import cancelIcon from '../../../assets/icons/Cancel.svg'
import {useRef, useState} from "react";
export const SearchInput = ()=> {
    const [searchText, setSearchText] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClear = () => {
        setSearchText('')
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
                placeholder="Search"
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