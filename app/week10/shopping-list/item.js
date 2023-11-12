export default function Item({ name, quantity, category, onSelect, onDelete }) {
  const handleItemClick = () => {
    onSelect(name);
  };

  return (
    <>
      <ul>
        <li
          className="border border-sky-300 bg-sky-100 p-2 m-4 max-w-lg"
          onClick={handleItemClick}
        >
          <h2 className="text-xl font-bold">{name}</h2>
          <p>
            Buy {quantity} in {category}
          </p>
          <>
            <button
              className="bg-teal-600 p-1 rounded-md text-white"
              onClick={onDelete}
            >
              Delete
            </button>
          </>
        </li>
      </ul>
    </>
  );
}
