import React , {Component} from 'react';
import {Card , CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';
class DistDetail extends Component{
  constructor(props){
    super(props);

  }

renderDish(dish){
  if(dish!=null)
  return (
    <div>

    <Card>
       <CardImg src={dish.image} alt="dish.name"></CardImg>
       <CardTitle>
           <CardImgOverlay>
             {dish.name}
           </CardImgOverlay>
       </CardTitle>
       <CardBody>
         <CardText>
           {dish.description}
         </CardText>
       </CardBody>
    </Card>
    </div>
  );
  else
    return(
      <div></div>
    );
}

renderComments(comment){
  if(comment!=null)
   {
     const comments = comment.map((comment) => {
       return(
         <div key={comment.id}>
           <p>{comment.comment}</p>
           <p>{comment.author}</p>
           <p>{comment.date}</p>
         </div>
       );
     });
     return(
       <div>
       <h2>Comments</h2>
        {comments}
       </div>
     );
   }
    else
    {
      return(
        <div></div>
      );
    }
}
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {this.props.dish.name}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
              <div className="col-12 col-md" >
              {this.renderComments(this.props.comment)}
              </div>
          </div>
      </div>
    );
  }
}
export default DistDetail;
