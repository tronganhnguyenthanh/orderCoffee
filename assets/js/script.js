function getHotCoffee(){
  fetch("https://api.sampleapis.com/coffee/hot")
   .then(function(res){
     return res?.json()
   })
   .then(function(output){
     getCoffeeItem(output)
   })
}

function getHotCoffeeById(id){
  fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
   .then(function(res){
     return res?.json()
   })
   .then(function(output){
     showHotCoffeeDetail(output)
   })
 }

 function showHotCoffeeDetail(output){
   localStorage.setItem("id", output?.id)
   localStorage.setItem("image", output?.image)
   localStorage.setItem("title", output?.title)
   localStorage.setItem("description", output?.description)
   window.location.href = "hotCoffeedetail.html"
 }

 function goForward(){
   window.location.href = "icedCoffee.html"
 }

function getCoffeeItem(output){
   let text = "<div class='row p-2'>"
   output.forEach(i => {
    text += `<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 responsive-custom-col">
      <div class="card mt-2">
        <div class="coffee-cursor p-2">
          <img src=${i?.image} alt="" class="w-100" onclick="getHotCoffeeById(${i?.id})"/>
          <h2 class="text-center text-primary">${i?.title}</h2>
          <p class="text-center text-secondary coffee-text" title=${i?.description}>${i?.description}</p>
        </div>
      </div>
    </div>`
    });
   text += "</div>"
   document.querySelector("#hot-coffee").innerHTML = text
}

function getDetailHotCoffeeById(){
  let text = "<div class='row'>"
   text = `<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <div class="card">
       <img src=${localStorage.getItem("image")} alt="" class="w-100 responsive-image"/>
       <h2 class="text-center text-primary responsive-text">${localStorage.getItem("title")}</h2>
       <span class="text-secondary text-center p-2">${localStorage.getItem("description")}</span>
       <div class="d-flex justify-content-center">
         <a class="btn btn-info w-25 m-2 p-2" href="hotCoffee.html">
           <ion-icon name="arrow-back-outline"></ion-icon>
         </a>
         <a class="btn btn-secondary text-white m-2 p-2" href="tel:0961847448">
           <ion-icon name="call-outline" role="img" class="md hydrated"></ion-icon> 0961847448
         </a>
       </div>
     </div>
   </div>`
  text += "</div>"
  document.querySelector("#coffee-detail").innerHTML = text
}

function goToHomePage(){
  window.location.href = "index.html"
}

getHotCoffee()
getDetailHotCoffeeById()