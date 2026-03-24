import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NavBar } from './components/NavBar';
import { BentoCard } from './components/BentoCard';
import { CryptoChart } from './components/CryptoChart';
import { PortfolioStats } from './components/PortfolioStats';
import { TopAssets } from './components/TopAssets';
import { RecentActivity } from './components/RecentActivity';
import { QuickActions } from './components/QuickActions';
import { MarketSentiment } from './components/MarketSentiment';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create animated mesh gradient background that follows mouse
  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated mesh gradient background */}
      <motion.div
        className="fixed inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${100 - gradientX}% ${100 - gradientY}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${gradientY}% ${gradientX}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: `
            radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${100 - gradientX}% ${100 - gradientY}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${gradientY}% ${gradientX}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Navigation */}
      <NavBar />

      {/* Main Content - Bento Grid */}
      <div className="pl-20 p-8 min-h-screen">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Alex</span>
            </h1>
            <p className="text-white/40">Track and manage your crypto portfolio</p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-6 auto-rows-[140px]">
            {/* Main Chart - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-8 row-span-3"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <CryptoChart />
              </BentoCard>
            </motion.div>

            {/* Portfolio Stats - Tall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-4 row-span-2"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <PortfolioStats />
              </BentoCard>
            </motion.div>

            {/* Quick Actions - Small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-4 row-span-2"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <QuickActions />
              </BentoCard>
            </motion.div>

            {/* Top Assets - Medium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-5 row-span-3"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <TopAssets />
              </BentoCard>
            </motion.div>

            {/* Market Sentiment - Small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-3 row-span-2"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <MarketSentiment />
              </BentoCard>
            </motion.div>

            {/* Recent Activity - Medium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-4 row-span-2"
            >
              <BentoCard mouseX={mousePosition.x} mouseY={mousePosition.y}>
                <RecentActivity />
              </BentoCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
