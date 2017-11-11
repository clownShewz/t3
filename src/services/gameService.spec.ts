import { GameService } from 'services/gameService';

  it('should create a new game object', (() => {
    const game = new GameService().getGame('TicTacToe');
    expect(game).toBeTruthy();
  }));

  it(`should have a type TicTacToe`, (() => {
    const game = new GameService().getGame('TicTacToe');
    expect(game.type).toEqual('TicTacToe');
  }));

  it(`should have an Engine`, (() => {
    const game = new GameService().getGame('TicTacToe');
    expect(game.engine).toBeTruthy();
  }));

  it(`should have a TicTacToe Engine`, (() => {
    const game = new GameService().getGame('TicTacToe');
    const engine = game.engine
    expect(engine.type).toEqual('TicTacToe');
  }));

  it(`should have a board`, (() => {
    const game = new GameService().getGame('TicTacToe');
    expect(game.board).toBeTruthy();
  }));

  it(`should have a tic tac toe board`, (() => {
    const game = new GameService().getGame('TicTacToe');
    expect(game.board.type).toEqual('TicTacToe');
  }));



