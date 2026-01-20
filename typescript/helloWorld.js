var s = "Hello, World!";
console.log(s);
// Example to explain var leyword scope
var petName = "dog";
/*function setPetName():void{
    var petName:string = "cat";
    console.log("Inside Function :: " + petName);
}

setPetName();
console.log("Outside Function :: "+ petName);

var index = 0;
for(var index=0; index<5;index++){
    console.log("Index Inside For Loop :: "+index);
}
console.log("Index Outside For Loop :: "+index);*/
// Example to explain let keyword scope
/*function display(){
    let msg:string = 'Welcome to Ashok IT..!!';
    {
        let msg:string = 'Welcome to Angular..!!';
        console.log("Inside Block :: "+ msg);
    }
    console.log("Outside Block ::"+ msg);
}
display();

let index = 0;
for(let index=0; index<5;index++){
    console.log("Index Inside For Loop :: "+index);
}
console.log("Index Outside For Loop :: "+index);*/
var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
    console.log("Array Element at index " + i + " is :: " + arr[i]);
}
