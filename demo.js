var listAcc = [];
var listDep = [];
var listPos = [];
var idCanSua = -1;

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

    //  lay ds account tu mockapi ve
    $.ajax({
        type: "GET",
        url: "https://63860b61beaa645826716bbf.mockapi.io/api/v1/account",
        // data: "data",// chua du lieu de them hoac sua
        // dataType: "dataType",
        success: function (response) {
            listAcc = response;
            $("#body").empty();
            // hien thi ds acc ra man hifnh
            for (let i = 0; i < listAcc.length; i++) {
                $("#body").append(`
                <tr>
                    <td>${listAcc[i].id}</td>
                    <td>${listAcc[i].fullname}</td>
                    <td>${listAcc[i].email}</td>
                    <td>${listAcc[i].position}</td>
                    <td>${listAcc[i].department}</td>
                    <td>
                        
                    <button type="button" class="btn btn-default" onclick="handleEdit(${listAcc[i].id})" >Edit</button>
           
                    <button type="button" class="btn btn-danger" onclick="handleDelete(${listAcc[i].id})" >Delete</button>
                    
                    </td>
                <tr>
                `);
        }
        }
    });

    
        
    
}

$("#add").click(function (e) { 
    var id = $("#id").val();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var position = $("#inputPosition").val();
    var department = $("#inputDepartment").val();

    var acc = {
        id: id,
        fullname: fullname,
        email: email,
        position: position,
        department: department 
    }
    // dung api de them mowi account
    $.ajax({
        type: "POST",
        url: "https://63860b61beaa645826716bbf.mockapi.io/api/v1/account",
        data: acc,
        // dataType: "dataType",
        success: function (response) {
            table();
                alert("them  thanh cong");
        }
    });

      
    $("#id").val("");
    $("#fullname").val("");
    $("#email").val("");
   
});

function handleDelete(id) {//  12345,  i=1,2
   if( confirm("Ban co muon xoa ko?") == true){

        // dung ajax goi den api xoa 
        $.ajax({
            type: "DELETE",
            url: "https://63860b61beaa645826716bbf.mockapi.io/api/v1/account/"+id,
            // data: "data",
            // dataType: "dataType",
            success: function (response) {
               
                table();
                alert("Delete thanh cong");
            }
        });
   }
  
   
}

function handleEdit(id) {
    var acc = listAcc.find(acc => acc.id == id);
    $("#id").val(acc.id);
    $("#fullname").val(acc.fullname);
    $("#email").val(acc.email);
    $("#inputDepartment").val(acc.department);
    $("#inputPosition").val(acc.position);
    idCanSua = id;
}

$("#update").click(function (e) { 
    if(idCanSua == -1){
        alert("Chua chon ptu de edit");
    }else{
        var id = $("#id").val();
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var position = $("#inputPosition").val();
        var department = $("#inputDepartment").val();
    
        var accc = {
            id: id,
            fullname: fullname,
            email: email,
            position: position,
            department: department 
        }
    
       // update account dung api   (ajax laf cong cu de call api)
       $.ajax({
        type: "PUT",
        url: "https://63860b61beaa645826716bbf.mockapi.io/api/v1/account/"+id,
        data: accc,
        // dataType: "dataType",
        success: function (response) {
            alert("Upadate thanh cong");
            idCanSua = -1;
            table();
            $("#id").val("");
            $("#fullname").val("");
            $("#email").val("");
        }
       });
    
        // $("#body").empty();
        // console.log("lisst co "+ listAcc.length +" phan tu");
        // for (let i = 0; i < listAcc.length; i++) {
            
        // $("#body").append(`
        // <tr>
        //     <td>${listAcc[i].id}</td>
        //     <td>${listAcc[i].name}</td>
        //     <td>${listAcc[i].email}</td>
        //     <td>${listAcc[i].position}</td>
        //     <td>${listAcc[i].department}</td>
        //     <td>
                
        //         <button type="button" class="btn btn-default" onclick="handleEdit(${i})" >Edit</button>
                
        //         <button type="button" class="btn btn-danger" onclick="handleDelete(${i})" >Delete</button>
                
        //     </td>
        // <tr>
        // `);
        // }  
        // $("#id").val("");
        // $("#fullname").val("");
        // $("#email").val("");
        // alert("Upadate thanh cong");
        // vitri = -1;
    }
    
    
});
