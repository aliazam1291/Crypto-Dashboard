import { ArrowUpRight, ArrowDownLeft, Repeat } from 'lucide-react';

const activities = [
  { type: 'buy', asset: 'BTC', amount: '0.023', value: '$1,040.33', time: '2 hours ago', icon: ArrowDownLeft },
  { type: 'sell', asset: 'ETH', amount: '1.5', value: '$4,336.50', time: '5 hours ago', icon: ArrowUpRight },
  { type: 'swap', asset: 'SOL → ADA', amount: '12.5', value: '$1,229.25', time: '1 day ago', icon: Repeat },
];

export function RecentActivity() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white/60 text-sm">Recent Activity</h3>
        <button className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">
          See All
        </button>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activity.type === 'buy' 
                  ? 'bg-green-500/20 text-green-400' 
                  : activity.type === 'sell'
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              
              <div className="flex-1">
                <p className="text-white text-sm font-medium capitalize">{activity.type} {activity.asset}</p>
                <p className="text-white/40 text-xs">{activity.time}</p>
              </div>
              
              <div className="text-right">
                <p className="text-white text-sm font-medium">{activity.value}</p>
                <p className="text-white/40 text-xs">{activity.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
