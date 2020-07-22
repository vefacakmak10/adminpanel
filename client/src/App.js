import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Anasayfa from './components/Anasayfa'
import Isbasvuru from './components/İsbasvuru'
import Kullanıcılar from './components/Kullanıcılar'
import Duyurular from './components/Duyurular'
import Icerik from './components/İcerik'
import Slider from './components/Slider'
import Dosyalar from './components/Dosyalar'
import Ispozisyonları from './components/İspozisyonları'
import Ehliyet from './components/Ehliyet'
import Egitim from './components/Egitim'
import Mesaj from './components/Mesaj'
import Baslangıc from './components/Baslangıc'
import Header from './components/header'
import Admin from './components/Admin'

function App() {
  return (
    <BrowserRouter> 
    <div id="wrapper">
    
    <Header/> 
    <Sidebar/>
    <Switch>
      <Route exact path='/'  component = {Baslangıc} />
      <Route exact   path='/Anasayfa' component={Anasayfa}  />
      <Route exact  path='/isbasvuru' component={Isbasvuru}  />
      <Route exact  path='/kullanıcılar' component={Kullanıcılar}  />
      <Route exact  path='/duyurular' component={Duyurular}  />
      <Route exact  path='/icerik' component={Icerik} />
      <Route exact  path='/slider' component={Slider} />
      <Route exact  path='/dosyalar' component={Dosyalar} />
      <Route  exact path='/ispozisyonları' component={Ispozisyonları} />
      <Route exact   path='/ehliyet' component={Ehliyet} />
      <Route  exact path='/egitim' component={Egitim} />
      <Route  exact  path='/mesaj' component={Mesaj} />
      <Route  exact  path='/admin' component={Admin} />
      
      
      
      
      
     
      
      
      </Switch>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
