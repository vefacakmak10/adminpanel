import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

 class Sidebar extends Component {
    render() {
        return (
 
            
            <aside className="main-sidebar sidebar-dark-primary elevation-10">

           <div className="sidebar">
          
  {/* Sidebar user panel (optional) */}
  
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <img src="./img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
    </div>
    <div className="info">
      <a href="#" className="d-block">Alexander Pierce</a>
    </div>
  </div>
  {/* SidebarSearch Form */}
  <div className="form-inline">
    <div className="input-group" data-widget="sidebar-search">
      <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-sidebar">
          <i className="fas fa-search fa-fw" />
        </button>
      </div>
    </div>
  </div>
  {/* Sidebar Menu */}
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
      <li className="nav-item ">
        <a href="/Anasayfa" className="nav-link ">
          <i className="nav-icon fas fa-tachometer-alt" />
          <p>
            Anasayfa
            
          </p>
        </a>
        
           
      </li>
               
      <li className="nav-item">
        <a href="/kullanıcılar" className="nav-link">
          <i className="nav-icon fas fa-th" />
          <p>
            Kullanıcılar
            
          </p>
        </a>
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-copy" />
          <p>
            İsbasvuru
            <i className="fas fa-angle-left right" />
            <span className="badge badge-info right">6</span>
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="/Tümbasvurular" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Tüm Basvurular</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Hızlıdegerlendir" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Hızlı değerlendir</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Gecerli" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Geçerli</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Gecersiz" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Geçersiz</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Kisiarama" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Kişi arama</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Tcilearama" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Tc ile kişi arama</p>
            </a>
          </li>
          
        </ul>
      </li>
      <li className="nav-item has-treeview">
        <a href="/Duyurular" className="nav-link">
          <i className="nav-icon fas fa-chart-pie" />
          <p>
            Duyurular
            
          </p>
        </a>
      
      </li>
      <li className="nav-item has-treeview">
        <a href="/icerik" className="nav-link">
          <i className="nav-icon fas fa-tree" />
          <p>
               İçerik
           
          </p>
        </a>
       
      </li>
      <li className="nav-item has-treeview">
        <a href="/Slider" className="nav-link">
          <i className="nav-icon fas fa-edit" />
          <p>
            Slider
            
          </p>
        </a>
        
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-table" />
          <p>
            Dosyalar
            
          </p>
        </a>
        
      </li>
      
      <li className="nav-item">
        <a href="pages/calendar.html" className="nav-link">
          <i className="nav-icon far fa-calendar-alt" />
          <p>
               İş Pozisyonları
            
          </p>
        </a>
      </li>
      <li className="nav-item">
        <a href="pages/gallery.html" className="nav-link">
          <i className="nav-icon far fa-image" />
          <p>
           Ehliyet
          </p>
        </a>
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon far fa-envelope" />
          <p>
            Eğitim
            
          </p>
        </a>
        
      </li>
      <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-book" />
          <p>
            Mesaj
            
          </p>
        </a>
        
      </li>
      
      
    </ul>
  </nav>
</div>


</aside>

   
  

                
          
        )
    }
}
export default Sidebar ;
