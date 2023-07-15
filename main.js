const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');




if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}

function sendMail(){
    var params = {
from_name : document.getElementById("fullName").Value,
email_id : document.getElementById("email_id").value,
message : document.getElementById("message").value
    }
}
const serviceID = "service_ylppiel";
const templateID = "template_jy06ehg";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("fullName").value ="";
        document.getElementById("email_id").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message send")
    }
)
.catch((err) => console.log(err))
;


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


 toggle.addEventListener('click',function(){
    this.classList.toggle('bi bi-moon-fill');
 })


