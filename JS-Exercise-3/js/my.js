//-------------- Question 1 ------------------------------

document.getElementById("btnEmail").addEventListener("click", function protectEmail(){

    const email = document.getElementById("email").value;

    // check if the field is empty
    if(email === null || email === ""){
        alert("Enter email");
        return;
    }
    else{
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,4})+$/;

        // check if the user has entered valid email id
        if(pattern.test(email)){
            const splitted = email.split("@");
            let firstHalf = Array.from(splitted[0]);
            const secondHalf = splitted[1];

            // variable to get the no of characters to hide from the email id
            const toHide = Math.floor(firstHalf.length / 2);

            // loop to encrypt first half of email with * 
            for(let i = toHide - 1 ; i < firstHalf.length - 1 ; i++){
                firstHalf[i] = "*";
            }

            document.getElementById("Q1").innerHTML=`Input email: ${email}<br>Encrypted email: ${firstHalf.join("")+"@"+secondHalf}`;
        }
        else{
            alert("Enter valid email please");
        }
    }
});

//-------------- Question 2 ------------------------------

document.getElementById("btnHtml").addEventListener("click", function (){

    let str = document.getElementById("removeHtml").value;

    //check if the string is empty
    if ((str===null) || (str==='')){
       alert("Enter a string");
       return;
    }
    else
        str = str.toString();
    
    // regex to remove html/xml tags
    const result = str.replace(/<[^>]*>/g, '');
    console.log(result);
    document.getElementById("Q2").innerHTML=`Output: ${result}`;
});

//-------------- Question 3 ------------------------------

function validateEmail(email){
    if(email === null || email === ""){
        alert("Enter email");
        return;
    }
    else{
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,4})+$/;
        if (pattern.test(email))
        {
            alert("This is an email id!")
            return;
        }
        alert("This is not an email id!");
    }
}

//-------------- Question 4 ------------------------------

function drawTable(row, col){
    console.time("time");
    //variable to store table body as string then using innerHTML appending it to div tag
    let tab = "<br><table border = '1' style = 'background-color:grey;'>";

    //two loops to create rows and cols
    for(let i = 0 ; i < row ; i++){
        tab += "<tr>";
        for(let j = 0 ; j < col ; j++){
            tab = tab + "<td>( Row:" + i + " Col:" + j +")</td>";
        }
        tab+= "</tr>";
    }
    tab+="</table>";
    document.getElementById("tab").innerHTML = tab;
}

//-------------- Task 2 ------------------------------

function filterPlayers(){
    console.time("time");
    const input = [
    {
        Name: 'Ravindra',
        Sports:['Chess', 'Cricket'],  
    },
    {
        Name: 'Ravi',
        Sports:['Cricket', 'Football'],
    },
    {
        Name: 'Rishab',
        Sports:['Table-Tennis', 'Football'],
    },];

    // map with key as sport and value as array of names
    let result = new Map();

    // main loop iterates through each element of input
    for(elem in input){
        //loop iterate through sports array
        for(sport in input[elem].Sports){
            //check if map aleary has a key of particular sport if not then set the key
            if(!result.has(input[elem].Sports[sport])){
                result.set(input[elem].Sports[sport], [input[elem].Name]);
            }
            //else push the name to that sport
            else{
                let temp = result.get(input[elem].Sports[sport]);
                temp.push(input[elem].Name);
                result.set(input[elem].Sports[sport], temp);
            }
        }
    }
    console.log("Input");
    console.log(input);
    console.log("Output");
    console.log(result);
    console.timeEnd("time");
}

