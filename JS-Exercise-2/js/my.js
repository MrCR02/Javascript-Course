//-------------------Question 1-------------------------------
function question1(){
    let static_array = [0,1,2,3,4,5,6,7,8,9];
    let n = prompt("Q1: Enter number of elements to get 1st and last from array:", '');
    document.getElementById("q1").innerHTML=`Array:${static_array}<br>Output:<br>first ${n} elements:${static_array.slice(0,n)}<br>last ${n} elements:${static_array.slice(static_array.length-n,static_array.length)}`;
}

//-------------------Question 2 -------------------------------

function question2(){
    let n2 = prompt("Q2: Enter a number to add '-' between them:", '');
    let str = n2.toString();
    let result = [str[0]];

    for(let i = 1; i < str.length; i++)
    {
        if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
        {
            result.push('-', str[i]);
        }
        else
        {
            result.push(str[i]);
        }
    }
    document.getElementById("q2").innerHTML=`${result.join('')}`;
}

//-------------------Question 3 -------------------------------
function question3(){
    let static_array2 = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
    let max = 1;
    let cnt = 0;
    let item;
    for (let i=0; i<static_array2.length; i++)
    {
        for (let j=i; j<static_array2.length; j++)
        {
            if (static_array2[i] == static_array2[j])
            cnt++;
            if (max<cnt)
            {
                max=cnt; 
                item = static_array2[i];
            }
        }
        cnt=0;
    }
    document.getElementById("q3").innerHTML=`Array:&nbsp${static_array2}<br>${item} appeared for ${max} times`;
}

//-------------------Question 4 -------------------------------
function question4(){
    let arr = [1, 2, 3, 4, 5,6];
    document.getElementById("q4").innerHTML=`Array:&nbsp${arr}<br>`;
    for (let i = arr.length - 1; i > 0; i--) {  
        let j = Math.floor(Math.random() * (i + 1));         
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }
    document.getElementById("q4").innerHTML=`Before shuffeling: [1, 2, 3, 4, 5,6]<br>After shuffeling:&nbsp${arr}<br>`;
}

//-------------------Question 5 -------------------------------
function question5(){
    let a = [0,1,2,3];
    let b = [3,4,5];
    let union = [...new Set([...a,...b])];
    let intersection = a.filter(n => b.includes(n));
    let a_b = a.filter(n => !b.includes(n));
    let b_a = b.filter(n => !a.includes(n));
    document.getElementById("q5").innerHTML=`array A: ${a}<br>array B: ${b}<br>Union: ${union}<br>Intersection: ${intersection}<br>a-b: ${a_b}<br>b-a: ${b_a}<br>`;

}

//-------------------Question 6 -------------------------------
function question6(){
    let static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
    let b = +prompt("Enter a number to bound an array:", '');
    let result = [];
    for(let i = 0 ; i < static_array.length ; i++){
        if(i%b == 0){
            result.push(static_array[i]);
        }
    }
    document.getElementById("q6").innerHTML=`Input: ${static_array}<br>Output:${result}`;
}

//-------------------Question 7 -------------------------------
function question7(){
    let getName = function(date){
        months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return months[date.getMonth()];
    };
    let temp1 = ("01/07/2020").split('/'); 
    let date1 = temp1[1]+'/'+temp1[0]+'/'+temp1[2];
    document.getElementById("q7").innerHTML=`Input:01/07/2020<br>${getName(new Date(date1))}`;
}

//-------------------Question 8 -------------------------------
function question8(){
    let temp1 = ("01/07/2018").split('/');
    let date1 = temp1[1]+'/'+temp1[0]+'/'+temp1[2];
    let temp2 = ("03/05/2020").split('/');
    let date2 = temp2[1]+'/'+temp2[0]+'/'+temp2[2];
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diff = d2 - d1;
    let sec = diff/1000;
    let min = sec / 60;
    let hour = min / 60;
    let day = hour / 24;
    let week = day / 7;
    let month = day / 30;
    let year = day / 365;
    let rem = day % 365;

    //for year format
    year = Math.floor(year);
    let month_y = Math.floor(rem / 30);
    rem = Math.floor((rem - month_y * 30)/2-1);
    let year_f = year + 'years' + ' ' + month_y + 'months ' + rem + 'days';

    document.getElementById("q8").innerHTML=`Input: 01/07/2018 to 03/05/2020 <br><br> ${year_f}`;
}


//-------------------Question 9 -------------------------------
function question9(){
    let d = new Date(1607518718000);
    document.getElementById("q9").innerHTML=`Input:1607518718<br>Output:&nbsp${d}`;
}

//-------------------Question 10 -------------------------------
function question10(){
        let temp1 = ("01/07/2018").split('/');
        let date1 = temp1[1]+'/'+temp1[0]+'/'+temp1[2];
        let temp2 = ("03/05/2020").split('/');
        let date2 = temp2[1]+'/'+temp2[0]+'/'+temp2[2];
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        let diff = d2 - d1;
        let sec = diff/1000;
        let min = sec / 60;
        let hour = min / 60;
        let day = hour / 24;
        let week = day / 7;
        let month = day / 30;
        let year = day / 365;
        let rem = day % 365;
    
        //for year format
        year = Math.floor(year);
        let month_y = Math.floor(rem / 30);
        rem = Math.floor((rem - month_y * 30)/2-1);
        let year_f = year + 'years' + ' ' + month_y + 'months ' + rem + 'days';
    
        //for month format
        let month_m = Math.floor(month);
        let days_m = Math.floor((day - month_m * 30)/2);
        let month_f = month_m + 'months ' + days_m + 'days';
        document.getElementById("q10").innerHTML=`Input: 01/07/2018 to 03/05/2020 <br><br> ${year_f}<br><br>${month_f}<br><br>${week}Weeks<br><br>${hour}Hours<br><br>${min}Minutes`;
    }

//-------------------Question 11 -------------------------------
function question11(){
    let static_string = "This is a sample string";
    let input_string = "Insert me";
    let input_position = prompt("Enter position where you want to insert");
    document.getElementById("q11").innerHTML=`static_string = This is a sample string<br>input_string = Insert me<br>${static_string.substr(0, input_position) + input_string + static_string.substr(input_position)}`;
}

//-------------------Question 12 -------------------------------
function question12(){
    let n3 = prompt("Enter length to chop the string:", '');
    function string_chop(str, ch){
        let ans = [];
        for(let i = 0 ; i < str.length ; i+=(+ch)){
            ans.push(str.substring(i,i+(+ch)));
        }
        return ans;
    }
    document.getElementById("q12").innerHTML=`Input string:RapidOpsSolutions<br> ${string_chop("RapidOpsSolutions", n3)}`;
}

//-------------------Question 13 -------------------------------
function question13(){
    let amt = 1023165454197;
    let st = amt.toString();
    let comm = [st[0]];
    let temp = 0;
    for(let i = 1 ; i < st.length ; i++){
        if(i==1){
            comm.push(",");
        }
        if(temp == 3){
            comm.push(",");
            temp=0;
        }
        comm.push(st[i]);
        temp++;
    }
    document.getElementById("q13").innerHTML=`Input:1023165454197<br>${comm.join('')}`;
}
//-------------------Question 14 -------------------------------

function ageSort(){
    let arr = [
        {
            id: 2,
            name: "Chaitanya",
            age: 22,
        },
        {
            id: 1,
            name: "Rana",
            age: 18,
        },
        {
            id: 10,
            name: "Herin",
            age: 20,
        },
        {
            id: 6,
            name: "Savan",
            age: 25,
        },
        {
            id: 5,
            name: "Kishan",
            age: 26,
        },
        {
            id: 4,
            name: "Raj",
            age: 17,
        },
        {
            id: 3,
            name: "Simran",
            age: 30,
        },
        {
            id: 9,
            name: "Abhi",
            age: 22,
        },
        {
            id: 7,
            name: "Raju",
            age: 21,
        },
        {
            id: 8,
            name: "Mamu",
            age: 29,
        },
    ];
    arr.sort((a, b) => {
        return a.age - b.age;
    });
    document.getElementById("q14").innerHTML=`Sorted by Age asec: ${JSON.stringify(arr)}`;
}
function nameSort(){
    let arr = [
        {
            id: 2,
            name: "Chaitanya",
            age: 22,
        },
        {
            id: 1,
            name: "Rana",
            age: 18,
        },
        {
            id: 10,
            name: "Herin",
            age: 20,
        },
        {
            id: 6,
            name: "Savan",
            age: 25,
        },
        {
            id: 5,
            name: "Kishan",
            age: 26,
        },
        {
            id: 4,
            name: "Raj",
            age: 17,
        },
        {
            id: 3,
            name: "Simran",
            age: 30,
        },
        {
            id: 9,
            name: "Abhi",
            age: 22,
        },
        {
            id: 7,
            name: "Raju",
            age: 21,
        },
        {
            id: 8,
            name: "Mamu",
            age: 29,
        },
    ];
    arr.sort((a, b) => {
        return b.name - a.name;
    });
    document.getElementById("q14").innerHTML=`Sorted by name desc: ${JSON.stringify(arr)}`;
}

//-------------------Question 15 -------------------------------
function question15(){
    let static_array = [
        {name:  "Jack" , age : 23}, 
        {name:  "Sam" , age : 12},  
        {name:  "Max" , age : 20} 
    ];
    let a = prompt("Enter 'd' to delete & 'i' to insert", '');
    if(a == 'd'){
        let pos = prompt("Enter position to delete", '');
        if(pos > static_array.length){
            alert("Enter valid index");
        }
        else{
            static_array.splice(pos,1);
        }
        document.getElementById("q15").innerHTML=`${JSON.stringify(static_array)}`;
    }
    else if(a == 'i'){
        let n = prompt("Enter name:",'');
        let ag = prompt("Enter age:",'');
        let obj = {
            name: n, age: ag
        };
        static_array.push(obj);
        document.getElementById("q15").innerHTML=`${JSON.stringify(static_array)}`;
    }
    else{
        alert("Enter valid option");
    }
}





