  import React, { Component } from 'react'
  import axios  from 'axios'
  
const initialState={
    toplamBasvuru:"",
    gecerliBasvuru:"",
    gecersizBasvuru:"",
    username:[],
    password:[],
    phone:[],
    acıklama:[],


    
};

  
  class Anasayfa extends Component {
    state= initialState ;

    
     
    sayiAlım = () => {
        axios.get('http://localhost:8080/api/form')
          .then((response) => {
            let toplamBasvuru;
            let gecersizBasvuru;
            let gecerliBasvuru;
            var u = 0;
            var b = 0;
            

            const data = response.data;
            for(var i=0 ; i< data.length ; i++){
               
               
                if(data[i].acıklama == "" || data[i].username == "" || data[i].password == ""|| data[i].phone == ""   ){
                    var u = u + 1 ;
                    console.log ( u ) ; 

                }   
                    
                
            }
            toplamBasvuru=data.length ;
            gecersizBasvuru=u;
            b= data.length-u ;
            gecerliBasvuru = b ;
           
            
            this.setState({toplamBasvuru});
            this.setState({gecerliBasvuru});
            this.setState({gecersizBasvuru})
            console.log(toplamBasvuru);
            
           
            
            
           
            console.log('anasayfaaaa!!');
            
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
      onClick = (e) => {
        e.preventDefault();
        this.sayiAlım();
        
        
    };
      
      render() {
          return (
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                    <div className="inner">
                    <h3> {this.state.toplamBasvuru}</h3>
                    <p>Tüm Başvular</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-bag" />
                    </div>
                    <a href="/Tümbasvuru" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
                </div>
                <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                    <div className="inner">
                    <h3>{this.state.gecerliBasvuru}</h3>
                    <p>Geçerli başvuru</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-stats-bars" />
                    </div>
                    <a href="/Gecerli" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
                </div>
                <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                    <div className="inner">
                    <h3>{this.state.gecersizBasvuru}</h3>
                    <p>Geçersiz başvuru </p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-person-add" />
                    </div>
                    <a href="/Gecersiz" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
                </div>
                <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                    <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
                <div>
                <button style={{marginTop:"25px"}} Type="submit" onClick={this.onClick}  >Güncelle</button>
                </div>
                </div>
                </div>
                </div>

            
          )
      }
  }
  export default Anasayfa ;
  