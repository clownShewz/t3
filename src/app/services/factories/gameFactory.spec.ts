import { gameFactory } from 'services/gameFactory';

  it('should create a new game object', (() => {
    const game = new gameFactory().createGame('TicTacToe');
    expect(game).toBeTruthy();
  }));

  it(`should have a type TicTacToe`, (() => {
    const game = new gameFactory().createGame('TicTacToe');
    expect(game.type).toEqual('TicTacToe');
  }));

  it(`should have a gameEngine`, (() => {
    const game = new gameFactory().createGame('TicTacToe');
    expect(game.engine).toBeTruthy();
  }));

  it(`should have a game engine type of TicTacToe`, (() => {
    const game = new gameFactory().createGame('TicTacToe');
    const engine = game.engine;
    expect(engine.type).toEqual('TicTacToe');
  }));

  it(`should have a game board`, (() => {
    const game = new gameFactory().createGame('TicTacToe');
    expect(game.board).toBeTruthy();
  }));

  it(`should have a game board`, (() => {
    const game = new gameFactory().createGame('TicTacToe');
    expect(game.board.type).toEqual('TicTacToe');
  }));

