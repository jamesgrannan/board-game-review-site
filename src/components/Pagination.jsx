import styles from "../css-modules/pagination.module.css";

const Pagination = ({ setPage, page, count }) => {
  const handleClick = (value) => {
    setPage((currentPage) => currentPage + value);
  };

  return (
    <div>
      {page > 1 ? (
        <button className={styles.pagBtn} onClick={() => handleClick(-1)}>
          Previous
        </button>
      ) : null}
      {10 * page >= count ? null : (
        <button className={styles.pagBtn} onClick={() => handleClick(1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
