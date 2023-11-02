import { useEffect, useState } from "react"

function Time() {
    const [time, setTime] = useState(0)
    const subtitle = <h2 className="subtitle">ZA WARUDO !!!</h2>

    useEffect(() => {
        let interval = setInterval(() => setTime(time + 1), 1000)

        if  (time === 10) {
            clearInterval(interval)

            document.querySelector('#page').style.color = 'white'
            document.querySelector('#page').style.backgroundColor = 'black'
        }

        return () => clearInterval(interval)
    })

    return (
        <section>
            <p>Tu as passé { time } secondes ici !</p>
            { time === 10 ? subtitle : null }
        </section>
    )
}

export default Time