import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  DollarSign, 
  FileText, 
  User, 
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'

const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, user } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Apply for Loan', href: '/apply', icon: DollarSign },
    { name: 'My Loans', href: '/loans', icon: FileText },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white/95 backdrop-blur-sm border-r border-white/20 shadow-xl transition-all duration-300 relative z-20`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-unitylend-600 to-unitylend-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-display font-bold bg-gradient-to-r from-unitylend-700 to-unitylend-900 bg-clip-text text-transparent">
                  UnityLend
                </h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Building Wealth Together
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <motion.button
                key={item.name}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-unitylend-600 to-unitylend-700 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-unitylend-50 hover:text-unitylend-700'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-gold-300' : ''}`} />
                {sidebarOpen && (
                  <span className="font-semibold">{item.name}</span>
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* User Section */}
        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {user?.firstName?.[0] || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        )}
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-white/20 shadow-sm h-16 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-unitylend-700"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search loans, payments..."
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-unitylend-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>

            {/* Quick Stats */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="text-center">
                <p className="text-gray-500 font-medium">Credit Score</p>
                <p className="font-bold text-unitylend-700">745</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 font-medium">Available</p>
                <p className="font-bold text-gold-600">$2,500</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
