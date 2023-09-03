// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 1
    /* return str.split('').reverse().join(''); */
    
    // 2
    /* if (!str) return str;
    let rts = "";
    for (let i = 0, len = str.length - 1; i < len; i++) {
        rts += str[len - i];
    }
    return rts; */

    // 3
    /* if (!str) return str;
    let rts = '';
    for (let char of str) {
        rts = char + rts;
    }
    return rts; */

    // 4
    /* if (!str) return str;
    for (let i = 0, len = str.length - 1; i < len; i++, len--) {
        const temp = str[i];
        str[i] = str[len - i];
        str[len - i] = temp;
    }
    return str; */

    // 5
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '')

    // 6
    /* const arr = str.split('');
    let len = arr.length - 1;
    console.log('arr============', arr);
    for (let i = 0; i < len; i++, len--) {
        const temp = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = temp;
    }
    console.log('rev arr============', arr);
    return arr.join(''); */
}

reverse('asdf');

module.exports = reverse;
