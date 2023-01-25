var tablink = document.getElementsByClassName("tab-links")
var tabcontent = document.getElementsByClassName("tab-contents")
var tabworks = document.getElementsByClassName("all-worklist")
var sidemenu = document.getElementById("sidemenu")
var changelist = false


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}

function seemore(){
 changelist= !changelist
 
 if(changelist == true){
    document.getElementById("all-list").classList.remove("active-tab")
    document.getElementById("button").value = "Ver Menos"
   
 }

 else{
    document.getElementById("all-list").classList.add("active-tab")
    document.getElementById("button").value = "Ver mais"
   
 }
   
    
}

function openmenu(){
    sidemenu.style.right = "0"

 }

 function closemenu(){
    sidemenu.style.right = "-200px"
    
 }

function SendEmail(){
    if(document.getElementById("name").value !="" &&document.getElementById("email").value !="" && document.getElementById("phone").value !="" &&document.getElementById("message").value !=""){
        fetch("https://formsubmit.co/ajax/pedro.nogueira.barboza@gmail.com", {
                                method: "POST",
                                headers: { 
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'  
                    },
                    body: JSON.stringify({
                        Nome: document.getElementById("name").value,
                        Celular: document.getElementById("phone").value,
                        Email: document.getElementById("email").value,
                        Mensagem: document.getElementById("message").value
                    })
                })
                    .then(response => response.json())
                    .then(data => {if(data.message =="The form was submitted successfully."){
                        alert("Envio Feito com sucesso")
                   }
                   else{
                    alert("Erro")
                   }
                })
                    .catch(error => console.log(error));

                   
    }

    else{
        alert("Preencha todos os campos!")
    }
                          
}