import axios from "axios"

export function getWeekDays(locale, currentWeek)
{
    const formattedDays = currentWeek.map(day => {
        const newDay = {
            day_long : new Date(day).toLocaleDateString(locale, { weekday: 'long' }),
            day_date : new Date(day).toLocaleDateString('fr'),
            full_date : day
        }
        return newDay
    })
    return formattedDays
    // for(let i = 0; i < 7; i++)
    // {   
    //     weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
    //     baseDate.setDate(baseDate.getDate() + 1);       
    // }
    // return weekDays;
}

export function organisePlanningsSpotVue(data, days) {
    const result = []

    days.map(day => {
        const filterByDayAndSort = data.filter(training => training.day.toLowerCase() === day.day_long).sort((a, b) => (a.start > b.start ) ? 1 : -1)
        result.push({trainings : filterByDayAndSort, full_date: day.full_date,day : day.day_long, date : day.day_date})
    });
    return result
}

 