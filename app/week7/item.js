export default function Item({ name, quantity, category, onSelect }){
    const handleItemClick = () => {
        onSelect(name);
    };

    return(
        <>
        <ul>
            <li className="border border-sky-300 bg-sky-100 p-2 m-4 max-w-md"
            onClick={handleItemClick}
            >
            <h2 className="text-xl font-bold">{name}</h2>
            <>Buy {quantity} in {category}</>
            </li>
        </ul>
        </>
    )
}