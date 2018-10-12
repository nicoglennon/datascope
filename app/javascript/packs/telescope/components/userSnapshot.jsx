import React from 'react';
import WeekCardsWrapper from './weekCardsWrapper';
import BoardWrapper from './boardWrapper';
import { Route, Switch } from 'react-router-dom';
import WeekPage from './weekPage';
import BoardPage from './boardPage';

import NewWeekPage from './newWeekPage';


class UserSnapshot extends React.Component {

  componentDidMount(){
    this.props.fetchCurrentUserSnapshot(this.props.match.params.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.props.fetchCurrentUserSnapshot(this.props.match.params.username);
    }
  }

  render(){
    var displayUserInfo;
    var currentUserSnapshot = this.props.currentUserSnapshot;
    if (currentUserSnapshot === undefined){
     displayUserInfo = <p>This page could not be found.</p>
   } else if (currentUserSnapshot === null) {
     displayUserInfo = <p>Loading...</p>
   } else {
      var weeks = this.props.currentUserSnapshot.weeks;
      var boards = this.props.currentUserSnapshot.boards;
      displayUserInfo = <div>
                          <BoardWrapper currentUser={currentUserSnapshot} boards={boards} />
                          <WeekCardsWrapper currentUser={currentUserSnapshot} weekCards={weeks} />

                          <Switch>
                            <Route exact path="/@:username/weeks/new"
                              render={(props) => <NewWeekPage {...props}
                                currentUser={currentUserSnapshot}
                                template={'template'}
                                submitNewWeek={this.props.submitNewWeek}
                              />}
                            />

                            <Route exact path="/@:username/weeks/:weekId"
                              render={(props) => <WeekPage {...props}
                                username={currentUserSnapshot.username}
                                week={weeks.filter(week => String(week.id) === props.match.params.weekId)[0]}
                              />}
                            />

                            <Route exact path="/@:username/board"
                              render={(props) => <BoardPage {...props}
                                username={currentUserSnapshot.username}
                                boards={currentUserSnapshot.boards}
                              />}
                            />
                          </Switch>
                        </div>
    }
    return(
      <div>{displayUserInfo}</div>
    )
  }
}
export default UserSnapshot
