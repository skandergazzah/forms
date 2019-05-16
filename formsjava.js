function showalert()
{
    let name=document.getElementById('name').value
    let prenom=document.getElementById('prenom').value
    let adress=document.getElementById('adress').value
    let email=document.getElementById('e-mail').value
    let pass=document.getElementById('password').value
    let comm=document.getElementById('comments').value
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    if (name.length === 0){
        window.alert("enter your Name")
    }
    else if  (prenom.length===0){
        window.alert("enter your prénom")
    }
    else if  (adress.length===0){
        window.alert("enter your adress")
    }
    else if  (email.length===0){
        window.alert("enter your email")
    }
    else if  (pass.length===0  ){
        window.alert("enter a correct  password")
    }

    else if  (comm.length===0){
        window.alert("enter your commentaire")
    }
    else if (!regex.test(email)){
        window.alert("Doesn't have a valid e-mail adress") 
    }
    else if (!strongRegex.test(pass)){
        window.alert("The password must be a combination of charatacters , numbers and at least a capital letter")
    }


}