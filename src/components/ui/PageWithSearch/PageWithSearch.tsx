import styles from './PageWithSearch.module.css'
import {type ReactNode, useMemo, useState} from "react";
import {SearchInput} from "../SearchInput/SearchInput.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";

const ITEMS_PER_PAGE = 8

interface PageWithSearchProps<T> {
    loading?: boolean;
    error?: boolean;
    items?: T[];
    filterFn: (item: T, searchQuery: string) => boolean;

    getKey: (item: T) => string | number;
    renderItem: (item: T) => ReactNode;
}



export const PageWithSearch = <T,> ({
                                        loading,
                                        error,
                                        items = [], filterFn, renderItem, getKey
                                    }: PageWithSearchProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');

    const filteredItems = useMemo(() => {
        if (!searchInput.trim()) {
            return items;
        }
        const query = searchInput.toLowerCase().trim();
        return items.filter(item => filterFn(item, query));
    },[searchInput, items, filterFn]);

    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    if (error) {
        return <div className={styles.error}>Ошибка загрузки данных. Попробуйте позже.</div>;
    }
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const safeCurrentPage = currentPage > totalPages && totalPages> 0 ? 1 : currentPage;
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const currentItems = filteredItems.slice(startIndex, endIndex);
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1);
    }

    return (
        <div>
            <div className={styles.search}>
                <SearchInput
                    onChange={setSearchInput}
                ></SearchInput>
            </div>
            {filteredItems.length === 0 ? (
                <div className={styles.empty}>Ничего не найдено. Попробуйте изменить поисковый запрос.</div>
            ):(
                <>
                    <div className={styles.card}>
                        {currentItems.map(item => (
                            <div key={getKey(item)}>
                                {renderItem(item)}
                            </div>

                        ))}
                    </div>
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={safeCurrentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}/>
                    )}
                </>)}
        </div>
    )
}