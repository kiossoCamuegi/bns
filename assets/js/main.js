


let Navbar = document.querySelector(".responsive-menu .menu");
let toggle = document.querySelectorAll(".toggle-menu");
toggle.forEach(btn => {
    btn.addEventListener("click", function () {
       Navbar.classList.toggle("show");
    })
});



function budget_coin(){
    const kwanza =  [
        '<option value="less then 678.000kz">Aproximadamente 678.898Kz</option>',
        '<option value="less then 747.499kz">Entre 678.004 ou Aproximadamente 747.499Kz</option>',
        '<option value="less then 978.874kz">Entre 747.499Kz ou Aproximadamente  978.874Kz</option>',
        '<option value="less then 1.091.195kz">Entre 978.874kz ou Aproximadamente 1.091.195kz</option>',
        '<option value="less then 1.283.894kz">Entre 1.091.195kz ou Aproximadamente 1.283.894kz</option>',
        '<option value="less then 1.838.181kz">Entre 1.838.181kz ou Aproximadamente 1.091.195kz</option>',
        '<option value="less then 2.698.130kz">Entre 1.838.181kz  ou Aproximadamente 2.698.130kz</option>',
        '<option value="less then 3.318.120kz">Entre 2.698.130kz ou Aproximadamente  3.318.120kz</option>',
        '<option value="less then 4.123.783kz">Entre 3.318.120kz ou Aproximadamente 4.123.783kz</option>',
        '<option value="less then 6.563.120kz">Entre 4.123.783kz ou Aproximadamente 6.563.120kz</option>',
        '<option value="superior">Mais de 6.899.000Kz</option>'
    ];
    
    const Dollar =  [
        '<option value="less then 678.000$">Aproximadamente 678.898$</option>',
        '<option value="less then 747.499$">Entre 678.004$ ou Aproximadamente 747.499$</option>',
        '<option value="less then 978.874$">Entre 747.499$ ou Aproximadamente  978.874$</option>',
        '<option value="less then 1.091.195$">Entre 978.874$ ou Aproximadamente 1.091.195$</option>',
        '<option value="less then 1.283.894$">Entre 1.091.195$ ou Aproximadamente 1.283.894$</option>',
        '<option value="less then 1.838.181$">Entre 1.838.181$ ou Aproximadamente 1.091.195$</option>',
        '<option value="less then 2.698.130$">Entre 1.838.181$  ou Aproximadamente 2.698.130$</option>',
        '<option value="less then 3.318.120$">Entre 2.698.130$ ou Aproximadamente  3.318.120$</option>',
        '<option value="less then 4.123.783$">Entre 3.318.120$ ou Aproximadamente 4.123.783$</option>',
        '<option value="less then 6.563.120$">Entre 4.123.783$ ou Aproximadamente 6.563.120$</option>',
        '<option value="superior">Mais de 6.899.000$</option>'
    ];
    
    const Euro =  [
        '<option value="less then 678.000£">Aproximadamente 678.898£</option>',
        '<option value="less then 747.499£">Entre 678.004£ ou Aproximadamente 747.499£</option>',
        '<option value="less then 978.874£">Entre 747.499£ ou Aproximadamente  978.874£</option>',
        '<option value="less then 1.091.195£">Entre 978.874£ ou Aproximadamente 1.091.195£</option>',
        '<option value="less then 1.283.894£">Entre 1.091.195£ ou Aproximadamente 1.283.894£</option>',
        '<option value="less then 1.838.181£">Entre 1.838.181£ ou Aproximadamente 1.091.195£</option>',
        '<option value="less then 2.698.130£">Entre 1.838.181£  ou Aproximadamente 2.698.130£</option>',
        '<option value="less then 3.318.120£">Entre 2.698.130£ ou Aproximadamente  3.318.120£</option>',
        '<option value="less then 4.123.783£">Entre 3.318.120£ ou Aproximadamente 4.123.783£</option>',
        '<option value="less then 6.563.120£">Entre 4.123.783£ ou Aproximadamente 6.563.120£</option>',
        '<option value="superior">Mais de 6.899.000£</option>'
    ];

    let coins = document.querySelectorAll(".ct-coin"); 
     if (coins.length >= 1) {
         const price = document.querySelector("#ct-price")
         const coin = coins[0];
         coin.onchange = ()=>{
            let A = "AOA";
            let B = "$";
            let C = "£";
            let single = "";
            if(coin.value == A){ 
                for (let i = 0; i < kwanza.length; i++) {
                     single += kwanza[i];
                } 
                price.innerHTML = single;
            }else if(coin.value == B){
                for (let i = 0; i < Dollar.length; i++) {
                    single += Dollar[i];
               } 
               price.innerHTML = single;
            }else if(coin.value == C){
                for (let i = 0; i < Euro.length; i++) {
                    single += Euro[i];
               } 
               price.innerHTML = single;
            }
        }
     }
}
  
budget_coin();



