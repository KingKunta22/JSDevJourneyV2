function Food() {
    
    const foods = ['Apple', 'Orange', 'Watermelon']
    
    return(
        <ul>
            <li>{ foods[0] }</li>
            <li>{ foods[1] }</li>
            <li>{ foods[2] }</li>
        </ul>
    );
}

export default Food