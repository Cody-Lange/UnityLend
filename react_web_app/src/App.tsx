import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toaster'
import { useAuthStore } from '@/stores/authStore'

// Pages
import LandingPage from '@/components/LandingPage'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import LoanApplicationPage from '@/pages/LoanApplicationPage'
import LoanDetailsPage from '@/pages/LoanDetailsPage'
import ProfilePage from '@/pages/ProfilePage'

// Layout
import Layout from '@/components/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" replace />
              } 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/app" 
              element={
                isAuthenticated ? <Layout /> : <Navigate to="/login" replace />
              }
            >
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="apply" element={<LoanApplicationPage />} />
              <Route path="loans/:id" element={<LoanDetailsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
