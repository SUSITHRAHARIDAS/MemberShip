

export function ProductCard(props){
  
  return(
    <>
    <div className ="col-lg-4">
    <div class="card " style={{borderRadius:"20px"}}> 
          <div class="card-body"> 
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
            <h6 class="card-price text-center">{props.data.price}<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            
              <button  style={{width:"100%",borderRadius:"20px"}} class="btn btn-primary text-uppercase">Button</button>
   
              </div>
   
   </div>
              </div>
   
   
  </>  
  )
}


function App() {
  const products = [
    {
      title:"Free",
      price:"$0",
      features: ["Single User",
     " 5GB Storage",
      "Unlimited Public Projects",
     " Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
     " Free Subdomain",
      "Monthly Status Reports"]
    },
    {
      title:"Plus",
      price:"$9",
      features: ["Single User",
     " 5GB Storage",
      "Unlimited Public Projects",
     " Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
     " Free Subdomain",
      "Monthly Status Reports"]
    },
    {
      title:"Pro",
      price:"$49",
      features: ["Single User",
     " 5GB Storage",
      "Unlimited Public Projects",
     " Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
     " Free Subdomain",
      "Monthly Status Reports"]
    },
    

  ]

  
  return(
    <>
     <h1 style={{textAlign:"center",color:"skyblue",fontFamily:"monospace"}}>PRICING CART TASK</h1>
  <div className="container" style={{backgroundColor:'skyblue',height:"400px",marginTop:"30px"}}>
    <div className="row" style={{paddingTop:"20px"}}>
    
     { products.map((ele)=>
     <ProductCard data={ele} ></ProductCard>)
      
     }  

    
    </div>

    </div> 

   


  </>
  )
  
}

export default App;