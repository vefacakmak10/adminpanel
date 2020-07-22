import React, { Component } from 'react'
import axios  from 'axios'



const initialState={
    username:"",
    password:"",
    usernamedb:[],
    passworddb:[],
};


 class Admin extends Component {
     
    state= initialState ;
    getUser = () => {
        axios.get('http://localhost:8080/api')
          .then((response) => {
            let usernamedb;
            let passworddb;
            const data = response.data;
            for(var i=0 ; i< data.length ; i++){
            usernamedb=data[i].username;
            
            passworddb=data[i].password;
            this.setState({usernamedb}) ;
            this.setState({passworddb}) ;}
            console.log('Data has been received!!');
            console.log(usernamedb);    
            
            console.log(passworddb);
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
  
   
    handleChange= (e) => {
        this.setState({
           [e.target.name] : e.target.value ,
        })
    };
    validate = () => {
        
        if(!this.state.username || !this.state.usernamedb || !this.state.password || !this.state.passworddb){
            console.log("basarısız")
        }
        else {
        if(this.state.username == this.state.usernamedb && this.state.password == this.state.passworddb) {
            console.log("giris basarılı") ;
            return true 
        
        }
        else{
            console.log("basarısız")
            return false
        }
    }
        
    };
    handleSubmit =(e) => {
        e.preventDefault();
        
        const isValid = this.validate();
        if (isValid)
        {
        
         
        console.log(this.state);
        this.setState(initialState);  }
        
    };
    onClick = (e) => {
        e.preventDefault();
        this.getUser();
        
    };
       
       
          
        /*axios({
                url: 'http://localhost:8080/api/save',
                method: 'POST',
                data: this.state,
                                
              })
                .then(() => {
                  console.log('user verisi gönderildi');
                  
                  
                  
                })
                .catch(() => {
                  console.log('Internal server error');
                });;
        
        
     */
    

       
    
     

      
    render() {
        return (
            
            <div className="Form" style= {{marginLeft:"350px"}}>
               
        
                
            <form  onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">
                <div>  
                    <label style={{fontSize:"15px"}}>
                    Ad Soyad
                    </label>
                </div>
                <div>    
                    <input onClick={this.onClick} type="text" name="username" value={this.state.username}  onChange={ this.handleChange } />
                    
                </div>
                
                <div>  
                    <label style={{fontSize:"15px"}}>
                   Sifre
                    </label>
                </div>
                
                <div>    
                    <input type="password" name="password" value={this.state.password} onChange={ this.handleChange}/ >
                    
                </div> 
                <div className="nav-item" >
                
                <button style={{marginTop:"25px"}} Type="submit">Giriş</button>
                
                 </div>
                      
            </form> 
        </div>
        )
    }
}
export default Admin ; 
