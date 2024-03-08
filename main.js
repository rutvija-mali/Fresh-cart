let popularProducts = document.getElementById('popularProducts');
let addedProducts = document.querySelector('.addtoCart')
let totalPriceDisplay = document.querySelector('.subtotal');
let totalCartIteams = document.getElementById('totalCartIteams')
let counter = document.querySelectorAll('.counter')
let days = document.querySelectorAll('.days')
let hours = document.querySelectorAll('.hours')
let minutes = document.querySelectorAll('.minutes')
let seconds = document.querySelectorAll('.seconds')
let whishlist = document.querySelector('.whishlist')
let  whishlistTotalItems = document.querySelector("#whishlistTotalItems")



const products=[
    {
        id:1,
        name:"Haldiram's Sev Bhujiya",
        desc:"Snacks & Munchies",
        stock:10,
        price:18,
        actualPrice :24,
        qty:0
    },
    {
        id:2,
        name:"NutriChoice Digestive",
        desc:"Bakery & Buiscuits",
        stock:8,
        price:24,
        actualPrice:"",
        qty:0
    },
    {
        id:3,
        name:"5 Star Chocolate",
        desc:"Bakery & Buiscuits",
        stock:9,
        price:32,
        actualPrice:35,
        qty:0
    },
    {
        id:4,
        name:"Onion Flavour Potato",
        desc:"Snacks & Munchies",
        stock:10,
        price:3,
        actualPrice:5,
        qty:0
    },
    {
        id:5,
        name:"Salted instant popcorn",
        desc:"Instant food",
        stock:5,
        price:13,
        actualPrice:18,
        qty:0
    },
    {
        id:6,
        name:"Blueberry Greek Yogurt",
        desc:"Dairy, Bread & Eggs",
        stock:6,
        price:18,
        actualPrice:24,
        qty:0
    },
    {
        id:7,
        name:"Britannia Cheese Slices",
        desc:"Dairy, Bread & Eggs",
        stock:7,
        price:24,
        actualPrice:"",
        qty:0
    },
    {
        id:8,
        name:"Kellog's original cereals",
        desc:"Instant Food",
        stock:8,
        price:32,
        actualPrice:35,
        qty:0
    },
    {
        id:9,
        name:"Slurrp Millet Chocolate",
        desc:"Snacks & Munchies",
        stock:9,
        price:3,
        actualPrice:5,
        qty:0
    },
    {
        id:10,
        name:"Amul Butter - 500g",
        desc:"Dairy, Bread & Eggs",
        stock:10,
        price:13,
        actualPrice:18,
        qty:0
    }
]

displayProduct();
let cart = JSON.parse(localStorage.getItem("localStorageItems")) || [];
updateCart();

function renderSubtotal(){
   let TotalPrice =0;
   let TotalItems = 0;
   cart.forEach((item)=>{
    TotalPrice += item.price*item.qty
    TotalItems += item.qty
   })
    
   totalPriceDisplay.innerHTML = `Total price (${TotalItems} items) : <h5 class ="d-inline">$${TotalPrice}</h5> `
 

}




// functions 

function displayProduct()
{
    products.forEach((product)=>{
        popularProducts.innerHTML += `  <div class="col">
        <div class="card">
            <div class="card-body ">
               <div class="text-center position-relative mb-4">
                  <a href="#" ><img src= "images/images/${product.id}.jpg "alt="product-pitcher" class="img-fluid"></a>
                  <div class="product-action d-flex justify-content-center mt-5 gap-1 position-absolute top-50 start-50 bottom-50 end-50  " tabindex="-1">
                    <a href="#"  class="px-2 btn " data-bs-toggle = "tooltip" data-bs-placement="top" title="Quick View" ><i class="bi bi-eye" ></i></a>
                    <a href="#"  class="px-2 btn " data-bs-toggle = "tooltip" data-bs-placement="top" title="Whishlist" onclick="addWishList(${product.id})"><i class="bi bi-heart"></i></a>
                    <a href="#"  class="px-2 btn " data-bs-toggle = "tooltip" data-bs-placement="top" title="Compare"><i class="bi bi-arrow-left-right"></i></a>
                  </div>
               </div>
              
                 <a href="#" class="text-decoration-none text-muted "><small>${product.desc}</small></a>
               
               <h3><a href="#" class="fs-6 text-decoration-none :hover-up">${product.name}</a></h3>
               <div>
                  <div class="small ">
                    <small>
                        <i class=" fa-solid fa-star text-warning"></i>
                        <i class=" fa-solid fa-star text-warning"></i>
                        <i class=" fa-solid fa-star text-warning"></i>
                        <i class=" fa-solid fa-star text-warning"></i>
                        <i class=" fa-solid fa-star-half-stroke text-warning"></i>
                        <span class="text-muted">4.5</span>
                    </small>
                    
                  </div>
               </div>
                <div class="d-flex justify-content-between align-items-center ">
                    <div >
                        <span class="text-dark me-1">$${product.price}</span>
                        <span class="text-decoration-line-through text-muted">${product.actualPrice}</span>
   
                    </div>
                    <div class="d-grid mt-2 ">
                        <a href="#!" class="btn   d-flex align-items-center gap-1"  onclick="addToCart(${product.id})">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                           </svg>
                           Add 
                        </a>
                     </div>
                </div>
                
            </div>
        </div>
    </div> `

    })
}
function addToCart(id){

    if(cart.some((item)=>item.id === id)){
       
        changeQty('plus',id);
    }else

    {
       
      let item = products.find((product)=>product.id === id)
        item.qty = 1;
        cart.push(item);
        updateCart();
    }
}


 function changeQty(status,id)
 {

    cart.map((item)=>{
        let qty = item.qty

        if(item.id == id){
            if(status == "minus" && qty>=1)
            {
                console.log("minus");
                qty--;
            }
            else
            if(status == "plus" && qty <= item.stock){

                qty++;
            }

            item.qty = qty ;

        }return  {
            ...item,
            qty,
        }

        
        
            

        
    })
    updateCart();
 }

 function updateCart()
{
   
   localStorage.setItem("localStorageItems",JSON.stringify(cart));
   renderSubtotal();
   renderToCart();
   updateNoOfItems();
}
 function updateNoOfItems()
 {
    let Qty = 0;
    totalCartIteams.innerHTML+=""
     cart.forEach((item)=>{
        
            Qty += item.qty
        
     })
     
     totalCartIteams.innerHTML += `${Qty}`
 }
function renderToCart(){
   
    addedProducts.innerHTML = ""
   cart.forEach((item)=>{
  
        addedProducts.innerHTML +=  ` 
        
                <tr>
                    <td><img src= "images/images/${item.id}.jpg "alt="product-pitcher" style="width:50px;height:50px" class="img-fluid"></td>
                    <td><p style="font-size:12px" class="text-start">${item.name}</p></td>
                    <td><span class="text-dark me-1"><small>$${item.price}</small></span></td>
                    <td>
                    <small>
                        <i class="bi bi-plus-circle" class="p-1" onclick= "changeQty('plus',${item.id})"></i>
                        ${item.qty}
                        <i class="bi bi-dash-circle" onclick= "changeQty('minus',${item.id})"></i>
                    </small>
                    </td>
                    <td><i class="bi bi-trash3" onclick="removeItems(${item.id})" ></i></td>
                </tr>
          
        `
    })
  
   
}

function removeItems(id){

    cart = cart.filter((item)=>item.id != id)
   
    updateCart();
}



const targetDate = new Date("2024-12-31T00:00:00");

updateTime();

function updateTime()
{
    let currentDate = new Date();
    let timeDifference = targetDate - currentDate;
    if(timeDifference>0)
    {
        let day = Math.floor(timeDifference/(1000 * 60 * 60 * 24));
        let hour =  Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute =  Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let second =  Math.floor((timeDifference % (1000 * 60)) / 1000)

        days.forEach((item)=>{
            item.innerHTML = `${day}`;
        })
        hours.forEach((item)=>{
            item.innerHTML = `${hour}`;
        })
        minutes.forEach((item)=>{
            item.innerHTML = minute;
        })
        seconds.forEach((item)=>{
            item.innerHTML = second;
        })
        setTimeout(updateTime , 1000);
    }

}

// whistlist
let whishedItem = JSON.parse(localStorage.getItem("WhishListArray"))|| []
updateWishList();

displayWhishList();

function addWishList(id)
{
   if(whishedItem.some((item)=>item.id == id))
   {
    return
   }else
   {
    let item = products.find((product)=> product.id == id)
      whishedItem.push(item);
     
     
   }
   updateWishList();
}


function updateWishList()
{
    localStorage.setItem("WhishListArray",JSON.stringify(whishedItem))
    displayWhishList();
    updateNoOfLike();
}


function displayWhishList()
{
    whishlist.innerHTML = ""
   whishedItem.forEach((item)=>{
    
    whishlist.innerHTML += `  
    <tbody>
        <tr  class = "align-middle ">
            <td><img src= "images/images/${item.id}.jpg "alt="product-pitcher" style="width:50px;height:50px" class="img-fluid"></td>
            <td><p style="font-size:12px" class="text-start ">${item.name}</p></td>
            <td ><span class="text-dark  "><small class="text-start">$${item.price}</small></span></td>
            <td >
               <div class = "d-flex justify-content-center   align-item-center  ">
               <a href="!#" class="btn btn-sm " style="background-color: var(--green); color: var( --white); outline: none;" onclick="addToCart(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                        Add 
               </a>
               </div>
            </td>
            <td><i class="bi bi-trash3" onclick="removeWhishListItems(${item.id})" ></i></td>
        </tr>
    </tbody>
 `

    })
}
function removeWhishListItems(id)
{
  
    whishedItem = whishedItem.filter((item)=>item.id != id)
    updateWishList();
  
}



function updateNoOfLike()
{
   let like = 0;
   whishlistTotalItems.innerHTML = '';
   whishedItem.forEach((item)=> 
      
       like++
   
   )
   whishlistTotalItems.innerHTML += `${like}`
     
}