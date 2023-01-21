module.exports = function toReadable (number) {

    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    let digits = 0
    let tens = 0
    let hundreds = 0
    let accumStr = ''


    if (!number){
        return 'zero'
    }

    underHundred = Math.floor(number % 100 / 10)

      switch (underHundred){
        case 0: {
            digits = number % 10
            break
        }
        case 1: {
            tens = number % 100
            digits = 0
            break
        }
        default: {
            tens = Math.floor(number % 100 / 10) * 10
            digits = number % 10
        }
    }

    hundreds = Math.floor(number / 100)

    if (hundreds > 0) {accumStr += numbers[hundreds] + ' hundred'}
    if (tens > 0) {
        if (!hundreds){
            accumStr = accumStr + numbers[tens]
        } else {accumStr = accumStr + ' ' + numbers[tens]}
    }
    if (digits > 0) {
        if (!hundreds && !tens){
            accumStr = accumStr + numbers[digits]
        } else {
            accumStr = accumStr + ' ' + numbers[digits]}
        }

    
    //console.log(number, hundreds, tens, digits, accumStr)

    return accumStr


}


/*  toReadable (954)
toReadable (914)
toReadable (904)
toReadable (14)
toReadable (0)
toReadable (25)
toReadable (1)
toReadable (3)

toReadable (997)
toReadable (21) */

