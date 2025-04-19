const Error = () =>{
    const handleClick = () =>{
        return (
           window.location.href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        )
    }

    return(
        <>
            <h1>It dont work</h1>
            <p>Maybe restarting your computer will help</p>
            <p>If not, click below for a troubleshooting guide</p>
            <button onClick={handleClick}>Troubleshooting Guide</button>
        </>
    )
}

export default Error