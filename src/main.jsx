import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import './index.css'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ background: '#0A0A0F', color: '#ff6b6b', padding: '40px', fontFamily: 'monospace', fontSize: '13px', whiteSpace: 'pre-wrap', minHeight: '100vh' }}>
          <div style={{ color: '#8B5CF6', marginBottom: '12px', fontSize: '20px' }}>RENDER ERROR</div>
          <div style={{ color: '#facc15', marginBottom: '12px' }}>{String(this.state.error)}</div>
          <div style={{ color: '#94a3b8' }}>{this.state.error?.stack}</div>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
