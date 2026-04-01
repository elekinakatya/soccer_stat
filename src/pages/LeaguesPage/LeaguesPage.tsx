import {SearchInput} from "../../components/ui/SearchInput/SearchInput.tsx";
import styles from "../LeaguesPage/LeaguesPage.module.css";

export const LeaguesPage = () => {
    return (
        <div className={styles.search}>
            <SearchInput></SearchInput>
        </div>
    )
}