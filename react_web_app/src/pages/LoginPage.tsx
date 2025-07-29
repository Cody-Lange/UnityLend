import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Wallet,
  Sparkles,
  Shield,
  Zap,
  ChevronRight,
  Github,
  Chrome
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { login, loginWithUser } = useAuthStore((state) => ({
    login: state.login,
    loginWithUser: state.loginWithUser
  }))
  
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [connectingWallet, setConnectingWallet] = useState(false)
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  })

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Bank-level encryption protects your assets"
    },
    {
      icon: Zap,
      title: "Instant Decisions",
      description: "AI-powered approvals in seconds"
    },
    {
      icon: Sparkles,
      title: "DeFi Innovation",
      description: "Next-gen lending on Arbitrum"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Use the existing login function for email/password
    await login(formData.email, formData.password)
    
    setIsLoading(false)
    navigate('/dashboard')
  }

  const connectWallet = async () => {
    setConnectingWallet(true)
    
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        
        if (accounts.length > 0) {
          // Use loginWithUser for wallet login
          loginWithUser({
            id: '1',
            email: 'wallet@example.com',
            firstName: 'Wallet',
            lastName: 'User',
            walletAddress: accounts[0]
          })
          
          navigate('/dashboard')
        }
      } else {
        alert('Please install MetaMask to use wallet authentication')
      }
    } catch (error) {
      console.error('Wallet connection failed:', error)
      alert('Failed to connect wallet. Please try again.')
    }
    
    setConnectingWallet(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-unitylend-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <h1 className="text-5xl font-display font-bold text-white mb-6">
                Welcome to
                <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent block">
                  UnityLend
                </span>
              </h1>
              <p className="text-xl text-gold-200 font-medium leading-relaxed">
                The future of decentralized lending. Get instant loans backed by crypto, 
                powered by AI risk assessment on Arbitrum.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gold-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gold-300 font-semibold">Platform Stats</p>
                  <div className="flex items-center space-x-6 mt-2">
                    <div>
                      <p className="text-2xl font-bold text-white">$12.5M</p>
                      <p className="text-sm text-gold-200">Total Lent</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">2,847</p>
                      <p className="text-sm text-gold-200">Active Loans</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">99.2%</p>
                      <p className="text-sm text-gold-200">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Authentication */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-2xl">
              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-r from-unitylend-600 to-unitylend-700 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Lock className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-display font-bold text-unitylend-800 mb-2">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-gray-600">
                    {isLogin ? 'Sign in to access your lending dashboard' : 'Join the future of DeFi lending'}
                  </p>
                </div>

                {/* Wallet Connect */}
                <Button
                  onClick={connectWallet}
                  disabled={connectingWallet}
                  className="w-full mb-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white h-12"
                >
                  {connectingWallet ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect MetaMask Wallet
                    </>
                  )}
                </Button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or continue with email</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="border-2 focus:border-unitylend-500"
                            required={!isLogin}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="border-2 focus:border-unitylend-500"
                            required={!isLogin}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-2 focus:border-unitylend-500 pl-10"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-gray-700 font-semibold">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="border-2 focus:border-unitylend-500 pl-10 pr-10"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Label htmlFor="confirmPassword" className="text-gray-700 font-semibold">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className="border-2 focus:border-unitylend-500 pl-10"
                            placeholder="Confirm your password"
                            required={!isLogin}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-unitylend-600 to-unitylend-700 hover:from-unitylend-700 hover:to-unitylend-800 text-white h-12 mt-6"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {isLogin ? 'Signing In...' : 'Creating Account...'}
                      </>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Toggle */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-unitylend-600 hover:text-unitylend-700 font-semibold flex items-center justify-center mx-auto mt-2"
                  >
                    {isLogin ? 'Create one now' : 'Sign in instead'}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

                {/* Social Login Options */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600 mb-4">Or continue with</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-2 hover:bg-gray-50">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="border-2 hover:bg-gray-50">
                      <Chrome className="w-5 h-5 mr-2" />
                      Google
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
