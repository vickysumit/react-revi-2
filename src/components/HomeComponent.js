import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
function RenderCard(props){
    return(
        <Card>
            <CardImg src={props.item.image} alt={props.item.name} />
            <CardBody>
                <CardTitle>{props.item.name}</CardTitle>
                {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null}
                <CardText>{props.item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div>
            <div className="container">
                <div className="row align-item-start">
                    <div className="col-12 col-md">
                        <RenderCard item={props.dish} />                 
                    </div>
                    <div className="col-12 col-md">
                        <RenderCard item={props.leader} />
                    </div>
                    <div className="col-12 col-md">
                        <RenderCard item={props.promotion} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;