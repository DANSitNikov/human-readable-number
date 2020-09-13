module.exports = function toReadable (number) {
    let res = number.toString();
    let ten = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    let twenty = {
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
    }
    let hundred = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if (number < 10) {
        return ten[res];
    } else if (number < 20) {
        return twenty[res];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return hundred[res[0]];
        }
        return `${hundred[res[0]]} ${ten[res[1]]}`;
    } else {
        if (number % 100 === 0) {
            return `${ten[res[0]]} hundred`;
        } else if (number % 10 === 0) {
            if (res[1] + res[2] === '10') {
                return `${ten[res[0]]} hundred ${twenty[10]}`;
            }
            return `${ten[res[0]]} hundred ${hundred[res[1]]}`;
        } else if (res[1] === '0') {
            return `${ten[res[0]]} hundred ${ten[res[2]]}`;
        } else if (res[1] === '1') {
            let help = `${res[1]}${res[2]}`;
            console.log(help)
            return `${ten[res[0]]} hundred ${twenty[help]}`
        }
        return `${ten[res[0]]} hundred ${hundred[res[1]]} ${ten[res[2]]}`;
    }
}
