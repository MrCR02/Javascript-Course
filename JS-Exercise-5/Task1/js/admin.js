// to get the username from the URL
const uname = (window.location.href).split("=")[1];

// function to display list of course
function showCourses(){
    if(document.getElementById("course_container").style.display === "none")
        document.getElementById("course_container").style.display = "";
    else    
    document.getElementById("course_container").style.display = "none";
}

// function to display student details
function showStudents(){
    if(document.getElementById("student_container").style.display === "none")
        document.getElementById("student_container").style.display = "";
    else    
    document.getElementById("student_container").style.display = "none";
}

// function to add new course
function addCourse(name){

    if(!localStorage.getItem("courses")){
        localStorage.setItem("courses", "[]");
    }

    const courses = JSON.parse(localStorage.getItem("courses"));
    let flag = true;
        for(course in courses){
            // check if the course already exist
            if(courses[course] === name){
                flag = false;
                alert("Course already exist!");
                break;
            }
        }
        // if doesnt exist then add it
        if(flag){
            courses.push(name);
            localStorage.setItem("courses", JSON.stringify(courses));
            alert("Course added successfully");
            let list = "<ul>";
            for(course in courses){
                list += `<li>${courses[course]}</li>`;
            }
            list += `</ul>`
            document.getElementById("listOfCourses").innerHTML = list;
            document.getElementById("course").value = "";
        }
}

// function to show courses
function renderData(){
    if(!localStorage.getItem("courses")){
        localStorage.setItem("courses", "[]");
    }

    const courses = JSON.parse(localStorage.getItem("courses"));

    //creating ul to list the courses
    let list = "<ul>";
    for(course in courses){
        list += `<li>${courses[course]}</li>`;
    }
    list += `</ul>`
    document.getElementById("listOfCourses").innerHTML = list;
    if(!localStorage.getItem("users")){
        localStorage.setItem("users", "[]");
    }

    const users = JSON.parse(localStorage.getItem("users"));
    let list2 = "<ul>";
    for(user in users){
        list2 += `<li>${users[user].username}&nbsp&nbsp&nbsp<button onclick="studentDetails('${users[user].username}', '${users[user].course}')">Details</button></li><div id = "${users[user].username}" style = "display:none;"></div>`;
    }
    list2 += `</ul>`
    document.getElementById("listOfStudents").innerHTML = list2;
}


// function ge the student details and their assigned courses
function studentDetails(name, subjects){
    if(document.getElementById(name).style.display === "none"){
        document.getElementById(name).style.display = "";

        // get list of all the courses from the storage
        const courses = JSON.parse(localStorage.getItem("courses"));

        // creating a table for displaying details
        let list = "<table border = '1' style= 'border-style: dashed;'>";
        let flag = false;
        let subs = subjects.split(",");

        // loop to check already assigned courses to the respective student
        for(course in courses){
            flag = false;
            list+="<tr>";
            if(subs.length == 0)
                list += `<td>${courses[course]}</td><td><button id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')">Assign</button>
                        <button id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')" style = "display:none;">Revoke</button></td>`;
            else{
                for(sub in subs){
                    if(subs[sub] === courses[course]){
                        list += `<td>${courses[course]}</td>
                        <button id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')" style = "display:none;">Assign</button>
                        <td><button id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')">Revoke</button></td>`;
                        flag = true;
                        break;
                    }    
                }
                if(flag)
                    continue;
                list += `<td>${courses[course]}</td><td><button id = "assign${courses[course]}" onclick = "assignCourse('${name}', '${courses[course]}')">Assign</button>
                        <button id = "revoke${courses[course]}" onclick = "revokeCourse('${name}', '${courses[course]}')" style = "display:none;">Revoke</button></td>`;
            }
            list+= "</tr>";
        }
        list += `</table>`
        document.getElementById(name).innerHTML = list;
    }
    else    
        document.getElementById(name).style.display = "none";
}


//function to assign new course to the student
function assignCourse(userName, courseName){
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === userName){
            users[user].course.push(courseName);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${courseName}`).style.display = "none";
            document.getElementById(`revoke${courseName}`).style.display = "";
            alert("course assigned");
            location.reload();
        }
    }
}


//function to revoke already assigned courses from the student
function revokeCourse(userName, courseName){
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    for(user in users){
        if(users[user].username === userName){
            const index = users[user].course.indexOf(courseName);
            console.log(index);
            users[user].course.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById(`assign${courseName}`).style.display = "";
            document.getElementById(`revoke${courseName}`).style.display = "none";
            alert("course revoked");
            location.reload();
        }
    }
}