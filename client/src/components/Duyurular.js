import React , {Component} from 'react'
import axios  from 'axios'

const initialState={
    username:"",
    email:"",
    phone:"",
    acıklama:"",
    usernameError:"",
    emailError:"",
    phoneError:"",
    acıklamaError:"",


};

class Duyurular extends Component {
    state= initialState ;
    
    
      getformPost = () => {
        axios.get('http://localhost:8080/api/form')
          .then((response) => {
            const data = response.data;
            console.log('Dataaaaaaaa');
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
        let usernameError="";
        let emailError="";
        let phoneError="";
        
    if(!this.state.email)
    {
        
        emailError= 'E-mail alanı zorunludur'; 
    }
    if(!this.state.username)
    {

        usernameError='Ad Soyad alanı  zorunludur';
    }
    if(!this.state.phone)
    {

        phoneError='Telefon alanı  zorunludur';
    }
    
    if(emailError || usernameError || phoneError )
    {
        this.setState({emailError,usernameError,phoneError},);
        return false
    }
   
    
    return true

    };
    handleSubmit =(e) => {
        e.preventDefault();
        const isValid   = this.validate();
        if (isValid){
            console.log(this.state);
            this.setState(initialState);
           
          
          
              axios({
                url: 'http://localhost:8080/api/save',
                method: 'POST',
                data: this.state,
              })
                .then(() => {
                  console.log('Veriler gönderildi');
                  this.getformPost();
                  
                })
                .catch(() => {
                  console.log('Internal server error');
                });;
        }
        
    };
    
    
    
    render() { 
        return(
        <div className="Form" style={{marginLeft:"350px"}}>
                <div className="row">
                    <div className="col-6">
                        <div className="section-title">
                    
                            <h3>
                            İletişim Formu
                            </h3>
                            <p>
                            Size geri dönüş yapmamız için lütfen bilgilerinizi doğru giriniz 
                            </p>
                        </div>
                    </div>
                </div>
            <form onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">
                <div>  
                    <label>
                    Ad Soyad
                    </label>
                </div>
                <div>    
                    <input type="text" name="username" value={this.state.username}  onChange={ this.handleChange } />
                    
                </div>
                <div style={{color:"red"}}>
                {this.state.usernameError}
                </div>
                <div>  
                    <label>
                    E-mail
                    </label>
                </div>
                <div style={{color:"red"}}>
                {this.state.emailError}
                </div>
                <div>    
                    <input type="text" name="email" value={this.state.email} onChange={ this.handleChange}/ >
                    
                </div> 
                <div>
                    <label>
                    Telefon
                    </label>
                </div>
                <div style={{color:"red"}}>
                {this.state.phoneError}
                </div>
                <div>    
                    <input type="Number"  required  name = "phone" value={this.state.phone} onChange={ this.handleChange} />
                </div> 
                <div>  
                    <label>
                    Açıklama
                    </label>
                </div>
                <div style={{color:"red"}}>
                {this.state.acıklamaError}
                </div>
                <div>    
                    <textarea  name="acıklama"  value={this.state.acıklama} onChange={  this.handleChange } />
                </div>
                <button Type="submit" >Kayıt</button>       
            </form> 
        </div>
        )
    }
}
export default Duyurular ; 