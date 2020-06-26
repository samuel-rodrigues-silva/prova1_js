
    let btnLog = document.getElementById("btn_login");
    
    btnLog.addEventListener('click', function(){    
        
    let inputReg = document.getElementById("matricula");
    let inputPass = document.getElementById("senha");
            
    checkInputs(inputReg,inputPass)
    

    })

function checkInputs(reg,pass){

    if(reg.value == ''){
        showAlert('errorReg')
        hideAlert('error')
    }else if(pass.value == ''){
       showAlert('errorPass')
       hideAlert('error')
       hideAlert('errorReg')
    }else{
        validate(reg.value,pass.value)
    }

    

}

function validate(reg,pass){

    if(reg == 123456 && pass == 123456){
        hideAlert('error')
        alert('seja bem vindo');
    }else{
        hideAlert('errorReg')
        hideAlert('errorPass')
        showAlert('error')
    }

}

function showAlert(type){
        let error = document.getElementById(type);
        error.style.display = 'block'
}

function hideAlert(type){
        let error = document.getElementById(type);
        error.style.display = 'none'
}



   