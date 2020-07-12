import React, {Component} from 'react';
import {Card , CardImg, CardImgOverlay, CardText, CardBody,BreadcrumbItem,Breadcrumb, CardTitle} from "reactstrap";
import {Link} from 'react-router-dom';
class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
  
    };
    console.log("constructor called");
  }



componentDidMount(){
  console.log("Mount called");

}
  render(){
    console.log("render called");

    const menu = this.props.dishes.map((dish) => {
           return (
             <div key={dish.id} className="col-12 col-md-5 m-1">
            <Link to={`/menu/${dish.id}`}>
                <Card>
                    <CardImg src={dish.image} alt="dish.name"></CardImg>
                    <CardTitle>
                        <CardImgOverlay>
                          {dish.name}
                        </CardImgOverlay>
                    </CardTitle>

                </Card>
            </Link>
            
             </div>
           );
       });

    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
           {menu}
        </div>
      </div>
    );
  }

}

export default Menu;
