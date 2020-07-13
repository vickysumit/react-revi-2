import React,{Component} from 'react';
import {Form, FormGroup, Col, Input, Label,Button} from 'reactstrap';
class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            telnum:"",
            agree:true,
            touched: {
                firstname:"",
                lastname:"",
                email:"",
                telnum:""
            }
        };
        this.hadleInputChange = this.hadleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBlur(field) => (evt) => {
        this.setState({
            ...to
        })
    }
    
    hadleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });

    }
    handleSubmit(event){
        console.log("current value = " + JSON.stringify(this.state));
        alert("current value = " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                <div className="col-12 col-md-9">

                <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="firstname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                 value={this.state.firstname} onChange={this.hadleInputChange} /> 
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="lastname" md={2}>
                                Last Name
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}
                                onChange={this.hadleInputChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                        <Label htmlFor="telnum" md={2}>
                                TelNum
                            </Label>
                            <Col md={10}>
                                <Input type="text" id="telnum" name="telnum" placeholder="TelNum" value={this.state.telnum}
                                onChange={this.hadleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="email" md={2}>
                              Email
                            </Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                                onChange={this.hadleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Col md={{size:6,offset:2}}>
                            <Label check htmlFor="agree" >
                            <Input type="checkbox" id="agree" name="agree"  value={this.state.agree}
                                onChange={this.hadleInputChange} />
                            May we contact you?
                            </Label>

                            </Col>
                            
                        </FormGroup>

                        <Button className="btn bg-primary " type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                   
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;