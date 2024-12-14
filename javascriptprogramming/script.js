//selecting tox box2 button
var box2=document.querySelector(".box2")
var tox=document.querySelector(".tox")
var popbutton=document.getElementById("pop-button")

popbutton.addEventListener("click",function (){
    box2.style.display="block"
    tox.style.display="block"
   })
   //select cancel
   var cancelnote=document.getElementById("cancel-note")

   cancelnote.addEventListener("click",function(event){
    event.preventDefault()
      box2.style.display="none"
    tox.style.display="none"
   })
   //select box,add-note,Note-title,Note-Author,small-note
   var box=document.querySelector(".box")
   var addnote=document.getElementById("add-note")
   var NoteTitle=document.getElementById("Note-title")
   var NoteAuthor=document.getElementById("Note-Author")
   var smallnote=document.getElementById("small-note")
    
   addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-your")
    div.innerHTML=`<h2>${NoteTitle.value}</h2> 
             <h5>${NoteAuthor.value}</h5>
            <p>${smallnote.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    box.append(div)
     box2.style.display="none"
    tox.style.display="none"
   })

   function deletebook(event)
   {
    event.target.parentElement.remove()
   }