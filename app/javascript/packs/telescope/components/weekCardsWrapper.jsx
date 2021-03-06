import React from 'react';
import WeekCard from './weekCard'
import Flower from '../assets/images/flower.jpg';
import { Trail } from 'react-spring';


class WeekCardsWrapper extends React.Component {

  render(){
    var weeks = this.props.weekCards;
    var weekCards;
    if (weeks === null) {
      weekCards = <p>Loading...</p>;
    } else if (weeks && weeks.length < 1) {
      weekCards = <div className="weekCardsWrapper-noWeeksDiv">
                    <img className="weekCardsWrapper-noWeeksImage" src={Flower} />
                    <p>No weeks yet! Record a new one above.</p>
                  </div>;
    } else if(weeks != undefined){
      var username = this.props.currentUser.username;
      // weekCards = weeks.map(function(week){
      //                   return <WeekCard weekObj={week} key={week.id} username={username}/>;
      //                 });

      weekCards = <Trail
                    items={weeks} keys={week => week.id}
                    from={{ transform: 'translate3d(-30px,0,0)', display: 'block', opacity: 0 }}
                    to={{ transform: 'translate3d(0px,0,0)', display: 'block', opacity: 1 }}
                    >
                    {week => props =>
                      <div style={props}><WeekCard weekObj={week} key={week.id} username={username}/></div>
                    }
                  </Trail>

    } else {
      weekCards = <p>Error!</p>;
    }
    return (
      <div className="weekCardsWrapper-div">
        <p className="weekCardsWrapper-title">Past Weeks</p>
        <ul className="weekCardsWrapper-ul">
          {weekCards}
        </ul>
      </div>
    )
  }
}
export default WeekCardsWrapper
