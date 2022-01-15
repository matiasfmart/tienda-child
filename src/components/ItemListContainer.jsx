import ItemCount from "./ItemCount";

function ItemListContainer({greeting}){

    function onAdd(count){ alert(count); }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;