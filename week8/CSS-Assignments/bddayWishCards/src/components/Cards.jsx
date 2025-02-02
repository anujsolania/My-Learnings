import "../css/cards.css"

export function Cards({name,setmode}) {
    return (
        <div className="parentdiv" >
            <h2>Happy birthday {name} ✨🎂</h2>
            <div className="cards" >
            <div className="card1" >
            <p>“Wishing you a day filled with love, laughter, and all the happiness in the world! May this year bring you success, good health, and endless joy. Happy Birthday!” 🎉🎂</p>
            </div>
            <div className="card2" >
            <p>“Happy Birthday! 🎈 May your day be as bright as your smile and as awesome as you are! Eat lots of cake, enjoy every moment, and make amazing memories!” 🎂🥳</p>
            </div>
            <div className="card3" >
            <p>“Another year, another adventure! May this year bring you new opportunities, exciting experiences, and all the success you deserve. Keep shining and chasing your dreams! Happy Birthday!” ✨🎂</p>
            </div>
            </div>
            <button onClick={()=> {setmode(0)}} >Re-Enter Name</button>
        </div>
    )
}