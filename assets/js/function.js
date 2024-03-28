function getIcedCoffee(){
  fetch("https://api.sampleapis.com/coffee/iced")
   .then(function(res){
     return res?.json()
   })
   .then(function(output){
     getCoffeeItem(output)
   })
}

getIcedCoffee()

function getIcedCoffeeById(id){
  fetch(`https://api.sampleapis.com/coffee/iced/${id}`)
  .then(function(res){
    return res?.json()
  })
  .then(function(output){
    showHotCoffeeDetail(output)
 })
}

function getCoffeeItem(output){
   let text = "<div class='row p-2'>"
   output.forEach(i => {
     text += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 responsive-custom-col">
       <div class="card mt-2">
         <div class="coffee-cursor p-2">
           <img src=${i?.image} alt="" class="w-100" onclick="getIcedCoffeeById(${i?.id})"/>
           <h2 class="text-center text-primary">${i?.title}</h2>
           <p class="text-center text-secondary coffee-text" title=${i?.description}>${i?.description}</p>
         </div>
       </div>
     </div>`
   });
   text += "</div>"
   document.querySelector("#iced-coffee").innerHTML = text
 }

 function showHotCoffeeDetail(output){
   localStorage.setItem("id", output?.id)
   localStorage.setItem("image", output?.image)
   localStorage.setItem("title", output?.title)
   localStorage.setItem("description", output?.description)
   window.location.href = "icedCoffeeDetail.html"
}

function goBack(){
  window.location.href = "hotCoffee.html"
}

function goBackToIceCoffeeList(){
  window.location.href = "icedCoffee.html"
}

function getIcedDetailCoffeeById(){
  let text = "<div class='row'>"
   text = `<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <div class="card">
       <img src=${localStorage.getItem("image")} alt="" class="w-100 responsive-image"/>
       <h2 class="text-center text-primary">${localStorage.getItem("title")}</h2>
       <span class="text-secondary text-center p-2">${localStorage.getItem("description")}</span>
       <div class="d-flex justify-content-center">
         <button class="btn btn-info w-25 m-2 p-2" onclick="goBackToIceCoffeeList()">
            <ion-icon name="arrow-back-outline"></ion-icon>
         </button>
         <a class="btn btn-secondary text-white m-2 p-2" href="tel:0961847448">
           <ion-icon name="call-outline"></ion-icon> 0961847448
         </a>
       </div>
     </div>
   </div>`
  text += "</div>"
  document.querySelector("#iced-coffee-detail").innerHTML = text
}

function searchByIcedCoffeeTitle(){
  fetch("https://api.sampleapis.com/coffee/iced")
  .then(function(res){
    return res?.json()
  })
  .then(function(output){
    let valueFilter = document.querySelector("#filter").value
    let filterCoffee = output?.filter((i) => i?.title?.includes(valueFilter))
    document.querySelector("#filter-results").innerHTML = `<p class="text-right text-white p-4">Show ${filterCoffee?.length} results</p>`
    getCoffeeItem(filterCoffee)
  })
}
getIcedDetailCoffeeById()