let msInDays = 1000 * 60 * 60 * 24;
let adultAge = 18;
const daysInYear = 365;

function getNumbers(string) {
    let resArr = [];

    for (let i=0; i<string.length; i++){
        if (!isNaN(string[i])) {
            resArr.push(string[i]);
        }
    }

    return resArr;
}

function findTypes() {
    let types = {};

    for(let i = 0; i < arguments.length; i++){
        let t = typeof arguments[i];

        console.log(t);
        console.log(types.hasOwnProperty(t))


        if(types.hasOwnProperty(t)) {
            types[t] = types[t] + 1;
        } else {
            types[t] = 1;
        }
    }
    return types;
}

function executeforEach(arr, fn) { 
    let exitArr= []
    for (let i=0; i < arr.length; i++) {
        exitArr.push(fn(arr[i]));      
    }
    return exitArr;
}

function mapArray(arr, fn){
    let mappedArray = []; 
    mappedArray = executeforEach(arr, fn);        
    return mappedArray;   
}

 function filterArray(arr, fn){
    let filteredArray = [];
    let chekarr = [];
    chekarr=executeforEach(arr, fn);

    for (let i=0; i < arr.length; i++) {
        if (chekarr[i]) {
            filteredArray.push(arr[i]);        
        }
    }
    return filteredArray; 
 }

function showFormattedDate(date){
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

     return 'Date: ' + month[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}

function daysBetween(startday, endday) {    
    return Math.round(Math.abs(endday.getTime()-startday.getTime())/msInDays);
}

let dataArray = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]

function getAmountOfAdultPeople (data) {

    let ageArr = [];    
    let date = new Date(Date.now()); 

    for (let i=0; i < data.length; i++) {
        let birthday = new Date(data[i][' birthday ']);
        ageArr.push(daysBetween(birthday, date)/daysInYear);
    }    
    let adultArr = filterArray(ageArr, function(el) {
 return el > adultAge 
});
   return adultArr.length;

}

function keys(obj) {
    let KeyArray = [];
    for (let propName in obj) {
        KeyArray.push(propName);
    }
    return KeyArray;
}

function values(obj) {
    let valueArray = []
    for (let propName in obj) {
      valueArray.push(obj[propName]);
    }
    return valueArray;
}