var listAcc = [];
var listDep = [];
var listPos = [];
var vitri = -1;

function department() {
    var dep1 = {
        id:1,
        name: "ban hang 1"
    }   

    var dep2 = {
        id:2,
        name:"ban hang 2"
    }

    var dep3 = {
        id:3,
        name:"ban hang 3"
    }

    listDep.push(dep1);
    listDep.push(dep2);
    listDep.push(dep3);

    for (let i = 0; i < listDep.length; i++) {
        $("#inputDepartment").append(`<option value="${listDep[i].name}">${listDep[i].name}</option>`);
    }
    
    
}

function position() {
    var po1 = {
        id: 1,
        name: "DEV"
    }

    var po2 = {
        id: 2,
        name: "TEST"
    }

    var po3 = {
        id: 3,
        name: "SCRUM MASTER"
    }

    var po4 = {
        id: 4,
        name: "PM"
    }

    listPos.push(po1);
    listPos.push(po2);
    listPos.push(po3);
    listPos.push(po4);

    for (let i = 0; i < listPos.length; i++) {
       $("#inputPosition").append(`<option value="${listPos[i].name}">${listPos[i].name}</option>`); 
    }
}


$(function(){
    department();
    position();
    table();
})

function table() {

    var acc1 = {
        id: 1,
        name: "Nguyen Van A",
        email: "nguyenvana@gmail.com",
        position: "DEV",
        department: "ban hang 1" 
    }

    var acc2 = {
        id: 2,
        name: "Nguyen Van B",
        email: "nguyenvanb@gmail.com",
        position: "TEST",
        department: "ban hang 2" 
    }

    var acc3 = {
        id: 3,
        name: "Nguyen Van C",
        email: "nguyenvanc@gmail.com",
        position: "PM",
        department: "ban hang 3" 
    }

    listAcc.push(acc1);
    listAcc.push(acc2);
    listAcc.push(acc3);

    for (let i = 0; i < listAcc.length; i++) {
    $("#body").append(`
    <tr>
        <td>${listAcc[i].id}</td>
        <td>${listAcc[i].name}</td>
        <td>${listAcc[i].email}</td>
        <td>${listAcc[i].position}</td>
        <td>${listAcc[i].department}</td>
        <td>
            
            <button type="button" class="btn btn-default">Edit</button>
            
            <button type="button" class="btn btn-danger">Delete</button>
            
        </td>
    <tr>
    `);
        
    }
}

$("#add").click(function (e) { 
    var id = $("#id").val();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var position = $("#inputPosition").val();
    var department = $("#inputDepartment").val();

    var acc = {
        id: id,
        name: fullname,
        email: email,
        position: position,
        department: department 
    }
    listAcc.push(acc);

    // xoas body cua table di de hien thi lai ds acc
    $("#body").empty();
    console.log("lisst co "+ listAcc.length +" phan tu");
    for (let i = 0; i < listAcc.length; i++) {
        
    $("#body").append(`
    <tr>
        <td>${listAcc[i].id}</td>
        <td>${listAcc[i].name}</td>
        <td>${listAcc[i].email}</td>
        <td>${listAcc[i].position}</td>
        <td>${listAcc[i].department}</td>
        <td>
            
            <button type="button" class="btn btn-default" onclick="handleEdit(${i})" >Edit</button>
            
            <button type="button" class="btn btn-danger" onclick="handleDelete(${i})" >Delete</button>
            
        </td>
    <tr>
    `);
        
    }  
    $("#id").val("");
    $("#fullname").val("");
    $("#email").val("");
    alert("Add thanh cong");
});

function handleDelete(i) {//  12345,  i=1,2
   if( confirm("Ban co muon xoa ko?") == true){
        listAcc.splice(i, 1);
        alert("Delete thanh cong");
   }
   // xoas body cua table di de hien thi lai ds acc
   $("#body").empty();
   console.log("lisst co "+ listAcc.length +" phan tu");
   for (let i = 0; i < listAcc.length; i++) {
       
   $("#body").append(`
   <tr>
       <td>${listAcc[i].id}</td>
       <td>${listAcc[i].name}</td>
       <td>${listAcc[i].email}</td>
       <td>${listAcc[i].position}</td>
       <td>${listAcc[i].department}</td>
       <td>
           <button type="button" class="btn btn-default" onclick="handleEdit(${i})" >Edit</button>
           <button type="button" class="btn btn-danger" onclick="handleDelete(${i})" >Delete</button>
       </td>
   <tr>
   `); 
   
   }  
   
}

function handleEdit(i) {
    $("#id").val(listAcc[i].id);
    $("#fullname").val(listAcc[i].name);
    $("#email").val(listAcc[i].email);
    $("#inputDepartment").val(listAcc[i].department);
    $("#inputPosition").val(listAcc[i].position);
    vitri = i;
}

$("#update").click(function (e) { 
    if(vitri == -1){
        alert("Chua chon ptu de edit");
    }else{
        var id = $("#id").val();
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var position = $("#inputPosition").val();
        var department = $("#inputDepartment").val();
    
        var accc = {
            id: id,
            name: fullname,
            email: email,
            position: position,
            department: department 
        }
    
        listAcc.splice(vitri, 1, accc);
    
        $("#body").empty();
        console.log("lisst co "+ listAcc.length +" phan tu");
        for (let i = 0; i < listAcc.length; i++) {
            
        $("#body").append(`
        <tr>
            <td>${listAcc[i].id}</td>
            <td>${listAcc[i].name}</td>
            <td>${listAcc[i].email}</td>
            <td>${listAcc[i].position}</td>
            <td>${listAcc[i].department}</td>
            <td>
                
                <button type="button" class="btn btn-default" onclick="handleEdit(${i})" >Edit</button>
                
                <button type="button" class="btn btn-danger" onclick="handleDelete(${i})" >Delete</button>
                
            </td>
        <tr>
        `);
        }  
        $("#id").val("");
        $("#fullname").val("");
        $("#email").val("");
        alert("Upadate thanh cong");
        vitri = -1;
    }
    
    
});
