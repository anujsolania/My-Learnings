
    setInterval(() => {
        console.clear()
        const date = new Date();
    const hr = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
   
    console.log(`${hr}:${min}:${sec}`)

    },1000)


// function print(i,j,k) {
//     setTimeout(() => {
//       console.log(i+":"+j+":"+k)  
//     },(30-i)*1000)
// }


// const a = Date.now()
// setTimeout(() => {
//     const b = Date.now()
//     const c = b - a;
//     console.log("elapsed time: "+ c+ "ms")
// },1000)