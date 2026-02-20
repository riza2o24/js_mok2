const qutii=document.getElementById("qutii")

fetch("https://dummyjson.com/users")
.then(response => response.json())
.then(date => {

    date.users.slice(0,8).forEach(item => {
        const divs=document.createElement("div")
        divs.className="flex3"

        divs.innerHTML=`
            <div class="torbuchag">
                <h4 class="qwert">0${item.id}</h4>
            </div>

            <div class="torbuchagg">
                <h4 class="qwert">${item.lastName}</h4>
            </div>                            

            <div class="torbuchaggg">
                <h4 class="qwert">30</h4>
            </div>
                            

            <div class="torbuchagggg">
                <h4 class="qwert">February 14 2021</h4>
            </div>


            <div class="torbuchaggggg">
                <h4 class="qwert">$${item.height}</h4>
            </div>

            <div class="torbuchagggggg">
                <h4 class="qwert">$${item.weight}</h4>
            </div>


            <div class="torbuchaggggggg">
                <img src="img/🔹 Icon Color.png" alt="icon">
            </div>

        `

        qutii.appendChild(divs)
    })
}).catch(error => {console.error("hato" . error)})