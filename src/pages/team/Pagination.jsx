const Pagination = ({styles}) => {
    return (
        <ul className={`${styles.pagination} d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}>
            <li className="border border-1 rounded-1 px-3 py-2" role="button">&lt;</li>
            <li className={`${styles.active} border border-1 rounded-1 px-3 py-2 ${styles.grey}`} role="button">01</li>
            <li className={`border border-1 rounded-1 px-3 py-2 ${styles.grey}`} role="button">02</li>
            <span role="button">...</span>
            <li className={`border border-1 rounded-1 px-3 py-2 ${styles.grey}`} role="button">03</li>
            <li className={`border border-1 rounded-1 px-3 py-2 ${styles.grey}`} role="button">04</li>
            <li className="border border-1 rounded-1 px-3 py-2" role="button">&gt;</li>
        </ul>
    )
}

export default Pagination