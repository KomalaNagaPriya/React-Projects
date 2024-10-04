import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState,useEffect } from "react";

function SubCards({id}){
    let[api,setApi]=useState([])
    
    useEffect(()=>{
        let apiurl=fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=${id}`)
        apiurl.then(x=>x.json()).then(x=>setApi([x]))
    },[])
    console.log(api);
    
    return(
    
        <div id="subdiv">
            {api.map(x=>{
                console.log(x.images);
                
                return(
                    <>
                    <h1>{x.name}</h1>
                 <p>{x.subtitle}</p>
                 <div id="carousal">
                 <Carousel >
             
                 <img src={x.images[0]}  alt="image1" /> 
              
                 <img src={x.images[1]}   alt="image1" />
             
                 <img src={x.images[2]}    alt="image1" />
            
                 </Carousel>
                 </div>
                 <hr/>
                 <h5>About the Experience</h5>
                 <div id="div">{x.content}</div>
             
                    </>

                )
            })}
            </div>
              
    
    )
    
}
// Bengaluru
let  Niaboytown=()=><SubCards id="2447910730" />
let  FortSion=()=><SubCards id="1773524915" />
let  Wooddaux=()=><SubCards id="0355034513" />
let  Bageorge=()=><SubCards id="2260150453" />
let  Stonelumhawk=()=><SubCards id="1921387712" />
let  LaAnrncast=()=><SubCards id="7938812489" />
let  FortShilbluff=()=><SubCards id="2757195090" />
let  Shiwood=()=><SubCards id="3727396712" />
let  EastVyfolk=()=><SubCards id="2211420097" />

// GOA
let Perthby=()=><SubCards id="8549673097"/>
let Nesbridge1=()=><SubCards id="0610512104"/>
let KennticEnd=()=><SubCards id="7536826557"/>
let PressalCreek=()=><SubCards id="0733501601"/>
let Heathber1=()=><SubCards id="0606744025"/>
let StPlympside=()=> <SubCards id="2621544733"/>
let Lowtra=()=><SubCards id="0534597016"/>
let ChettbouAuxDersting=()=><SubCards id="7247489857"/>
let Bucktim=()=> <SubCards id="6710850298"/>
let NtibranLake=()=><SubCards id="9312138770"/>
let Warflin=()=><SubCards id="5915383379"/>

// KOLKATA

let  Thton                 =()=><SubCards id="8318638903" />
let  GrandRubouDuWagten    =()=><SubCards id="3936107807" />
let  Nesbridge2            =()=><SubCards id="8632343612" />
let  NorthGelgoon          =()=><SubCards id="2629332143" />
let  LaLakechiWithLipentage=()=><SubCards id="2212680653" />
let  AnnvirInIngsaukLake   =()=><SubCards id="1157691488" />

// Singapore

let Vangreatshot        =()=><SubCards id="0301948003" />
let PortHillslfleet     =()=><SubCards id="9419621852" />
let NewSpriha           =()=><SubCards id="2019600638" />
let GrandAshland        =()=><SubCards id="9362633268" />
let WestDgethall        =()=><SubCards id="1446001823" />
let GrandPresbir        =()=><SubCards id="0925188554" />
let Gerjuaqpool         =()=><SubCards id="5947843357" />
let GrandDinyardlodge   =()=><SubCards id="3984110059" />

//Malaysia
let  StGosmydro         =()=><SubCards id="0306928663" />
let  Sanboolburgh       =()=><SubCards id="8729187639" />
let  SterdallesannesEnd =()=><SubCards id="8047300314" />
let  Wootkentree       =()=><SubCards id="4327638849" />
let  SonkinsSands       =()=><SubCards id="9824784423" />
let  Lia                =()=><SubCards id="1371613966" />
let  NorthLdeztidsils   =()=><SubCards id="3421411190" />


// Bangkok
let NishgamInHaprnia  =()=><SubCards id="8304353098" />
let TifwalesFerry      =()=><SubCards id="5328424651" />
let Rstangbe           =()=><SubCards id="3366378787" />
let Heathber2          =()=><SubCards id="5941490724" />
let LaStonlodgecrosse  =()=><SubCards id="0101381654" />
let Pidsskebury        =()=><SubCards id="2674554670" />
let Damsvens           =()=><SubCards id="6216388298" />
let RedCragrosse       =()=><SubCards id="2273854765" />
let Og                 =()=><SubCards id="9828912080" />
let Colnehill          =()=><SubCards id="2052303734" />
let Mitsbowich         =()=><SubCards id="3396851354" />
let Mereceville        =()=><SubCards id="3409781073" />

// NewYork

let  Calnyonnenfield      =()=><SubCards id="6302945339" />
let  Nazachester          =()=><SubCards id="0453764985" />
let  Bucktim2             =()=><SubCards id="1248029271" />
let  MountVil             =()=><SubCards id="0103492831" />
let  Bridbouwispoon       =()=><SubCards id="5568011370" />
let  Darrondsor           =()=><SubCards id="8138418941" />
let  Lonsmathxbu          =()=><SubCards id="8993280816" />
let  Lowtra1              =()=><SubCards id="9536498117" />


// Paris
let  NorthVenwar          =()=><SubCards id="2008775850" />
let  UlgreenUponPockporth =()=><SubCards id="6905241907" />
let  BoltrailInRoyamoor   =()=><SubCards id="5770077080" />
let  GrandDinyardlodge1   =()=><SubCards id="6298356896" />
let  Nia                  =()=><SubCards id="3365319720" />
let  WestMarsh            =()=><SubCards id="9680463758" />
let  Paultra             =()=><SubCards id="5244806429" />
let  Pidsspa             =()=><SubCards id="3077909052" />
let  Milgee              =()=><SubCards id="5308549680" />


export { 
// Bengaluru
    Niaboytown,
    FortSion,
    Wooddaux,
    Bageorge,
    Stonelumhawk,
    LaAnrncast,
    FortShilbluff,
    Shiwood,
    EastVyfolk,   
    
//Goa
    Perthby,
    Nesbridge1,
    KennticEnd,
    PressalCreek,
    Heathber1,
    StPlympside,
    Lowtra,
    ChettbouAuxDersting,
    Bucktim,
    NtibranLake,
    Warflin,

    // Kolkata
    Thton,           
    GrandRubouDuWagten,
    Nesbridge2,
    NorthGelgoon,
    LaLakechiWithLipentage,
    AnnvirInIngsaukLake, 

    // Singapore
    Vangreatshot ,    
    PortHillslfleet  ,
    NewSpriha        ,
    GrandAshland     ,
    WestDgethall     ,
    GrandPresbir     ,
    Gerjuaqpool      ,
    GrandDinyardlodge,

// Malaysia
    StGosmydro        ,
    Sanboolburgh      ,
    SterdallesannesEnd,
    Wootkentree       ,
    SonkinsSands      ,
    Lia               ,
    NorthLdeztidsils  ,

// Bakok
    NishgamInHaprnia ,
    TifwalesFerry    ,
    Rstangbe         ,
    Heathber2        ,
    LaStonlodgecrosse,
    Pidsskebury      ,
    Damsvens         ,
    RedCragrosse     ,
    Og               ,
    Colnehill        ,
    Mitsbowich       ,
    Mereceville      ,
            
// Newyork
    Calnyonnenfield ,    
    Nazachester         ,
    Bucktim2            ,
    MountVil            ,
    Bridbouwispoon      ,
    Darrondsor          ,
    Lonsmathxbu         ,
    Lowtra1             ,
// Paris
    NorthVenwar         ,
    UlgreenUponPockporth,
    BoltrailInRoyamoor  ,
    GrandDinyardlodge1  ,
    Nia                 ,
    WestMarsh           ,
    Paultra             ,
    Pidsspa             ,
    Milgee              ,
            }