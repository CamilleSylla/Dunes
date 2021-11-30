export function getWeekDays(locale)
{
    var baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
    var weekDays = [];
    for(let i = 0; i < 7; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    return weekDays;
}

export function organisePlanningsSpotVue(data, days) {
    const result = []

    days.map(el => {
        const filterByDayAndSort = data.filter(training => training.day.toLowerCase() === el).sort((a, b) => (a.start > b.start ) ? 1 : -1)
        result.push({[el] : filterByDayAndSort})
    });
    return result
}