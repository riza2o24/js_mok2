const card=document.getElementById("card")
console.log(card)
fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(date => {
    
    
    date.products.forEach(item =>{
        const div=document.createElement("div")
        div.className="wewe"

        div.innerHTML=`
            <img class="imgs" src="${item.thumbnail}" alt="">
            <h3 class="textr" >${item.title}</h3>
            <p class="textre" >${item.price}</p>
        `
        card.appendChild(div)
    })
    
}).catch(error => {console.error("xato".error)})