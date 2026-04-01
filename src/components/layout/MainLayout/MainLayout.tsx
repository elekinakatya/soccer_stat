import {Header} from "../Header/Header.tsx";
import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <Outlet></Outlet>
                </div>
            </main>
        </div>
    )
}