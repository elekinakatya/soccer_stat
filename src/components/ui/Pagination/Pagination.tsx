import styles from './Pagination.module.css'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}
export const Pagination = ({currentPage, totalPages, onPageChange}:PaginationProps) => {
    const VISIBLE_PAGES = 6
    const getVisiblePages = () => {
        const pages = []
        for (let i = 1; i <= Math.min(VISIBLE_PAGES, totalPages); i++) {
            pages.push(i)
        }
        if (totalPages > VISIBLE_PAGES) {
            pages.push('...')
            pages.push(totalPages)
        }
        return pages
    }
    const visiblePages = getVisiblePages()

    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.pageButton} ${currentPage===1 ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {visiblePages.map((page, index) => (
                <button
                    key={index}
                    className={`${styles.pageButton} ${page === currentPage ? styles.active : ''} ${page === '...' ? styles.dots : ''}`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}
            <button
                className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>


        </div>
    )

}