const Tweet = (props) => {
    return (
        <div class="tweet">
            <ul>
                <li>User: {props.username}</li>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
            </ul>
            <p>Message: {props.message}</p>
        </div>
        
    )
}