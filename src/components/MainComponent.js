import React, {Component} from 'react';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import DistDetail from './DistDetailComponent';
import {LEADERS} from '../shared/leaders'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';


class Main extends Component {
  constructor(props){
    super(props);
      this.state = {
        dishes:DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
      }
  }


  render(){
    const HomePage = () =>{
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]} 
        leader = {this.state.leaders.filter((lead) => lead.featured)[0]}  />
      )
    }

    const DishwithID = ({match}) =>{
      return(
        <DistDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      )
    }
    return(
      <div>
         <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}  />}  />
              <Route path="/menu/:dishId" component={DishwithID} />
              <Route path="/contactus" component={Contact} />
              <Redirect to="/home" />
            </Switch>
            
         <Footer />
      </div>
       
    
    
    );
  }

}
export default Main;
