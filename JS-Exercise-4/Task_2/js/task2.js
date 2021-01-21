let data = [];

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
    const id = +name.charAt(name.length - 1);
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
    const id = +name.charAt(name.length - 1);
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