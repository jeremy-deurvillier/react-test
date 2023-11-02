function Click({count, add, remove}) {
    return (
        <div>
            <p>Click Component { count }</p>
            <button onClick={ add }>Click me !</button>
            <button onClick={ remove }>Click me more !</button>
        </div>
    )
}

export default Click