import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Generate realistic volatile crypto price data
const generatePriceData = () => {
  const data = [];
  let price = 45000;
  const now = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add volatility
    const change = (Math.random() - 0.5) * 3000;
    price = Math.max(35000, Math.min(55000, price + change));
    
    data.push({
      id: `price-${i}`, // Add unique ID for each data point
      time: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: Math.round(price),
      timestamp: date.getTime(),
    });
  }
  
  return data;
};

const priceData = generatePriceData();

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-3 shadow-xl">
        <p className="text-white/60 text-xs mb-1">{payload[0].payload.time}</p>
        <p className="text-white font-semibold text-sm">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function CryptoChart() {
  const currentPrice = priceData[priceData.length - 1].price;
  const previousPrice = priceData[priceData.length - 2].price;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = ((priceChange / previousPrice) * 100).toFixed(2);
  const isPositive = priceChange >= 0;

  return (
    <div className="h-full w-full flex flex-col">
      <div className="mb-4 flex-shrink-0">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="text-white/60 text-sm">BTC/USD</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            isPositive 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {isPositive ? '+' : ''}{priceChangePercent}%
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">
            ${currentPrice.toLocaleString()}
          </span>
          <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{priceChange.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex-1 -mx-6 -mb-6 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={priceData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.4} />
                <stop offset="50%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.2} />
                <stop offset="100%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="rgba(255,255,255,0.2)"
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="rgba(255,255,255,0.2)"
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              domain={['dataMin - 1000', 'dataMax + 1000']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke={isPositive ? "#10b981" : "#ef4444"}
              strokeWidth={2}
              fill="url(#priceGradient)"
              animationDuration={1500}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}