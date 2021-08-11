

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
              <li><span class="fa-li"><i class={props.data.icon.icon1}></i></span>{props.data.features.Point1}</li>
              <li><span class="fa-li"><i class={props.data.icon.icon2}></i></span>{props.data.features.Point2}</li>
              <li><span class="fa-li"><i class={props.data.icon.icon3}></i></span>{props.data.features.Point3}</li>
              <li><span class="fa-li"><i class={props.data.icon.icon4}></i></span>{props.data.features.Point4}</li>
              <li ><span class="fa-li"><i class={props.data.icon.icon5}></i></span>{props.data.features.Point5}</li>
              <li ><span class="fa-li"><i class={props.data.icon.icon6}></i></span>{props.data.features.Point6}</li>
              <li ><span class="fa-li"><i class={props.data.icon.icon7}></i></span>{props.data.features.Point7}
              </li>
              <li ><span class="fa-li"><i class={props.data?.icon.icon8}></i></span>{props.data.features.Point8}
                </li>
            </ul>
            
              <button  style={{width:"100%",borderRadius:"20px"}} class="btn btn-primary text-uppercase">Button</button>
   
              </div>
   
   </div>
              </div>
   
   
  </>  
  )
}


