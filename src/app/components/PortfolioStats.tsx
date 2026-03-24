import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const stats = [
  { label: 'Total Value', value: '$127,459.32', change: '+12.4%', positive: true, icon: DollarSign },
  { label: '24h Change', value: '+$4,321.19', change: '+3.5%', positive: true, icon: TrendingUp },
  { label: 'Total Assets', value: '12', change: '+2', positive: true, icon: Percent },
];

export function PortfolioStats() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-white/60 text-sm mb-4">Portfolio Overview</h3>
      </div>
      
      <div className="space-y-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-white/40 text-xs mb-1">{stat.label}</p>
                <p className="text-white text-xl font-semibold">{stat.value}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className={`px-2 py-0.5 rounded-lg flex items-center gap-1 ${
                  stat.positive 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.positive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="text-xs font-medium">{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
