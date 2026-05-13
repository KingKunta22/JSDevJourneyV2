function List(props){

    // const fruits = [
    //     {id: 1, name: 'apple', calories: 51}, 
    //     {id: 2, name: 'mango', calories: 60}, 
    //     {id: 3, name: 'watermelon', calories: 105}, 
    //     {id: 4, name: 'peach', calories: 45}, 
    //     {id: 5, name: 'strawberry', calories: 67}
    // ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSED ALPHAB ORDER
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const itemList = props.items
    const itemCategory = props.category

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
        </li>)

    return(
    <>
        <h3>{itemCategory}</h3>
        <ol>
            {listItems}
        </ol>
    </>)
}

export default List