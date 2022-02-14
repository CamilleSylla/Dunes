import axios from "axios"

function verif (userReservations, monday, sunday) {
    const check = userReservations.filter(book => {

    })
}

function weeks () {
    const today = new Date()
    const day = today.getDay()
     
     const currentMonday = new Date(today.setDate(today.getDate() - day + (day === 0 ? -6 : 1)))
     const currentSunday = new Date(today.getTime() + 60 * 60 *24 * 6 * 1000)
     const nextMonday = new Date(today.setDate(today.getDate() + 7 ))
    const nextSunday = new Date(nextMonday.getTime() + 60 * 60 *24 * 6 * 1000)
    //- day  + (day === 0 ? -6 : 0)))
    const dates = {
        currentWeek :{
            monday : currentMonday.toLocaleString("fr"),
            sunday : currentSunday.toLocaleString("fr")
        },
        nextWeek : {
            monday : new Date(nextMonday).toLocaleString("fr"),
            sunday : new Date(nextSunday).toLocaleString("fr")
        }
    }
    return dates
}

export default async function createReservation (req, res) {

    // let config = {
    //     headers: {
    //       Authorization: `Bearer ${req.headers.authorization}`,
    //     },
    //   };

    // const isLoggedIn = await axios.get("https://localhost:1337/reservations", config)
    // const  {currentWeek, nextWeek} = weeks()
    res.send(weeks())
}