function getDateFromWeek(week, year) {
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    const dayOfWeek = date.getDay();
    const firstDayOfWeek = new Date(date.valueOf() - (dayOfWeek <= 4 ? dayOfWeek * 86400000 : (7 - dayOfWeek + 1) * 86400000));
    return firstDayOfWeek;
}

const convertStrToDate = (dateStr) => {
    const dateSegement = dateStr.split("/");
    let month;
    let day;
    let year;
    let week;
    if(dateSegement.length === 3){
        month = dateSegement[0];
        day = dateSegement[1];
        year = dateSegement[2];
    } else if(dateSegement.length === 2){
        month = dateSegement[0];
        year = dateSegement[1];
    } else if(dateSegement.length === 1){
        if(dateStr.length === 4) {
            year = dateSegement[0];
        } else{
            week = dateSegement[0];
        }
    }
    return new Date(year, month - 1, day);
}