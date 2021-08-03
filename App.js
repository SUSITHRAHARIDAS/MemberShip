import { ProductCard } from "./Productcard"


export default function APP(){


  const Productdetails = [

{
  title: "FREE",
  price :"$0",
  features:[
  "Single User",
  "5GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports"]},

{title: "PLUS",
  price :"$9",
  features:[
  "5 User",
  "50GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports"]},
  
  {title: "PRO",
  price :"$49",
  features:[
  "Unlimited User",
  "150GB Storage",
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports"]},
  ]
  
  return(
    <>

    <h1 style ={{fontFamily:"monospace",fontWeight:"bolder",color:"skyblue",textAlign:"center"}}>PRICE CART TASK</h1>
  
  <div className="container" style={{backgroundColor:"skyblue",height:"400px",marginTop:"50px"}}>
  <div className = "row" style={{paddingTop:"20px"}}>
  {
Productdetails.map((ele)=>
<ProductCard data = {ele} ></ProductCard>)
  }


  </div>
  
  </div>


    </>
  )
}
     

  

    
   