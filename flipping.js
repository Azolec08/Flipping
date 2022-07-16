const icon = document.querySelector('#icon')
const bigPicture = document.querySelector('#bigPicture')

function smImg(smallImg){
     bigPicture.src = smallImg

}

icon.onclick = () =>{

     document.body.classList.toggle('changeBack')
     if(icon.className == "fa fa-moon-o"){
          icon.className = "fa fa-sun-o"
     }else{
          icon.className = "fa fa-moon-o"
     }

}