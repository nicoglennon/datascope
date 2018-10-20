import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import BoardPageContent from './boardPageContent'

class BoardPage extends React.Component {
  constructor(){
    super();
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal(){
    this.props.history.goBack();
  }

  render(){
    var board = this.props.board;
    var content;
    if (board === undefined || board === null){
      content = <p>Loading...</p>;
    } else {
      content = <BoardPageContent board={board} submitNewBoardGoal={this.props.submitNewBoardGoal} deleteGoal={this.props.deleteGoal} updateGoal ={this.props.updateGoal} />
    }
    return(
      <ReactModal
        isOpen={true}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="weekPage-background boardPage-background"
        className="weekPage-container boardPage-container"
        style={{content: {overflow: 'scroll'}}}
        >
        <div>
          <button className="weekPage-closeModal" onClick={this.handleCloseModal}>✕</button>
          {content}
        </div>
      </ReactModal>
    )
  }
}
export default BoardPage
