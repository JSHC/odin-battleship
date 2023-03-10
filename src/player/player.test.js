import { test, expect } from '@jest/globals';
import { Player, AIPlayer } from './player';

test('can create player', () => {
    const player = Player();
    expect(player).toBeDefined();
})

test('player has gameboard', () => {
    const player = Player();
    expect(player.gameBoard).toBeDefined();
    expect(player.gameBoard.getBoard().length).toBe(100);
})

test('AI player has gameboard', () => {
    const aiPlayer = AIPlayer();
    expect(aiPlayer.gameBoard).toBeDefined();
    expect(aiPlayer.gameBoard.getBoard().length).toBe(100);
})

test('AI player can generate attacks', () => {
    const aiPlayer = AIPlayer();
    expect(aiPlayer.getNextAttack).toBeDefined();
    let firstAttack = aiPlayer.getNextAttack();
    let secondAttack = aiPlayer.getNextAttack();
    expect(firstAttack).not.toEqual(secondAttack);
    expect(firstAttack.x).toBeGreaterThan(0);
    expect(firstAttack.x).toBeLessThan(100);
})

test('can get current player status', () => {
    const player = Player();
    expect(player.getIsCurrentPlayer()).toBe(false);
})

test('can set current player status', () => {
    const player = Player();
    expect(player.getIsCurrentPlayer()).toBe(false);
    player.setIsCurrentPlayer(true);
    expect(player.getIsCurrentPlayer()).toBe(true);
})

test('can toggle current player status', () => {
    const player = Player();
    expect(player.getIsCurrentPlayer()).toBe(false);
    player.toggleIsCurrentPlayer();
    expect(player.getIsCurrentPlayer()).toBe(true);
})