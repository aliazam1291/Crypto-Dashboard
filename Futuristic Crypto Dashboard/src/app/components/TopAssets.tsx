import { TrendingUp, TrendingDown } from 'lucide-react';

const assets = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$45,231', change: '+2.4%', positive: true, holdings: '0.342' },
  { name: 'Ethereum', symbol: 'ETH', price: '$2,891', change: '+5.7%', positive: true, holdings: '4.21' },
  { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '-1.2%', positive: false, holdings: '1,420' },
  { name: 'Solana', symbol: 'SOL', price: '$98.34', change: '+8.3%', positive: true, holdings: '12.5' },
];

export function TopAssets() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white/60 text-sm">Top Assets</h3>
        <button className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-3 flex-1 overflow-auto">
        {assets.map((asset) => (
          <div 
            key={asset.symbol}
            className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-xs">{asset.symbol.substring(0, 2)}</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{asset.name}</p>
                <p className="text-white/40 text-xs">{asset.holdings} {asset.symbol}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-white text-sm font-medium">{asset.price}</p>
              <div className={`flex items-center gap-1 justify-end ${
                asset.positive ? 'text-green-400' : 'text-red-400'
              }`}>
                {asset.positive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="text-xs">{asset.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
