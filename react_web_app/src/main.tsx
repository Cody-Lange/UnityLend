import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Simple UnityLend Landing Page Component
function UnityLendApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-black/20 backdrop-blur-md border-b border-yellow-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-black">
            U
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            UnityLend
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-yellow-400 transition-colors">Protocol</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Docs</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Community</a>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all">
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              DEFI
            </span>
            <br />
            <span className="text-white">LENDING</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              REIMAGINED
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock the future of decentralized finance with AI-powered lending on Arbitrum. 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
              {' '}Building Wealth Together.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <button className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-lg hover:shadow-yellow-500/25">
            Launch App
          </button>
          
          <button className="px-12 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all">
            View Docs
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {[
            { label: 'Total Value Locked', value: '$42.5M', icon: '💰' },
            { label: 'Active Loans', value: '1,337', icon: '📊' },
            { label: 'AI Accuracy', value: '99.2%', icon: '🤖' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition-transform hover:border-yellow-500/60"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-400 border-t border-gray-800">
        <p>© 2025 UnityLend. Building the future of DeFi lending.</p>
        <p className="text-sm mt-2">🌐 Server running at http://localhost:5174/ ✅</p>
      </div>
    </div>
  )
}

// Mount the React app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UnityLendApp />
  </React.StrictMode>
)
