import React from 'react';
import { Pause, Play, RotateCcw, Undo, Home, Save } from 'lucide-react';

interface GameControlsProps
{
  onPause: () => void;
  onResume: () => void;
  onUndo: () => void;
  onReset: () => void;
  onHome: () => void;
  onSave: () => void;
  isPaused: boolean;
  canUndo: boolean;
  disabled?: boolean;
}

export const GameControls: React.FC<GameControlsProps> =
({
  onPause,
  onResume,
  onUndo,
  onReset,
  onHome,
  onSave,
  isPaused,
  canUndo,
  disabled=false
})=>
  {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={isPaused ? onResume : onPause}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/50 rounded-xl text-blue-200 font-medium transition-all hover:scale-105 disabled:opacity-50"
      >
        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        {isPaused ? 'Resume' : 'Pause'}
      </button>

      <button
        onClick={onUndo}
        disabled={!canUndo || disabled}
        className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/50 rounded-xl text-yellow-200 font-medium transition-all hover:scale-105 disabled:opacity-50"
      >
        <Undo className="w-4 h-4" />
        Undo
      </button>

      <button
        onClick={onReset}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/50 rounded-xl text-orange-200 font-medium transition-all hover:scale-105 disabled:opacity-50"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </button>

      <button
        onClick={onSave}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/50 rounded-xl text-green-200 font-medium transition-all hover:scale-105 disabled:opacity-50"
      >
        <Save className="w-4 h-4" />
        Save
      </button>

      <button
        onClick={onHome}
        className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-400/50 rounded-xl text-gray-200 font-medium transition-all hover:scale-105"
      >
        <Home className="w-4 h-4" />
        Home
      </button>
    </div>
  );
};