import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isConnected, setIsConnected] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const MatrixRain = () => {
    const chars = '01UNITYLEND$₿⟐◯△▢'.split('')
    
    return (
      <div className="matrix-rain">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10
            }}
          >
            {chars[Math.floor(Math.random() * chars.length)]}
          </motion.div>
        ))}
      </div>
    )
  }

  const GridBackground = () => (
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#eab308', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: '#7f1d1d', stopOpacity: 0.1}} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" stroke="url(#gridGradient)" />
      </svg>
    </div>
  )

  const FloatingElements = () => (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <GridBackground />
      <MatrixRain />
      <FloatingElements />
      
      {/* Mouse follower glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Navigation */}
      <motion.nav
        className="relative z-20 flex justify-between items-center p-6 bg-black/20 backdrop-blur-md border-b border-yellow-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-black">
            U
          </div>
          <span className="text-2xl font-bold gradient-text">UnityLend</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8 text-gray-300">
          <motion.a href="#" className="hover:text-yellow-400 transition-colors" whileHover={{ scale: 1.1 }}>
            Protocol
          </motion.a>
          <motion.a href="#" className="hover:text-yellow-400 transition-colors" whileHover={{ scale: 1.1 }}>
            Docs
          </motion.a>
          <motion.a href="#" className="hover:text-yellow-400 transition-colors" whileHover={{ scale: 1.1 }}>
            Community
          </motion.a>
        </div>

        <motion.button
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isConnected 
              ? 'bg-green-500 text-black' 
              : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsConnected(!isConnected)}
        >
          {isConnected ? '✓ Connected' : 'Connect Wallet'}
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(234, 179, 8, 0.5)',
                '0 0 40px rgba(234, 179, 8, 0.8)',
                '0 0 20px rgba(234, 179, 8, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="gradient-text">DEFI</span>
            <br />
            <span className="text-white">LENDING</span>
            <br />
            <span className="gradient-text">REIMAGINED</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unlock the future of decentralized finance with AI-powered lending on Arbitrum. 
            <span className="gradient-text font-semibold"> Building Wealth Together.</span>
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-lg pulse-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(234, 179, 8, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
          >
            Launch App
          </motion.button>
          
          <motion.button
            className="px-12 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Docs
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { label: 'Total Value Locked', value: '$42.5M', icon: '💰' },
            { label: 'Active Loans', value: '1,337', icon: '📊' },
            { label: 'AI Accuracy', value: '99.2%', icon: '🤖' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-xl p-6"
              whileHover={{ scale: 1.05, borderColor: 'rgba(234, 179, 8, 0.8)' }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(234, 179, 8, 0.1)',
                  '0 0 30px rgba(234, 179, 8, 0.3)',
                  '0 0 20px rgba(234, 179, 8, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-500/10 to-transparent">
        <motion.div
          className="w-full h-full"
          animate={{
            background: [
              'linear-gradient(90deg, rgba(234, 179, 8, 0.1) 0%, rgba(127, 29, 29, 0.1) 50%, rgba(234, 179, 8, 0.1) 100%)',
              'linear-gradient(90deg, rgba(127, 29, 29, 0.1) 0%, rgba(234, 179, 8, 0.1) 50%, rgba(127, 29, 29, 0.1) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  )
}

export default LandingPage
