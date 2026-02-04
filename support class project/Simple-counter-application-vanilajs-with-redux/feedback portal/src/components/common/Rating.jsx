function Rating({ star, onStar }) {
  const totalStar = new Array(5).fill(null);
  let content = totalStar.map((_item, index) => {
    if (star >= index + 1) {
      return (
        <button
          key={index}
          className="text-gray-300 text-primary dark:text-gray-600 hover:text-primary hover:scale-110 transition-all"
          type="button"
          onClick={() => onStar(index + 1)}
        >
          <span className="material-symbols-outlined !text-3xl">star</span>
        </button>
      );
    }

    return (
      <button
        className="text-gray-300 dark:text-gray-600 hover:text-primary hover:scale-110 transition-all"
        type="button"
        key={index}
        onClick={() => onStar(index + 1)}
      >
        <span className="material-symbols-outlined !text-3xl">star</span>
      </button>
    );
  });

  return content;
}

export default Rating;
