'use strict'
const userChoose = prompt('Choose a mathematical action (add, sub, mult, div) : ');
if (userChoose === 'add' || userChoose === 'sub' || userChoose === 'mult' || userChoose === 'div'){
    const a = +prompt('Enter any number:');
    const b = +prompt('Enter second number:');
    if (userChoose === 'add'){
        const result = a+b;
        alert(a + ' + ' + b + ' = ' + result)
    }
    else if (userChoose === 'sub'){
        const result = a-b;
        alert(a + ' - ' + b + ' = ' + result)
    }
    else if (userChoose === 'mult'){
        const result = a*b;
        alert(a + ' * ' + b + ' = ' + result)
    }
    else if (userChoose === 'div'){
        const result = a/b;
        alert(a + ' / ' + b + ' = ' + result)
    }
}
else {
    alert('Error! Choose right action');
}


