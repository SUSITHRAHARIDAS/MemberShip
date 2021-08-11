import react from "react";
import {ProductCard} from "./Productcard"


function App() {
    const products = [
      {
        title:"Free",
        price:"$0",
        features: { Point1:"Single User",
        Point2 :" 5GB Storage",
        Point3: "Unlimited Public Projects",
        Point4 :" Community Access",
        Point5 :"Unlimited Private Projects",
        Point6 :"Dedicated Phone Support",
        Point7 :" Free Subdomain",
        Point8 :"Monthly Status Reports"},
      
      icon : {
        icon1 : "fas fa-check",
        icon2: "fas fa-check",
        icon3:"fas fa-check",
        icon4: "fas fa-check",
        icon5:"fas fa-times",
        icon6:"fas fa-times",
        icon7:"fas fa-times",
        icon8:"fas fa-times",

      }
    },
      {
        title:"Plus",
        price:"$9",
        features:{ Point1:"5 Users",
        Point2 :" 5GB Storage",
        Point3: "Unlimited Public Projects",
        Point4 :" Community Access",
        Point5 :"Unlimited Private Projects",
        Point6 :"Dedicated Phone Support",
        Point7 :" Free Subdomain",
        Point8 :"Monthly Status Reports"},
        icon : {
          icon1 : "fas fa-check",
          icon2: "fas fa-check",
          icon3:"fas fa-check",
          icon4: "fas fa-check",
          icon5:"fas fa-check",
          icon6:"fas fa-check",
          icon7:"fas fa-check",
          icon8:"fas fa-times",
  
        }
      },
      {
        title:"Pro",
        price:"$49",
        features: { Point1:"Unlimited Users",
        Point2 :" 5GB Storage",
        Point3: "Unlimited Public Projects",
        Point4 :" Community Access",
        Point5 :"Unlimited Private Projects",
        Point6 :"Dedicated Phone Support",
        Point7 :"Unlimited Free Subdomain",
        Point8 :"Monthly Status Reports"},
        icon : {
          icon1 : "fas fa-check",
          icon2: "fas fa-check",
          icon3:"fas fa-check",
          icon4: "fas fa-check",
          icon5:"fas fa-check",
          icon6:"fas fa-check",
          icon7:"fas fa-check",
          icon8:"fas fa-check",
          
  
        }
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
