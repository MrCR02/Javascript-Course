let input = prompt("Enter number of rows:", '');
document.write("Question 1:<br><br>");
for(let i = 1 ; i <= input ; i++){
    for(let j = 1 ; j <=i ; j++){
        document.write("*&nbsp&nbsp");
    }
    document.write("<br>");
}

document.write("Question 2:<br><br>");
for(let i = 1 ; i <= input ; i++){
    for(let j=2*(input-i); j >= 1; j--) 
    {
        document.write("&nbsp&nbsp"); 
    }

    for(let k = 1 ; k <= i ; k++){
        document.write("*&nbsp&nbsp");
    }
    document.write("<br>");
}

document.write("Question 3:<br><br>");
for(let i = 1 ; i <= input ; i++){
    for(let j = input-i ; j > 0 ; j--){
        document.write("&nbsp&nbsp&nbsp");
    }
    for(let j = 1 ; j <= i ; j++){
        document.write("*&nbsp&nbsp&nbsp&nbsp");
    }
    document.write("<br>");
}

document.write("Question 3:<br><br>");
for(let i = 0 ; i < input ; i++){
    for(let j = 0 ; j < input ; j++){
        if(j == i || (i+j) == (input-1)){
            document.write("*&nbsp&nbsp");
        }
        else{
            document.write("&nbsp&nbsp&nbsp&nbsp");
        }
    }
    document.write("<br>");
}