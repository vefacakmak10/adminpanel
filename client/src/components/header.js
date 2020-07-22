import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
          
            <div >
            
            <body class="hold-transition sidebar-mini layout-fixed sidebar-collopse  style={{height}} "></body>
            
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item has-treeview">
        <a href="#" className="nav-link">
          
          <p style={{marginLeft: "40px"}}>
            Admin
            
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="/Profil" className="nav-link">
              
              <p>Profil</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Mesaj" className="nav-link">
              
              <p>Mesajlar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Admin" className="nav-link">
              
              <p>Çıkış</p>
            </a>
          </li>
          
          
        </ul>
      </li>
  </ul>
  
  
</nav>
</div>


        )
    }
}
export default Header;