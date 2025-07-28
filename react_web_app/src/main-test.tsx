import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function TestApp() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem'
    }}>
      <h1>UnityLend - Test Page Loading! 🚀</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
)
