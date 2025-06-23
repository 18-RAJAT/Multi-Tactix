import React from 'react';
import { Crown, Trophy, Users } from 'lucide-react';
import { GameState } from '../types/game';

interface GameInfoProps {
  gameState: GameState;
}

export const GameInfo: React.FC<GameInfoProps> = ({ gameState }) => {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="space-y-4">
        {/* Game Status */}
        <div className="text-center">
          {gameState.isFinished ? (
            gameState.winner ? (
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Crown className="w-8 h-8" style={{ color: gameState.winner.color }} />
                <span style={{ color: gameState.winner.color }}>
                  {gameState.winner.name} Wins!
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-yellow-400">
                <Trophy className="w-8 h-8" />
                <span>It's a Draw!</span>
              </div>
            )
          ) : gameState.status === 'paused' ? (
            <div className="text-xl font-bold text-orange-400">Game Paused</div>
          ) : (
            <div className="text-xl font-bold text-white">
              Current Turn: <span style={{ color: currentPlayer.color }}>{currentPlayer.name}</span>
            </div>
          )}
        </div>

        {/* Players */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
            <Users className="w-4 h-4" />
            Players
          </div>
          <div className="grid gap-2">
            {gameState.players.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  index === gameState.currentPlayerIndex && !gameState.isFinished
                    ? 'bg-white/20 border-2 border-white/40'
                    : 'bg-white/10 border border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-white/30"
                    style={{ backgroundColor: `${player.color}40`, color: player.color }}
                  >
                    {player.symbol}
                  </div>
                  <span className="text-white font-medium">{player.name}</span>
                  {player.isAI && (
                    <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full">
                      AI
                    </span>
                  )}
                </div>
                {index === gameState.currentPlayerIndex && !gameState.isFinished && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Game Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70">Board Size</div>
            <div className="text-white font-bold">{gameState.boardSize}×{gameState.boardSize}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70">Moves</div>
            <div className="text-white font-bold">{gameState.moves.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};