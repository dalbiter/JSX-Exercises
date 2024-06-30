const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name={"name"} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))