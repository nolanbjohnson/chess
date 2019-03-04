import React, { Component } from 'react';
import Square from './components/Square.js'
import Moves from './components/Moves.js'
import Description from './components/Description.js'
import {BOARD_SIZE_X, BOARD_SIZE_Y, LETTERS, STARTING_POSITIONS} from './constants.js'
import * as savedGame from './gameState.js'
import './App.css';

function indexToRowFile(index) {
  // maps from number position from bottom left (a1) through top right (h8)
  const row = Math.floor(index / BOARD_SIZE_X)

}

function indexToLetter(index) {
  return LETTERS.split('')[index]
}

const starting_state = {
      positions: STARTING_POSITIONS,
      activeSquare: '',
      activePiece: '',
      moves: [],
      moveNumber: 1,
      previewPositions: {},
      previewState: false,
      previewMoveNumber: 999,
      takenPieces: []
    }

const alternate_starting_state = {
      positions: savedGame.positions,
      activeSquare: '',
      activePiece: '',
      moves: savedGame.moves,
      moveNumber: savedGame.moveNumber,
      previewPositions: {},
      previewState: false,
      previewMoveNumber: 999,
      takenPieces: savedGame.takenPieces
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = alternate_starting_state
    this.resetBoard = this.resetBoard.bind(this)
    this.activateSquare = this.activateSquare.bind(this)
    this.movePiece = this.movePiece.bind(this)
    this.undoToMove = this.undoToMove.bind(this)
    this.previewUndo = this.previewUndo.bind(this)
    this.previewUndoEnd = this.previewUndoEnd.bind(this)

  }

  // render() {
  //   const boardLetters = Array(BOARD_SIZE_X).fill(0).map((square, index) => <div key={index} className="letters">{indexToLetter(index)}</div> )
  //   const boardNumbers = Array(BOARD_SIZE_Y).fill(0).map((square, index) => <div key={index} className="numbers">{index + 1}</div> )
  //   const boardSquares = Array(BOARD_SIZE_X * BOARD_SIZE_Y).fill(0).map((square, index) => <div key={index} className="square">{index}</div> )
  //   return (
  //     <div className="App">
  //       <div className="board">
  //         <div className="board-numbers">
  //           { boardNumbers }
  //         </div>
  //         <div className="board-squares">
  //           { boardSquares }
  //         </div>
  //         <div className="board-letters">
  //           { boardLetters }
  //         </div>
          
  //       </div>
  //     </div>
  //   );
  // }

  resetBoard() {
    this.setState(starting_state)
  }

  movePiece(idxFrom, idxTo, piece) {
    this.setState((prevState) => {
      const takenPiece = prevState.positions[idxTo] || ''
      const newPositions = {...prevState.positions, [idxFrom]: '', [idxTo]: piece}
      return {
        positions: newPositions,
        activeSquare: '',
        activePiece: '',
        moves: [...prevState.moves, {notation: piece+idxTo, moveNumber: prevState.moveNumber, positions: newPositions}],
        moveNumber: prevState.moveNumber+1,
        takenPieces: takenPiece === '' ? prevState.takenPieces : [...prevState.takenPieces, {piece: takenPiece, moveNumber: prevState.moveNumber}],
      }
    })
  }


  activateSquare(idx, piece) {

    this.setState((prevState) => {
      const {activeSquare: prevIdx, activePiece: prevPiece} = prevState

      if (prevPiece !== '' && prevIdx !== idx) {
        console.log(prevIdx, prevPiece)
        this.movePiece(prevIdx, idx, prevPiece)
      }
      return prevIdx === idx ? {activeSquare: '', activePiece: ''} : {activeSquare: idx, activePiece: piece}
    })
  }

  undoToMove(moveNumber, positions) {
    this.setState((prevState) => {
      return {positions: positions, 
              moves: prevState.moves.slice(0, moveNumber), 
              moveNumber: parseInt(moveNumber)+1,
              takenPieces: prevState.takenPieces.filter((take) => take.moveNumber <= moveNumber),
              previewState: false
            }
    })
  }

  previewUndo(positions, moveNumber) {
    this.setState((prevState) => {
      return {previewPositions: positions, previewState: true, previewMoveNumber: moveNumber}
    })
  }

  previewUndoEnd() {
    this.setState((prevState) => {
      return {previewPositions: {}, previewState: false}
    })
  }

  render() {
    const boardLetters = Array(BOARD_SIZE_X).fill(0).map((square, index) => <div key={index} className="letters">{indexToLetter(index)}</div> )
    const boardNumbers = Array(BOARD_SIZE_Y).fill(0).map((square, index) => <div key={index} className="numbers">{index + 1}</div> )
    const boardSquares = Array(BOARD_SIZE_Y).fill(Array(BOARD_SIZE_X).fill(0)).map((row, rowIndex) => {
        let cells = row.map((column, columnIndex) => {
          const square = indexToLetter(columnIndex)+Math.abs(rowIndex-8) // board is from bottom left to top right, so swap row index
          return <Square key={square} 
                         idx={square} 
                         selected={ this.state.activeSquare === square }
                         piece={this.state.previewState ? this.state.previewPositions[square] : this.state.positions[square]} 
                         onClick={this.activateSquare} />
        })
        return <tr key={rowIndex}>{cells}</tr>

      })
    
    // const moves = this.state.moves.map(move => <Move notation={move['notation']} 
    //                                                  moveNumber={move['moveNumber']} 
    //                                                  positions={move['positions']} 
    //                                                  onClick={this.undoToMove} 
    //                                                  onHover={this.previewUndo} 
    //                                                  onMouseOut={this.previewUndoEnd} />)

    const takes = this.state.takenPieces.map(take => <div className={ this.state.previewState && take.moveNumber > this.state.previewMoveNumber ? "board-takes__undo" : "" }> {take.piece} </div>)

    return (
      <div className="App">

        <div className="header">
          <h1>
            Trusty Chess

          </h1>
          <input type="checkbox" name="toggle" id="toggle" />
          <label for="toggle"></label>
          <Description />
          
        </div>
        
          <div className="board-history">
            <h3>History</h3>
            <button onClick={ this.resetBoard }>Reset</button>

            <Moves moves={this.state.moves}
                   undoToMove={this.undoToMove} 
                   previewUndo={this.previewUndo} 
                   previewUndoEnd={this.previewUndoEnd}/>

            {/*<div className="board-moves__fade-before"></div>
            <div className="board-moves">
              { moves }
            </div>
            <div className="board-moves__fade-after"></div>*/}
            
          </div>
          <div className="board">
            <div className="board-numbers">
              { boardNumbers }

            </div>
            {/*<div className="board-squares">*/}
              <table className={ this.state.previewState ? "preview" : "" }>
              <tbody>
                { boardSquares }
              </tbody>
              </table>
            {/*</div>*/}
            <div className="board-letters">
              { boardLetters }
            </div>
            <div className="board-takes">
              { takes }
            </div>
          </div>
      </div>
    );
  }
}

export default App;
