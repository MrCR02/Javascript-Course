let data = [];
let toDel = [];

function addData(fname, lname){
    if(fname === "" || lname === ""){
        alert("Fields cannot be empty");
        return;
    }
    data.push({fname, lname});
    console.log(data);
    let tab = `<input type="checkbox" name="delAll" onchange = onSelectAllChange() id = "delAll">&nbsp&nbsp 
                <label>Select all</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <label id="rowCount"></label>&nbsp&nbsp&nbsp
                <button id = "delSel" onclick=deleteAll() style = "display:none">Delete selected</button>`;
    for(elem in data){
        tab +=`<br><input type="checkbox" name="check${elem}" id = "check${elem}"}" onchange=viewDelete('check${elem}')>`
        tab +=`<input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
        tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
        tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
        tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name) style="display: none">Delete</button>`
    }
    document.getElementById("list").innerHTML = tab;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}

function deleteAll(){
    if(document.getElementById("delAll").checked){
        data = [];
        document.getElementById("list").innerHTML = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById(`delSel`).style.display = "none";
    }
    else{
        for(id in toDel){
            data.splice(id, 1);
        }
        let tab = `<input type="checkbox" name="delAll" onchange = onSelectAllChange() id = "delAll">&nbsp&nbsp 
                <label>Select all</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <label id="rowCount"></label>&nbsp&nbsp&nbsp
                <button id = "delSel" onclick=deleteAll() style = "display:none">Delete selected</button>`;
        for(elem in data){
            tab +=`<br><input type="checkbox" name="check${elem}" id = "check${elem}"}" onchange=viewDelete('check${elem}')>`
            tab +=`<input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
            tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
            tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
            tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name) style="display: none">Delete</button>`
        }
        document.getElementById("list").innerHTML = tab;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById(`delSel`).style.display = "none";
    }
}

function onSelectAllChange(){
    if(document.getElementById(`delAll`).checked){
        for(elem in data){
            document.getElementById(`check${elem}`).checked = true;
        }
        document.getElementById(`delSel`).style.display = "";
    }
    else{
        for(elem in data){
            document.getElementById(`check${elem}`).checked = false;
        }
        document.getElementById(`delSel`).style.display = "none";
    }
}

function viewDelete(name){
    let id;
    let change = true;
    if(name.length === 6)
        id = +name.charAt(name.length - 1);
    else
        id = +name.slice(5);
    if(document.getElementById(`check${id}`).checked){
        document.getElementById(`delete${id}`).style.display = "";
        document.getElementById(`delSel`).style.display = "";
        toDel.push(id);
    }
    else{
        document.getElementById(`delete${id}`).style.display = "none";
        toDel.splice(toDel.indexOf(id), 1);
        if(toDel.length === 0)
        document.getElementById(`delSel`).style.display = "none";
    }
    console.log(toDel);
}

function editData(name){
    let id;
    if(name.length === 5)
        id = +name.charAt(name.length - 1);
    else
        id = +name.slice(4);
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
        id = +name.slice(6);
    data.splice(id, 1);
    let tab = `<input type="checkbox" name="delAll" onchange = onSelectAllChange() id = "delAll">&nbsp&nbsp 
                <label>Select all</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <label id="rowCount"></label>&nbsp&nbsp&nbsp
                <button id = "delSel" onclick=deleteAll() style = "display:none">Delete selected</button>`;
    for(elem in data){
        tab +=`<br><input type="checkbox" name="check${elem}" id = "check${elem}"}" onchange=viewDelete('check${elem}')>`
        tab +=`<input type="text" name="fname${elem}" id = "fname${elem}" value="${data[elem].fname}" readonly>`
        tab +=`<input type="text" name="lname${elem}" id = "lname${elem}"  value="${data[elem].lname}" readonly>`
        tab += `<button name="edit${elem}" id="edit${elem}" onclick=editData(document.getElementById("edit${elem}").name)>Edit</button>`
        tab += `<button name="delete${elem}" id="delete${elem}" onclick=deleteData(document.getElementById("delete${elem}").name) style="display: none">Delete</button>`
    }
    document.getElementById("list").innerHTML = tab;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}