export default function Item({name, quantity, category}){
    return(
        <>
        <ul>
            <li className="border border-sky-300 bg-sky-100 p-2 m-4 max-w-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <>Buy {quantity} in {category}</>
            </li>
        </ul>
        </>
    )
}