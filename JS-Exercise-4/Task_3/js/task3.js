let data = [
    { fname: "Chaitanya", lname: "Rana"},
    { fname: "Abhi", lname: "Rana"},
    { fname: "Herin", lname: "Zaveri"},
    { fname: "Savan", lname: "Aghera"},
    { fname: "Kishan", lname: "Desai"},
    { fname: "Ravindra", lname: "Singh"},
    { fname: "Yash", lname: "Mehta"},
    { fname: "Kishan", lname: "Sheth"},
    { fname: "Neel", lname: "Dani"},
    { fname: "Romit", lname: "Gandhi"},
    { fname: "Smit", lname: "Panchal"},
    { fname: "Smit", lname: "Hapani"},
];

let render = true;

function render2(){
    if(render){
        let tab = "";
        for(elem in data){
            tab +=`<br><input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
            tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
            tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
            tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name)>Delete</button>`
        }
        document.getElementById("list").innerHTML = tab;
        render = false;
    }
    else
        alert("Data already renderred! Please refresh if you need fresh data");
}

function addData(fname, lname){
    if(fname === "" || lname === ""){
        alert("Fields cannot be empty");
        return;
    }
    data.push({fname, lname});
    console.log(data);
    let tab = "";
    for(elem in data){
        tab +=`<br><input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
        tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
        tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
        tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name)>Delete</button>`

    }
    document.getElementById("list").innerHTML = tab;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}

function editData(name){
    let id;
    if(name.length === 5)
        id = +name.charAt(name.length - 1);
    else
        id = +name.slice(4);
    console.log(id);
    const fname = data[id].fname;
    const lname = data[id].lname;
    document.getElementById("fname").value = fname;
    document.getElementById("lname").value = lname;
    document.getElementById("id").value = id;
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "";
}

function updateData(fname, lname, id){
    data[+id].fname = fname;
    data[+id].lname = lname;
    alert("Updated");
    console.log(data[+id]);
    document.getElementById(`fname${id}`).value = fname;
    document.getElementById(`lname${id}`).value = lname;
    document.getElementById("add").style.display = "";
    document.getElementById("update").style.display = "none";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}

function deleteData(name){
    let id;
    if(name.length === 7)
        id = +name.charAt(name.length - 1);
    else
        id = name.slice(6);

    console.log("id"+id);
    data.splice(id, 1);
    let tab = "";
    for(elem in data){
        tab +=`<br><input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
        tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
        tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
        tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name)>Delete</button>`
    }
    document.getElementById("list").innerHTML = tab;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}