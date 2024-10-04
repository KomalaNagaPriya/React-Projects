import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import QtripHome from './QtripHome';
import Error from '../Pages/ErrorPage';
import Register from '../Pages/RegistrationPage';
import Login from '../Pages/LoginPage';

import {Bengaluru,Goa,Kolkata,Singapore,Malaysia,Bangkok,NewYork,Paris
} from '../Pages/MainPages'

import { 
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
   
// Goa 
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
    PortHillslfleet,
    NewSpriha,
    GrandAshland,
    WestDgethall,
    GrandPresbir,
    Gerjuaqpool,
    GrandDinyardlodge,

    // Malaysia
    StGosmydro ,
    Sanboolburgh ,
    SterdallesannesEnd,
    Wootkentree ,
    SonkinsSands ,
    Lia ,
    NorthLdeztidsils,
    
    // Bangkok
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


    // NewYork
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
            } from '../Pages/Subpages'
export default class App extends React.Component{
    render(){
        return(
            
    <BrowserRouter>
        <Navbar/>
        <Routes>
            
            <Route path="/" element={<QtripHome/>}/>
            <Route path='/*' element={<Error/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/login' element={<Login/>}/>

            {/* BENGALURU */}
            <Route path="/bengaluru" element={<Bengaluru/>}/>
            {/* Bengaluru Sub pages */}
            <Route path="/Niaboytown" element={<Niaboytown/>}/>
            <Route path="/Fort Sionnnn" element={<FortSion/>}/>
            <Route path="/Wooddaux" element={<Wooddaux/>}/>
            <Route path="/Bageorge With Nonshi Harbour" element={<Bageorge/>}/>
            <Route path="/Stonelumhawk" element={<Stonelumhawk/>}/>
            <Route path="/La Anrncast" element={<LaAnrncast/>}/>
            <Route path="/Fort Shilbluff" element={<FortShilbluff/>}/>
            <Route path="/Shiwood" element={<Shiwood/>}/>
            <Route path="/East Vyfolk" element={<EastVyfolk/>}/>

            {/* GOA */}
            <Route path='/goa' element={<Goa/>}/>
            {/* Goa Sub pages */}
            <Route path='/Perthby' element={<Perthby/>}/>
            <Route path='/Nesbridge' element={<Nesbridge1/>}/>
            <Route path='/KennticEnd' element={<KennticEnd/>}/>
            <Route path='/PressalCreek' element={<PressalCreek/>}/>
            <Route path='/Heathber' element={<Heathber1/>}/>
            <Route path='/StPlympside' element={<StPlympside/>}/>
            <Route path='/Lowtra' element={<Lowtra/>}/>
            <Route path='/ChettbouAuxDersting' element={<ChettbouAuxDersting/>}/>
            <Route path='/Bucktim' element={<Bucktim/>}/>
            <Route path='/NtibranLake' element={<NtibranLake/>}/>
            <Route path='/Warflin' element={<Warflin/>}/>   

            {/*KOLKATA  */}
            <Route path='/kolkata' element={<Kolkata/>} />
            {/* Kolkata Sub pages */}
            <Route path='/Thton' element={<Thton/>}/>
            <Route path='/Grand Rubou Du Wagten' element={<GrandRubouDuWagten/>}/>
            <Route path='/Nesbridge' element={<Nesbridge2/>}/>
            <Route path='/North Gelgoon' element={<NorthGelgoon/>}/>
            <Route path='/La Lakechi With Lipentage' element={<LaLakechiWithLipentage/>}/>
            <Route path='/Annvir-In-Ingsauk Lake' element={<AnnvirInIngsaukLake/>}/>
             

             {/* Singapore */}
            <Route path='/singapore' element={<Singapore/>} />
            {/* Singapore Sub pages */}
            <Route path='/Vangreatshot' element={< Vangreatshot/>}/>
            <Route path='/PortHillslfleet' element={< PortHillslfleet/>}/>
            <Route path='/NewSpriha' element={< NewSpriha/>}/>
            <Route path='/GrandAshland' element={< GrandAshland/>}/>
            <Route path='/WestDgethall' element={< WestDgethall/>}/>
            <Route path='/GrandPresbir' element={<GrandPresbir/>} />
            <Route path='/Gerjuaqpool' element={<  Gerjuaqpool/>}/>
            <Route path='/GrandDinyardlodge' element={< GrandDinyardlodge/>}/>
            
            
            {/* Malaysia */}
            <Route path='/malaysia' element={<Malaysia/>} />
            {/* Malaysia Sub pages */}
            <Route path='/St Gosmydro' element={<StGosmydro/>} />
            <Route path='/Sanboolburgh' element={<Sanboolburgh/>} />
            <Route path='/Sterdallesannes End' element={<SterdallesannesEnd/>} />
            <Route path='/Wootkentree' element={<Wootkentree/>} />
            <Route path='/Sonkins Sands' element={<SonkinsSands/>} />
            <Route path='/Lia' element={<Lia/>} />
            <Route path='/NorthLdeztidsils' element={<NorthLdeztidsils/>} />
            

            {/* Bangkok */}
            <Route path='/bangkok' element={<Bangkok/>} />
            {/* Bangkok Sub pages */}
            <Route path='/Nishgam-In-Haprnia' element={<NishgamInHaprnia/>} />
            <Route path='/Tifwales Ferry' element={<TifwalesFerry/>} />
            <Route path='/Rstangbe' element={<Rstangbe/>} />
            <Route path='/Heathber' element={<Heathber2/>} />
            <Route path='/La Stonlodgecrosse' element={<LaStonlodgecrosse/>} />
            <Route path='/Pidsskebury' element={<Pidsskebury/>} />
            <Route path='/Damsvens' element={<Damsvens/>} />
            <Route path='/Red Cragrosse' element={<RedCragrosse/>} />
            <Route path='/Og' element={<Og/>} />
            <Route path='/Colnehill' element={<Colnehill/>} />
            <Route path='/Mitsbowich' element={<Mitsbowich/>} />
            <Route path='/Mereceville' element={<Mereceville/>} />

            {/* New York */}
            <Route path='/new-york' element={<NewYork/>} />
            {/* NewYork Sub pages */}
            <Route path='/Calnyonnenfield' element={< Calnyonnenfield/>}/>
            <Route path='/Nazachester' element={<Nazachester />}/>
            <Route path='/Bucktim' element={<Bucktim2 />}/>
            <Route path='/Mount Vil' element={< MountVil />}/>
            <Route path='/Bridbouwispoo' element={< Bridbouwispoon/>}/>
            <Route path='/Darrondsor' element={<Darrondsor />}/>
            <Route path='/Lonsmathxbu' element={<Lonsmathxbu />}/>
            <Route path='/Lowtra' element={< Lowtra1  />}/>
            
            
            
            {/* Paris */}
            <Route path='/paris' element={<Paris/>} />
            {/* Paris Subpages */}
            <Route path='/North Venwar' element={< NorthVenwar />}/>
            <Route path='/Ulgreen Upon Pockporth' element={<UlgreenUponPockporth/>}/>
            <Route path='/Boltrail-In-Royamoor' element={<BoltrailInRoyamoor/>}/>
            <Route path='/Grand Dinyardlodge1' element={<GrandDinyardlodge1/>}/>
            <Route path='/Nia' element={<Nia />}/>
            <Route path='/West Marsh' element={<WestMarsh />}/>
            <Route path='/Paultra' element={< Paultra/>}/>
            <Route path='/Pidsspa' element={<Pidsspa />}/>
            <Route path='/Milgee' element={< Milgee />}/>
            

        </Routes>
        <Footer/>
        </BrowserRouter>

            
            
        )
    }
}
