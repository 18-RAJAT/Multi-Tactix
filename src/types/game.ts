export interface Player
{
    id: string;
    name: string;
    symbol: string;
    color: string;
    isAI: boolean;
    stats:
    {
        wins: number;
        losses: number;
        draws: number;
        gamesPlayed: number;
    };
}

export interface GameMove
{
    row: number;
    col: number;
    player: Player;
    timestamp: number;
}

export interface GameState
{
    id: string;
    board: (Player | null)[][];
    player: Player[];
    currentPlayerIndex: number;
    winner: Player | null;
    isDraw: boolean;
    moves: GameMove[];
    boardSize: number;
    gameMode: "single" | 'multi';
    status: 'active' | 'paused' | 'finished';
    createdAt: number;
    lastPlayedAt: number;
}

export interface GameSettings
{
    boardSize: 3 | 5;
    gameMode: 'single' | 'multi';
    playerCount: number;
    difficulty: 'easy' | 'medium' | 'hard';
}

export type AppView = 'menu' | 'game' | 'settings' | 'leaderboard' | 'profile' | 'replay' | 'resume';