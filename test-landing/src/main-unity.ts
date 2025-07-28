import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="
    background: linear-gradient(135deg, #000 0%, #333 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Inter', Arial, sans-serif;
  ">
    <div style="text-align: center;">
      <h1 style="
        font-size: 4rem; 
        color: #fde047; 
        margin-bottom: 1rem;
        text-shadow: 0 0 20px rgba(253, 224, 71, 0.5);
      ">🚀 UnityLend</h1>
      <p style="font-size: 1.5rem; margin-bottom: 2rem; color: #ffffff;">
        DeFi Lending Reimagined
      </p>
      <button style="
        padding: 1rem 2rem;
        background: linear-gradient(135deg, #eab308, #fde047);
        color: black;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s;
      " 
      onmouseover="this.style.transform='scale(1.05)'"
      onmouseout="this.style.transform='scale(1)'"
      onclick="alert('🎉 UnityLend is working! Server is running properly.')">
        Launch App
      </button>
      <div style="margin-top: 2rem; font-size: 0.9rem; color: #888;">
        If you can see this, the server is working! ✅<br>
        Server: http://localhost:5173/
      </div>
    </div>
  </div>
`
