export default function Item({name, quantity, category}){
    return(
        <>
        <ul>
            <li class="border border-sky-300 bg-sky-100 p-2 m-4 max-w-sm">
            <h2 class="text-xl font-bold">{name}</h2>
            <>Buy {quantity} in {category}</>
            </li>
        </ul>
        </>
    )
}