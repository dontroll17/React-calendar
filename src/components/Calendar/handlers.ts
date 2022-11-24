import { MonthList, DaysList } from './enums'

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30]

export const getMonthData = (year: number, month: number) => {
    const res: Array<any> = [];
    const date = new Date(year, month);
    const monthDays = getDaysInMonth(date);
    const start = getDayOfWeek(date);
    const weekDays = 7;
    let day = 1;

    for(let i = 0; i < (monthDays + start) / weekDays; i++) {
        res[i] = [];

        for(let j = 0; j < weekDays; j++) {
            
            if((i === 0 && j < start) || day > monthDays) {   
                res[i][j] = undefined;
            } else {
                res[i][j] = new Date(year, month, day++);
            }
        }
    }
    return res;

}

const getDaysInMonth = (date: Date): number => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if( isLeapYear(year) && month === MonthList.February) {
        return daysInMonth[month] + 1;
    } else {
        return daysInMonth[month];
    }
}

const getDayOfWeek = (date: Date): number => {
    const dayOfWeek = date.getDay();
    if(dayOfWeek === DaysList.Sunday) {
        return DaysList.Saturday
    }

    return dayOfWeek - 1;
}

const isLeapYear = (year: number): boolean => {
    return !(year % 4 || (!(year % 100) && (year % 400)))
}