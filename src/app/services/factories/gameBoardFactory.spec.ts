import { gameBoardFactory } from './gameBoardFactory';

it('game board factory should create a game board instance', (() => {
  const gameBoard = new gameBoardFactory().createGameBoard('TicTacToe');
  expect(gameBoard).toBeTruthy();
}));

it('game board factory the board should have type tic tac toe', ( () => {
  const gameBoard = new gameBoardFactory().createGameBoard('TicTacToe');
  expect(gameBoard.type).toEqual('TicTacToe');
}));

it('game board factory should contain 3 rows and  3 columns', ( () => {
  const gameBoard = new gameBoardFactory().createGameBoard('TicTacToe');
  expect(gameBoard.rows && gameBoard.cols).toEqual(3)
}))
