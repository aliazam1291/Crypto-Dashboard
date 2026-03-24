import { Home, TrendingUp, Wallet, Settings, BarChart3, Bell, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: TrendingUp, label: 'Markets' },
  { icon: Wallet, label: 'Portfolio' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Bell, label: 'Alerts' },
  { icon: Settings, label: 'Settings' },
];

export function NavBar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 gap-6 z-50">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[40px] border-r border-white/10" />
      
      {/* Logo */}
      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/50">
        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30" />
      </div>

      {/* Nav Items */}
      <div className="relative flex flex-col gap-4 flex-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${
                index === 0 ? 'bg-white/15 shadow-lg shadow-cyan-500/20' : ''
              }`}
              title={item.label}
            >
              <Icon 
                className={`w-5 h-5 transition-all duration-300 ${
                  index === 0 
                    ? 'text-cyan-400' 
                    : 'text-white/60 group-hover:text-white group-hover:scale-110'
                }`}
              />
              {index === 0 && (
                <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="relative">
        <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">
          <User className="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>
  );
}
