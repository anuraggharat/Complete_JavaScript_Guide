//convert 12Hr time format to 24hr time format
//12:00 PM -> 12
//12:00 AM -> 0
function convert(t='12:00 PM'){
    let [time,day] = t.split(' ')
    let [hrs,mins] = time.split(':')
    if (day === 'AM') {
        hrs = hrs === '12' ? "0" : hrs
    }else{
        hrs = hrs === '12' ? hrs : (parseInt(hrs) + 12).toString()
    }
    return `${hrs}:${mins}`

}

console.log(convert('12:10 AM'))
console.log(convert('12:30 PM'))
console.log(convert('2:20 PM'))
console.log(convert('7:30 AM'))
console.log(convert('10:30 PM'))
