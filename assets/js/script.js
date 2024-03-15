document.querySelector(".btn.btn-primary").addEventListener("click", function(){
  getHotCoffee()
})

document.querySelector(".btn.btn-secondary").addEventListener("click", function(){
  getIcedCoffee()
})

function getHotCoffee(){
  fetch("https://api.sampleapis.com/coffee/hot")
   .then(function(res){
     return res?.json()
   })
   .then(function(output){
     getCoffeeItem(output)
   })
}

function getIcedCoffee(){
  fetch("https://api.sampleapis.com/coffee/iced")
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

 function getIcedCoffeeById(id){
   fetch(`https://api.sampleapis.com/coffee/iced/${id}`)
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
   window.location.href = "coffeedetail.html"
 }

function getCoffeeItem(output){
   let text = "<div class='row p-2'>"
   output.forEach(i => {
    text += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
      <div class="card mt-2">
        <div class="coffee-cursor p-2">
          <img src=${i?.image} alt="" class="w-100"/>
          <h2 class="text-center text-primary">${i?.title}</h2>
          <p class="text-center text-secondary coffee-text" title=${i?.description}>${i?.description}</p>
          <button class="btn btn-info" onclick="getHotCoffeeById(${i?.id})">Hot coffee detail</button>
          <button class="btn btn-secondary" id="iced-coffee" onclick="getIcedCoffeeById(${i?.id})">Iced coffee detail</button>
        </div>
      </div>
    </div>`
    });
   text += "</div>"
   document.querySelector("#webpage").innerHTML = text
}
