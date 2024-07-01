const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Doug" />
            <div class="tweets">
                <Tweet 
                    username="RedBaron"
                    name="Jesse"
                    date="06-30-24"
                    message="This is my message" />
                <Tweet 
                    username="RedBaron"
                    name="Jesse"
                    date="06-30-24"
                    message="This is my message" />
                <Tweet 
                    username="RedBaron"
                    name="Jesse"
                    date="06-30-24"
                    message="This is my message" />
            </div>
            <Person name="Einstein" age={19} hobbies={["paddle boarding", "indoor rock climbing", "coding"]}/>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))