import { gameEngineFactory } from './gameEngineFactory'
import { gameFactory } from './gameFactory'

  it('game engine factory should create a new game engine object', (() => {
   const engine = new gameEngineFactory().createGameEngine('TicTacToe')
    expect(engine).toBeTruthy();
  }));


  it('game engine factory should have a tic tac toe type', (() => {
    const engine = new gameFactory().createGame('TicTacToe')
     expect(engine.type).toEqual('TicTacToe');
   }));


