const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Yusuff',
    myMiddleName: 'Olatunji',
    myLasttName: 'Sikiru',
    myHeight: '1.8 m',
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML = '<h2>'+ 'First Name: ' + myInfo.myFirstName + '<br> '  +'Middle Name: ' + myInfo.myMiddleName + ' <br>'  +' Last Name: ' + 
myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> '  +'Country: '+ myInfo.myCountry+ '</h2>';


console.log(myInfo);