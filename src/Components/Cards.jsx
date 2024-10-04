import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
  
export default function Cards(){
  let [apidata,setApi]=useState([])
      
  useEffect(()=>{
    let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    api.then(x=>x.json()).then(arr=>setApi(arr)).catch(e=>console.log(e))
  },[])
      
  return(
    <div id="carddiv">
      {apidata.map((x,y)=>{
        return(
          <div key={y} className='card'>
            <Link to={"/"+x.id}><img src={x.image} alt="cities"/></Link>
            <div className='carddata'>
              <h5 className='cdh5'>{x.city.toUpperCase()}</h5>
              <p className='cdp'>{x.description.toUpperCase()}</p>
            </div>
          </div>)})}
    </div>)
  }





// Class coomponent without object
// import React from 'react';
// import {Link} from 'react-router-dom'
// export default class Cards extends React.Component{
//    constructor(props){
//     super(props)
//     this.state={
//       apidata:[]
//     }
//     console.log(this.state.api)
//   }
//     componentDidMount(){
//       let api=fetch("http://localhost:3001/cities");
//       console.log(api);
      
//       api.then(x=>x.json()).then(x=>{
//         console.log(x);
//         this.setState({apidata:x})
//       })
//       api.catch(e=>console.log(e));

//     console.log(this.state.apidata);
//    }
//    render(){return(
//             <div id="div2"> 
              
//               <div className ="tile">
//                 <Link to="/bengaluru">
//                   <img  src="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/>
//                   </Link>
//                   <div className="tdata">
//                   <h5 className="tdh5">BENGALURU</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
                
            
            
//               <div className="tile">
//               <Link to="/goa">
//                 <img  src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/>
//                 </Link>
//                 <div className="tdata">
//                   <h5 className="tdh5">GOA</h5>
//                   <p className="tdp">250+ PLACES</p>
//                   </div>
//                 </div>
//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">KOLKATA</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
        
//               <div className="tile">
              
//                 <img  src="https://i.ibb.co/WVL7n8K/singapore.jpg"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">SINGAPORE</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
            
            
//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/2940925/pexels-photo-2940925.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">MALAYSIA</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                   </div>
            
            
//               <div className="tile">
              
//                 <img className="img-responsive" src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?cs=srgb&amp;dl=pexels-ingo-joseph-1682748.jpg&amp;fm=jpg"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">BANGKOK</h5>
//                   <p className="tdp">250+ PLACES</p>
//                   </div>
//                 </div>

//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">NEW YORK</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
            
          
//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">PARIS</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
            
          
      
    
//             </div>
//         )
//     }
// }

