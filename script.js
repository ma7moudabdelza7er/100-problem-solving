console.log("############# p2");
// let arr=[1,2,3,-1,-5,-6,4,-4,7,3];
// function sum(){
//     result=0;
//     for(let i=0; i<arr.length;i++){
//         console.log(arr[i]);
//         if(arr[i] >= 0){
//             result = result +arr[i];
//         }
//     }
//     return result;
// }
// console.log(sum());
// // another way
// console.log("#######");
// let check=arr.filter(function(e){
//         return e>=0;
// })
// .reduce(function(ac,cu){
//     return ac + cu;

// })
// console.log(check);
// // another way

// function sum1(){
//     return arr.filter(function(e){
//         return e>0;
//     })
//     .reduce(function(acc,curr){
//         return acc + curr;
//     });
// }
// console.log(sum1());
console.log("##################### p3");
// let arr=[1,2,3,4,16,17,15,10];
// let del=arr.filter(function(e){
//     return e!==Math.max(...arr)&&e!==Math.min(...arr);
// }).reduce(function(acc,cu){
//     return acc + cu;
// })
// console.log(del);
// function del(){
//     return arr.sort(function(a,b){
//         return a-b;
//     })
//     // repeat sort #######################
//     .slice(1,-1)
//     // repeat slice #####################
//     .reduce(function(acc,cur){
//         return acc + cur;
//     })

// }
// console.log(del());


console.log("########p4");

// function rep(n,s){
    // str='';
    // for(let i=1;i<=n;i++){
    //     str = str + s;
    
    // } ####################### repeat
    // return s.repeat(n);
// }
// console.log(rep(6,"#1"));
// console.log("#################p5");
// let arr1=Array.from("348597",function(e){
//     return +e;
// })
// console.log(arr1);
// console.log(arr1.reverse());

// another way

// function pus(){

//     let re =Array.from(arguments);
//     return re.reverse();
// }
// console.log(pus(1,2,3,4,5));
// // another way
// function digits(n){
//     return n.toString().split("").map(function(e){
//         return Number(e);
//     }).reverse();
    
// // repeat #######################################
// }
// console.log(digits(123789));

console.log("#########################p6");
// function countsheep(arr){
// let x=1;
// for(i=1;i<arr.length;i++){
//     if(arr[i]===true){
//         x++;
//     }
// }
// return x;

// }
// console.log(countsheep([true,true,true,false,false,false,true,true,false,true,true,true]));
console.log("##################################p7");
// arr=[1,2,3,-7,-8,-9];
// let opsite=arr.map(function(e){
//     return -e;
// })
// console.log(opsite);
console.log("#########################p8");
// function nagitve(num){
//     if(num <=0){
//         return num;
//     }else{
//         return -num;
//     }
// }
// console.log(nagitve(0));
console.log("################## p9");
// function great(name){
//     if(name === "johnny"){
//         return "hello, My love!";
//     }  
//     return "Hello, " + name + "!";
    

// }
// console.log(great("johnny"));
// console.log("################## p10");
// function Find(arr){
//     let str= ` the position of needle is ${arr.indexOf("needle")}`;
//     let str1=` the needle is exist`
//   return `${str1} ${str}`;

//   console.log("############################# repeat");
// }
// console.log(Find(["mahmoud","mohmed","ibrahim","needle","gamal"]));
// function found1(arr1){
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i] == "needle"){
        
//             return "found the needle at position " + i; 
//         }

//     }
// console.log("################################ repeat");

// }
// console.log(found1(["mahmoud","needle","ibrahim","gomaa"]));
console.log("################## p11");
// let arr=[1,2,3,4,5,6,7,8,,9,-10,-20,-30,-40,-50,-60,-90,-100];

// let ch=arr.reduce(function(){

//     let co=0;
//     let result=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > 0 ){
//             co++;
//         }else if(arr[i] < 0){
//             result+=arr[i];
            
//         }
//     }

//     return [result,co];

// })
// // ch.push(newar);
//     // newar.push(result);

// console.log(ch);

console.log("################ p12");

// function doublechar(str){
// return str.split("").map(function(el){
//         return el+el;
//     }).join("")

// }
// console.log(doublechar("Mahmoud123MM"));
console.log("################# p13");
// function base(op,v1,v2){
//     if(op == "+"){
//         return v1 + v2;
//     }else if(op == "-"){
//         return v1 - v2;

//     }else if(op == "/"){
//         return v1 / v2;

//     }else if(op == "*"){
//         return v1 * v2;

//     }
// }
// console.log(base("/",10,10));
// function ev(op,v1,v2){
//     return eval(`${v1}${op}${v2}`);

// }
// console.log(ev("*",1,9));
// function ev1(op1,v11,v22){
//     return eval(v11+op1+v22);

// }
// console.log(ev1("-",1,9));
console.log("##################### p14");
// function sq(ar1){
//     let newar=[];
//     for(let i=0;i<ar1.length;i++){
//         if(Number.isInteger(Math.sqrt(ar1[i]))){
//             newar.push(Math.sqrt(ar1[i]));

//         }else{
//             newar.push(ar1[i] * ar1[i]);
//         }

//     }

    // return newar;
    // console.log("###########################repeat")


// }
// console.log(sq([4 , 3, 9, 7, 2, 1]));
// console.log("Another way##################");
// arrr=[4,3,9,7,2,1];
// let ch=arrr.map(function(el){
//     if(Number.isInteger(Math.sqrt(el))){

//         return Math.sqrt(el);
//     }else{
//         return el * el;
//     }
// })
// console.log(ch);
console.log("#################### 15");
// function CountBy(x,n){
//     let z=[];
//     for(let i=n;i>0;i--){
//         z.push(x*i);
//     }


//     return z;

// }
// console.log(CountBy(2,5));
// [2,4,6,8,10];
console.log("###################### 16");
// function removeStr(str){
// // return str.split(" ").filter(function(el){
// //         return el != "";
// //     }).join("")
// return str.split(" ").join("");
// // return str.trim("  ");


// }
// console.log(removeStr(" M a h m o u d   Mohmed      Mahmoud "));

// str="  Mahmoud    Mohmed  Mahmoud  ";
// console.log(str.split(""));
console.log("#######################17");

// function con(num1){
//     let ar=[];
//     for(let i=0;i<num1.length;i++){
//         if(num1[i] > 0){
//             ar.push(-num1[i]);

//         }else if(num1[i]<0){
//             ar.push(-num1[i]);
//         }
//     }
//     return ar;
   
// }
// console.log(con([1,2,3,-4,-5,-6]));
// function convertt(arc){
//     return arc.map(function(el){
//         return -el;
//     })
// }
// console.log(convertt([7,8,9,-1,-2,-3]));

// console.log("#########################18");
// function check(bool){
//     if(bool == true){
//         return 'yes';
//     }else{
//         return 'no';
//     }
// }
// console.log(check(false));
console.log("##################p19");
// function rservee(str){
//     return str.split(" ").reverse().join(" ");

// }
// console.log(rservee("Hi There."));
// console.log("###################p20");
// function litters(time){
    
//     return Math.floor(time * 0.5);
// }
// console.log(litters(11));
console.log("#################p21");
// function ConvertToStr(num){
//     return `${num}`;
// }
// console.log(typeof(ConvertToStr(123)));
console.log("###################p22");
// function find_average(arr){

//     let reslut=0;
//     let x=0;
//     for(let i=0;i<arr.length;i++){
//         reslut =(reslut+ arr[i]);
//         x++;
//     }
//     return reslut/x;

// }
// console.log(find_average([10,20,30,30,10,20]));
// function re(ar1){
//     let y=1;
//     ar1.reduce(function(ac,cur){
//         y++;
//         return sum= ac + cur;
//     })
//     return sum/y;

// }
// console.log(re([5,5,5,5,5]));
console.log("##################### p23");
// function convert(str){
//     return Number(str);
// }
// console.log(convert("123"));
console.log("##################### p24");
// function monkey(n){
//     let z=[];
//     for(let i=n;i>0;i--){
//         z.unshift(i);


//     }
//     return z;

// }
// console.log(monkey(15));
console.log("########################p25");
// function greet(language){

//     let languages={
//     english: 'welcome', 
//     czech: 'vitejte', 
//     french:'Biennvenue',
//     welsh: "croeso",
//     };
//     if(languages.hasOwnProperty(language)){
//         return languages[language];

//     }else{
//         return "not found";
//     }
// }
// console.log(greet("welsh"));
// console.log("####################### repeat");
console.log("################################ p26");
// function smash(words){
//     return words.join(" ");

// }
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log("########################### p27");
// function SwitchItup(number){
//     switch(number){
//         case 0 :
//         console.log("Zero");
//         break;
//         case 1 :
//         console.log("one");
//         break;
//         case 2 :
//         console.log("two");
//         break;
//         case 3 :
//         console.log("three");
//         break;
//         case 4 :
//         console.log("four");
//         break;
//         case 5 :
//         console.log("five");
//         break;
//         case 6 :
//         console.log("six");
//         break;
//         case 7 :
//         console.log("seven");
//         break;
//         case 8 :
//         console.log("eight");
//         break;
//         case 9 :
//         console.log("nine");
//         break;
//         default:
//             console.log("not found");

//     }
// }
// SwitchItup(15);
console.log("######################## p28");
// function bounsTime(salary,bonus){
//   return  bonus == true ? `${salary * 10} $`: salary;
// }
// console.log(bounsTime(100,true));
console.log("##################### p29");
// function remove(str){
//   return str.replace(/!$/,"");
//   console.log("####################### repeat");
// }
// console.log(remove("!Hi!! !hi! hi!"));

// console.log("another way");
// function re(st){

//     return st.replaceAll("!","");
// }
// console.log(re("!h!i! !hi! !hi!"))
console.log("#################### p30");
// function arePlaying(name){
//   let re=/r\w+/ig;
// let result= re.test(name);
// if(result == true){
//     return name + " playing banjo";
// }else{
//     return name + " not playing banjo";
// }

// }
// // console.log("###################### repeat");
// console.log(arePlaying("Mahmoud"));
// function arePlaying(name){
//     if(name.startsWith("R") || name.startsWith("r")){
//         return name + " playing banjo";
//     }else{
//         return name + " not playing banjo";
//     }
// }
// console.log(arePlaying("Mahmoud"));
console.log("######################## 31");
// function removee(arr){
//    return  arr.filter(function(el){
//         return el !="remove";
//     })
//     // return arr;
// }
// console.log(removee(["Keep","remove","keep","remove","Keep","remove"]));
// function rem(arr){
//     let z=[];
//     for(i=0;i<arr.length;i++){
//         if(i % 2 == 0){
//             z.push(arr[i]);
//         }
//     }
//     console.log("############################ repeat");
    
//     return z;
// }
// console.log(rem(["Keep","remove","keep","remove","Keep","remove"]));
console.log("############################ p32");
// function createArray(number){
//     var newArray=[];
//     for(var counter=1;counter<=number;Number++){
//         newArray.push(counter);
//     }
//     return newArray;
// }
// console.log(createArray(5));
console.log("########################### p33");
// function average(d){
//     if(d>=7){
//         return (40*d)-50;
//     }else if(d>=3){
//         return (40*d)-20;

//     }else{
//         return 40 * d;
//     }
// }
// console.log(average(7));
console.log("################################## p34");
// function XOR(a,b){
//     if(a== true && b==true){
//         return false;
//     }else if(a== false && b==false){
//         return false;
//     }else if(a == true && b == false){
//         return true;
//     }else if(a == false && b == true){
//         return true;
//     }
// }
// console.log(XOR(true,true));
console.log("######################### p35");
// function compareNum(arr){
//     let x=arr[0];
//     if(arr[0]>0){
//     for(let i=1;i<arr.length;i++){
//         x++;
//         if(x == arr[i]){
//             return null;
//         }else if(x != arr[i]){
//             return `${x}`;
//     }
// }
// }else if(arr[0]<0){
//     for(let i=1;i<arr.length;i++){
//         x--;
//         if(x == arr[i]){
//             return null;
//         }else if(x != arr[i]){
//             return `${x}` ;

//         }
// }
// }
// }
// console.log(compareNum([-11,-12,-13,-14,-15,-16,-17,-18,-20,-22]));
console.log("######################## 36");
// class kata{
//     static  getVolum(length,width,height){
//         return length*height*width;
//     }
console.log("########################## repeat");
// }
// console.log(kata.getVolum(10,10,10));
// console.log("##################### p37");
// function decimal(n){
//     return 55.509.toFixed(2);

// }
// console.log(decimal(5.5589));
// console.log(55.567.toFixed(2));
console.log("#########################38");
// function FormatMoney(amount){
//     let re = `$${amount.toFixed(2)}`;
//     // return ` $${re}0` ; 
//     return re;

// }
// console.log(FormatMoney(3.5));
console.log("#######################39");
//  arr=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
//  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// function position(L){
// // for(let i=1;i<=arr.length;i++){

// // }
// return arr.indexOf(L) + 1;
// }
// console.log(position("a"));
console.log("##########################40");
// function love(fl1,fl2){
//     if(fl1 % 2 ==0 && fl2 % 2 !=0){
//         return "both love them";
//     }else if(fl2 % 2 ==0 && fl1 % 2 !=0){
//         return "both love them";
//     }else if(fl1 % 2 ==0 && fl2 % 2 ==0){
//         return " both are not love them";
        
//     }else if(fl1 % 2 !=0 && fl2 % 2 !=0){
        
//         return " both are not love them";
//     }

// }
// console.log(love(7,8));
console.log("#####################################41");
// function noneofZeros(n){
//   let str=String(n);
//   while(str.endsWith("0")){
//     str.slice(0,-1);
//   }
//   return str;
// console.log("#############################repeat");
// }
// console.log(noneofZeros(906000));
console.log("######################################42");
// function average(marks){
//     let result=0;
//     for(let i=0;i < marks.length;i++){
//         result+=marks[i];
//     }
//     let re= result/marks.length;
//     return Math.round(re);

// }
// console.log(average([50.9,60.5,70,80,90,100]));
console.log("############################43");
// function cut(str){

//     return str.replaceAll(/[eo]/ig,"");
// }
// console.log(cut("heelloo"));
// console.log("########################repeat");
console.log("#################################44");
// function removeMark(str){

    
//     return str.replace(/!/g,"");
// }
// console.log(removeMark("hello w!or!ld!!!!"));
console.log("#########################45");
// function re(str){
//     // return str.split("").reverse().join("");
//     let st;
//     for(let i=str.length;i>1;i--){
//          st+= str[i];
//          // return st;
//         }
//         return st;
// console.log("############################## repeat");
// }
// console.log(re("Mahmoud"));
console.log("#################################46");
// function grow(x){

//     let result=1;
//     for(let i=0;i<x.length;i++){
//         result *=x[i];
//     }
//     return result;
// }
// console.log(grow([1,2,3,4,5]));
// function red(arr){
//    return  arr.reduce(function(acc,cur){
//         return acc * cur;
//     })
// }
// console.log(red([1,2,3,4,5]));
console.log("########################47");
// function palindrome(x){
//     let re= x.toLowerCase().split("").reverse().join("");
//     if(x.toLowerCase() == re){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome("Madam"));
console.log("######################48");
// var summation =function (num){
//    let result=0;
//    let i=0;
//     while(i <= num){
//         result +=i;
//         i++;
//     }
//     return result;
// }
// console.log(summation(8));
// function  sum(num){
// return Array(num).fill(true).reduce(function(ac,cu,i){
//     console.log("########");
//     console.log(` acc is ${ac}`);
//     console.log (`index is ${i}`);
//     return ac + (i + 1);
//     console.log("#############################repeat");
// });
// }
// console.log(sum(8));
console.log("###########################49");
// function str(ar){
//     let re= ar.join(",");
//     return ;

// }
// console.log(str(["h","o","l","a"]));
console.log("#########################50repeat");

console.log("################################51");
// function removechar(str){

//     let ar=str.split("");
//     ar[0]="";
//     ar[ar.length-1]="";
//     return ar.join("");
// }
// console.log(removechar("ahmed"));
// function rechar(str){

//     return str.split("").slice(1,-1).join("");
// }
// console.log(rechar("goma"));
console.log("###########################52");
// function square(num){

//     // let re=0;
//     let mul=0;
//     for(let i=0;i<num.length;i++){
//         mul +=num[i] ** 2;
//     }
//     return mul;
// }
// console.log(square([1,2,2]));
console.log("##############################53");
// function manimum(arr){
//     return Math.min(...arr);
// }
// console.log(manimum([1,2,3,4,5,-9,-8]));
// function min(ar){
//     return ar.reduce(function(ac,cr){
//         return ac < cr ? ac:cr;
//     });
// }
// console.log(min([1,2,3,4,5,-9,-8]));
console.log("#########################54");
// function issdivide(n,x,y){
//     let re = n/x;
//     let res= n / y;
//     // return Number.isInteger(res);
//     if(Number.isInteger(re) && Number.isInteger(res)){
//         return `is  divide by ${x} and ${y}`;
//     }else if(!Number.isInteger(re)){
//         return `is not divide by ${x}`;
//     }else if(!Number.isInteger(res)){
//         return `is not divide by ${y}`;
//     }
// }
// console.log(issdivide(12,4,7));
console.log("##################################55");
// function mapss(x){
    // return x.map(function(e){
        // return e + e;
    // });
// }
// console.log(mapss([1,2,3]));
console.log("########################56");
// function convert(x){

//     let re=x.split("");
//    return re.map(function(e){
//     return e > 4 ? 1:0;

//    }).join("");
// }
// console.log(convert("123567"))
console.log("#############################57");
// function sum(numbers){
//     let re=0;
//     for(let i=0;i<numbers.length;i++){
//         re +=numbers[i];
//     }
//     return re;
// }
// console.log(sum([]));
console.log("#################################58");
// function simpleMulti(number){

    // if(number % 2 ==0){
        // return number * 8;
    // }else{
        // return number * 9;
    // }
// }
// console.log(simpleMulti(9));
console.log("##############################59");
// function makeUpperCase(str){
//     return str.toUpperCase();

// }
// console.log(makeUpperCase("mahmoud"));
console.log("########################60");
// function con(arr1,arr2){
//     let re=arr1.concat(arr2);

//     return re.reduce(function(ac,cu){
//         return ac + cu;

//     });
// }
// console.log(con([1,2,3,4,5],[4,3,2,1,0]));
console.log("##############################61");
// function sumMix(x){
// 
    // return x.reduce(function(ac,cu){
        // return ac + parseInt(cu);
    // },0);
// }
// console.log(sumMix(["3",9,3,"7","3"]));
console.log("###############################62");
// function feast(beast,dish){
//     if(beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1)){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(feast("brown beaw","xear claw"));
console.log("############################63");
// function updatelight(current){
// let arr=["green","yellow","red"];
// if(current == "green"){
//     return arr[1];
// }else if(current == "yellow"){
//     return arr[2];
// }else if(current == "red"){
//     return arr[0];
// }
// }
// console.log(updatelight("yellow"));
// console.log("#######################repeat");
// function light(li){
//     switch(li){
//         case "green":
//             console.log("yellow");
//             break;

//             case "yellow":
//                 console.log("red");
//                 break;

//                 case "red":
//                     console.log("green");
//                     break;
//     }
// }
// light("red");
console.log("##############################64");
// function setAlarm(employed,vaction){
//     if(employed == true && vaction == false){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(setAlarm(true,false));
console.log("##########################65");
// function quaterOf(month){

//     if(month == "jan" ||month=="feb" ||month=="mar"){
//         return "in the 1";
//     }else if(month == "apr" ||month=="may" ||month=="jun"){
//         return "in the 2";
//     }else if(month == "jul" ||month=="aug" ||month=="sep"){
//         return "in the 3";
//     }else if(month == "oct" ||month =="nov" ||month == "dec"){
//         return "in the 4";

//     }
// }
// console.log(quaterOf("mar"));
console.log("###############################66");
// function addlength(str){
//     return re=str.split(" ").map(function(el){
//         return el + " " + el.length;
//     })

// }
// console.log(addlength("apple ban"));
// console.log("############################repeat");
console.log("####################################67");
// function howmany(name){

//     if(name == "Zach"){
//         return 18;
//     }else{
//         return 0;
//     }
// }
// console.log(howmany());
console.log("##########################68");
// function years(dad,son){

//     return  (son*2) - dad;
// }
// console.log(years(55,30));
console.log("###############################69");
// function hoopCount(n){
//     if(n <= 10){
//         return "keep at it untill you get it";
//     }else{
//         return "great, now move on to tricks";
//     }
// }
// console.log(hoopCount(10));
console.log("######################################70");
// function correct(str){
//     let ar=str.split("");
//     for(let i=0;i<ar.length;i++){
//         if(ar[i] == "S"){
//             ar[i]=5;
//         }else if(ar[i] == "O"){
//             ar[i]=0;
//         }else if(ar[i] == "I"){
//             ar[i]=1;
//         }
//     }
//     return ar.join("");
// }
// console.log(correct("LONDON"));
// function rep(str){
//     return str.replace(/O/ig,0).replace(/S/ig,5).replace(/I/ig,1);
// }
// console.log(rep(""));
console.log("###############################71");
// function average(classP,yourP){

//     let result=0;
//     for(let i=0; i<classP.length;i++){
//         result +=classP[i] / classP.length;
//     }
//     if(result<yourP){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(average([12,23,34,45,56,67,78,89,90],9));
console.log("###################################72");
// function reversWord(str){
//     return str.split(" ").reverse().join(" ");
// }
// console.log(reversWord("hello world!"));
console.log("##############################73");
// function average(weight,height){
//     bmi= weight / height**2;
//     if(bmi <= 18.5){
//         return "underweight";
//     }else if(bmi <= 25.0){
//         return "normal";
//     }else if(bmi <= 30.0){
//         return "overweight";
//     }else if(bmi > 30){
//         return "obese";
//     }
// }
// console.log(average(80,1.80));
console.log("##############################74");
// function divi(numbers,divisor){

//     return numbers.filter(function(e){
//         return e % divisor ==0;
//     })
// }
// console.log(divi([1,2,3,4,5,6],2));
console.log("####################################75");
// function powers(n){
//     let ar=[];
//     for(let i=0;i <= n;i++){
//         ar.push(2**i);
//     }
//     return ar;
// }
// console.log(powers(5));
console.log("###############################76");
// function sumStr(a,b){

//     let re =parseInt(a) + parseInt(b);
//     return String(re);
// }
// console.log(sumStr("5","4"));
console.log("#################################77");
// function twoSort(s){
//     return s.sort().slice(0,1).join("").split("").map(function(e){
//         return e + "***";
//     }).join("");
    
//     console.log("################################repeat");
// }
// console.log(twoSort(["bitcoin","take","over","the","world","maybe","who","knows"]));
console.log("###################################78");
// function expression(a,b,c){
//     let re= a+b;
//     let re1=a+c;
//     let re2=c+b;
//     if(re < re1 && re < re2 ){
//         return re * c;
//     }else if(re1 < re2 && re1<re){
//         return re1 * b;
//     }else if(re2 < re1 && re2 < re){
//         return re2 * a;
//     }else(){
//         return 
//     }
// }
// console.log(expression(2,1,2));
// console.log("#################################repeat");
console.log("################################79");
// function even(n){
//     return n % 2 == 0 ? true:false;
// }
// console.log(even(9));
console.log("###################################80");
// function goosefilter(birds){
//     var geese=["African","Roman Tufted","Pilgrim","Steinbacher"];
//     return birds.filter(function(e,i){
//         return e != geese[i];
//     })
// }
// console.log(goosefilter(["African","Roman Tufted","Pilgrim","Toulouse","Steinbacher"]));
console.log("###################################81");
// function between(a,b){
//     let arr=[];
//     if(a<b){
//         for(let i=a;i<=b;i++){
//             arr.push(i);
//         }
//         }else if(b<a){
//             for(let i=b;i<=a;i++){
//                 arr.push(i);
//             }
//         }
//         return arr;

//     }
// console.log(between(-2,2));
console.log("##############################82");
// function sayHello(name){
//     return ` hello ${name}`;
// }
// console.log(sayHello("Mahmoud"));
console.log("###############################83");
// function move(p,r){
//     return p + (r*2);


// }
// console.log(move(2,5));
console.log("############################84");

// function index(arr,n){
//     let re=0;
//     for(let i=0;i<arr.length;i++){
//         re=arr[n]**n;
//     }
    

//     return arr.length-1<n ?-1:re;

// }
// console.log(index([1,3,10,100],5));
console.log("#######################################85");
// function goal(laliga,copa,champions){
//     return laliga + copa + champions;
// }
// console.log(goal(2,5,10));
console.log("####################################86");
// function stringy(size){
// let arr=["1","0"];
// return  arr.join("").repeat(size).split("").slice(0,size).join("");

// }
// console.log(stringy(3));
// console.log("##################################87");
// function findMultiple(int,limit){
// let arr=[];
// for(let i=int;i<=limit;i+=int){
//     arr.push(i);
// }
// return arr;
// }
// console.log(findMultiple(2,6));
console.log("##############################88");
// function distinct(n){

//      re= new Set(n);
//      return [...re];
// }
// console.log(distinct([1,1,1,2,3]));
console.log("#############################89");
// function sumMul(n,m){

//     let result=0;
//     for(let i=n;i<=m;i+=n){
//         result +=i;
//     }
//     // if(m<0){
//     //     return "invalid";
//     // }
//     return m<0?"invalid":result;

// }
// console.log(sumMul(4,-7));
console.log("#########################################90");
// function billboard(name,price=30){
//     let re = name.length;
//     let finalprice=0;
//     for(let i=0;i<=re-1;i++){
//         finalprice +=price;
//     }
//     return finalprice;
// }
// console.log(billboard("mahmoud"));
// console.log("###############################repeat");
console.log("########################################91");
// function sayhello(name,city,state){

//     return "Hello, " + name.join(" ") + "! " + `welcome to ${city}, ${state}`;
// }
// console.log(sayhello(['john','smith'],"phoenix","Arizona"));
console.log("#####################################93");
// function pipeFix(numbers){

//     let arr=[];
//     // let f=numbers.length;
//     // let ff= numbers[f-1];
//     for(let i=numbers[0];i<=numbers[numbers.length-1];i++){
//         arr.push(i);
//     }
//     // console.log(ff);
//     return arr;
// }
// console.log(pipeFix([1,3,4,5,6,9]));
console.log("##########################################Kate7");
console.log("############################kate7--1");
// function getcount(str){
//     let x=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i] == "a" || str[i] == "o" || str[i] == "e" || str[i] == "i" || str[i] == "u"){
//         x++;
//     }
// }
// return x;

// }
// console.log(getcount("amhmoudi"));
// function count(word){
//     let re=/(a|e|i|o|u)/ig;
//     char= word.match(re);
//     return char.length;
    
// }
// console.log(count("mahmoud"))
console.log("############################kate7--2");
// function highANDlow(str){
//     big= Math.max(...str.split(" "));
//     low=Math.min(...str.split(" "));
//     return `${big} ${low}`;
// }
// console.log(highANDlow("1 2 3 4 5 9"));
// function bl(str){
//     return str.split(" ").reduce(function(acc,cu){
//         return acc<cu? acc:cu;
//     })
// }
// console.log(highANDlow("1 2 3 4 5 8"));
console.log("############################kate7--3");
// function squer(num){
// return String(num).split("").map(function(el){
//     return el**2;
// }).join("")

// }
// console.log(squer(9119));
console.log("############################kate7--4");
// function descending(n){

//     return Number(n.toString().split("").sort().reverse().join(""));
// }
// console.log(descending(123459));
console.log("############################kate7--5");
// function getmiddle(s){
    
//     // for(let i=0;i<s.length;i++){
//         if(s.length % 2 ==0){
//             return s.split("").slice((s.length/2) -1,(s.length/2) +1).join("");
//         }else{
//             return s.split("").slice(Math.floor(s.length/2),Math.ceil(s.length/2)).join("");
//         }
//     }
//     // }
//     console.log(getmiddle("Mahmoud"));
//     console.log("################################repeate");
console.log("############################kate7--6");
// function accom(s){
    //     f=[];
    //     u=s.toUpperCase();
    // for(let i=0;i<s.length;i++){
        //     f.push(s[i].repeat(i));
        // }
        // return u.split("").concat(f).sort((a,b)=>a-b).join("");
        // }
        // console.log(accom("abcd"));
        console.log("###########################repeat");
        console.log("############################kate7--7");
        // function isSquare(x){
            //     if(Number.isInteger(Math.sqrt(x))){
        //         return true;
        //     }else{
        //         return false;
        //     }
        //     // return Math.sqrt(x);            
        // }
         // console.log(isSquare(27));
console.log("############################kate7--8");

// function filter_number(s){
//     return s.filter(function(el){
//         return Number.isInteger(el);
//     })
// }
// console.log(filter_number([1,2,3,"A","B","C",5]));
console.log("############################kate7--9");
// function isIsogram(str){
//     return new Set(str.split("")).size === str.length
// }
// console.log(isIsogram("aba"));
// console.log("###################################repeat");
console.log("############################kate7--10");
// function Xor(str){
    
//     // re1= str.split("x").join("");
//     //  re2=str.split("o").join("");
//     //  if(re1.length === re2.length){
//         //     return true;
//         //  }else{
//             //     return false;
//             //  }
//             re=/o/ig;
//             re1=/x/ig;
//             return str.match(/x/ig).length === str.match(/o/ig).length;
//         }
//         console.log(Xor("oooooxxxxx"));
console.log("############################kate7--11");
// function shorter(str){
    //     return str.split(" ").reduce(function(acc,cur){
        //         return acc.length<cur.length?acc:cur;
        //     }).length
        
        // }
        // console.log(shorter("mahmoud mohmad mahmoud abdelzaher is develober"));
console.log("############################kate7--12");
function convert(str){
   return str.split(" ").map(function(el){
    return el[0].toUpperCase() + el.slice(1);
   })
}
console.log(convert("mahmoud mohmed mahmoud abdelzaher abdellah"));