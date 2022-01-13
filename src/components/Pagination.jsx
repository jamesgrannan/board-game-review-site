const Pagination = ({ setPage, page, count }) => {
  const handleClick = (value) => {
    setPage((currentPage) => currentPage + value);
  };

  return (
    <div>
      {page > 1 ? (
        <button onClick={() => handleClick(-1)}>Previous</button>
      ) : null}
      {10 * page >= count ? null : (
        <button onClick={() => handleClick(1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
