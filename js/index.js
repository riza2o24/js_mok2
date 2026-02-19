const card=document.getElementById("card")

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(date => {
    const div=document.createElement("div")

    date.products.forEach(item =>{
        
    })
})