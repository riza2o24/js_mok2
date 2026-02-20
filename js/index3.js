const qutii=document.getElementById("qutii")

fetch("https://dummyjson.com/carts")
.then(response => response.json())
.then(date => {


    date.carts.slice(0,3).forEach(item => {

        item.products.forEach(quti => {
            const div=document.createElement("div")
            div.className="flex4"
        
            div.innerHTML=`
                <div class="torbuchag">
                    <h4 class="ghgh" >${quti.id}</h4>
                </div>

                <div class="torbuchagg">
                    <h4 class="ghgh" >${quti.title}</h4>
                </div>                            

                <div class="torbuchaggg">
                    <h4 class="ghgh" >1 February 2021</h4>
                </div>
                            

                <div class="torbuchagggg">
                    <h4 class="ghgh  bv" >${item.totalProducts}</h4>
                </div>


                 <div class="torbuchaggggg">
                    <div>
                    <h4 class="ghgh" >americano (10); latte (8); cappuccino (14);</h4>
                    <p class="fds">Sea Detail</p>
                    </div>
                 </div>

                <div class="torbuchagggggg">
                    <h4 class="ghgh" >$${quti.price}</h4>
                </div>
            `

            qutii.appendChild(div)
        })
    })
}).catch(error=>{
    console.error("xatolig". error)
});