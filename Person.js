const Person = (props) => {
    let message = props.age >= 18 ? "Please go vote!" : "You must be 18!";
    
    let name = props.name;
    if(props.name.length > 8) {
        name = props.name.slice(0,6)
    }

    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <div>
            <p>Learn more about this person</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>
                {hobbies}
            </ul>
            <p>{message}</p>
        </div>    
    )
}