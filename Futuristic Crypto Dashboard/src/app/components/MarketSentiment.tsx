import { Smile, Frown, Meh } from 'lucide-react';

export function MarketSentiment() {
  const sentimentScore = 68; // 0-100 scale
  
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-white/60 text-sm mb-2">Market Sentiment</h3>
        <div className="flex items-center gap-2 mb-4">
          <Smile className="w-6 h-6 text-green-400" />
          <span className="text-3xl font-bold text-white">{sentimentScore}</span>
          <span className="text-white/40 text-sm">/ 100</span>
        </div>
        <p className="text-green-400 text-sm font-medium">Bullish</p>
      </div>
      
      {/* Sentiment bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-white/40">
          <span>Fear</span>
          <span>Greed</span>
        </div>
        <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
          
          {/* Indicator */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-xl border-2 border-white/30 transition-all duration-500"
            style={{ left: `calc(${sentimentScore}% - 10px)` }}
          />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="text-center">
            <p className="text-white/40 text-xs mb-1">Buy</p>
            <p className="text-green-400 text-sm font-semibold">64%</p>
          </div>
          <div className="text-center">
            <p className="text-white/40 text-xs mb-1">Hold</p>
            <p className="text-yellow-400 text-sm font-semibold">28%</p>
          </div>
          <div className="text-center">
            <p className="text-white/40 text-xs mb-1">Sell</p>
            <p className="text-red-400 text-sm font-semibold">8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
