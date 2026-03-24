import { Send, Download, Repeat, Plus } from 'lucide-react';

const actions = [
  { label: 'Send', icon: Send, gradient: 'from-cyan-500 to-blue-600' },
  { label: 'Receive', icon: Download, gradient: 'from-purple-500 to-pink-600' },
  { label: 'Swap', icon: Repeat, gradient: 'from-green-500 to-emerald-600' },
  { label: 'Buy', icon: Plus, gradient: 'from-orange-500 to-red-600' },
];

export function QuickActions() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-white/60 text-sm mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3 flex-1">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className="group relative rounded-2xl p-4 flex flex-col items-center justify-center gap-2 overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" />
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Label */}
              <span className="relative text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
