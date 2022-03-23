function validateForm(){
    //check whether name is added 
    let name = document.getElementById("name");
    let num = document.getElementById("number");

    if (name.value == ""){
        alert('please enter name')
    }
    if (!isNaN(name.value)){
        alert('please add text ')
    }
    if (isNaN(name.value)){
        alert('please add number in phone number ')
    }
    
}