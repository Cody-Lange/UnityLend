import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  CreditCard,
  ExternalLink,
  Wallet,
  Shield,
  Activity,
  Download
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface LoanDetails {
  id: string
  amount: number
  termMonths: number
  apr: number
  monthlyPayment: number
  remainingBalance: number
  nextPaymentDate: string
  paymentsRemaining: number
  totalPayments: number
  collateralType: string
  collateralAmount: number
  status: 'active' | 'pending' | 'completed' | 'overdue'
  purpose: string
  originationDate: string
}

interface Payment {
  id: string
  date: string
  amount: number
  principal: number
  interest: number
  status: 'completed' | 'pending' | 'failed'
}

const LoanDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [loan, setLoan] = useState<LoanDetails | null>(null)
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock API call to fetch loan details
    const fetchLoanDetails = async () => {
      setIsLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock loan data
      const mockLoan: LoanDetails = {
        id: id || '1',
        amount: 5000,
        termMonths: 12,
        apr: 8.5,
        monthlyPayment: 445.23,
        remainingBalance: 3567.89,
        nextPaymentDate: '2024-02-15',
        paymentsRemaining: 8,
        totalPayments: 12,
        collateralType: 'ETH',
        collateralAmount: 2.5,
        status: 'active',
        purpose: 'Business Investment',
        originationDate: '2023-06-15'
      }

      const mockPayments: Payment[] = [
        {
          id: '1',
          date: '2024-01-15',
          amount: 445.23,
          principal: 378.95,
          interest: 66.28,
          status: 'completed'
        },
        {
          id: '2',
          date: '2023-12-15',
          amount: 445.23,
          principal: 372.18,
          interest: 73.05,
          status: 'completed'
        },
        {
          id: '3',
          date: '2023-11-15',
          amount: 445.23,
          principal: 365.32,
          interest: 79.91,
          status: 'completed'
        },
        {
          id: '4',
          date: '2023-10-15',
          amount: 445.23,
          principal: 358.37,
          interest: 86.86,
          status: 'completed'
        }
      ]

      setLoan(mockLoan)
      setPayments(mockPayments)
      setIsLoading(false)
    }

    fetchLoanDetails()
  }, [id])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100'
      case 'completed':
        return 'text-blue-600 bg-blue-100'
      case 'overdue':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'overdue':
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const progressPercentage = loan ? ((loan.totalPayments - loan.paymentsRemaining) / loan.totalPayments) * 100 : 0

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading loan details...</p>
        </div>
      </div>
    )
  }

  if (!loan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Loan Not Found</h2>
          <p className="text-gray-300 mb-6">The requested loan could not be found.</p>
          <Button onClick={() => navigate('/dashboard')} className="bg-unitylend-600 hover:bg-unitylend-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/dashboard')}
                className="border-white/30 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-display font-bold text-white">
                  Loan #{loan.id}
                </h1>
                <p className="text-gold-200">
                  {loan.purpose} • Originated {new Date(loan.originationDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${getStatusColor(loan.status)}`}>
              {getStatusIcon(loan.status)}
              <span className="font-semibold capitalize">{loan.status}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Loan Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Loan Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-unitylend-800">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Loan Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Original Amount</p>
                      <p className="text-2xl font-bold text-unitylend-700">
                        ${loan.amount.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Remaining Balance</p>
                      <p className="text-2xl font-bold text-red-600">
                        ${loan.remainingBalance.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Monthly Payment</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${loan.monthlyPayment.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">APR</p>
                      <p className="text-2xl font-bold text-unitylend-700">
                        {loan.apr}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Loan Progress
                      </span>
                      <span className="text-sm text-gray-600">
                        {loan.totalPayments - loan.paymentsRemaining} of {loan.totalPayments} payments
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <p className="text-xs text-gray-500 mt-1">
                      {progressPercentage.toFixed(1)}% complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center text-unitylend-800">
                    <Activity className="w-6 h-6 mr-2" />
                    Payment History
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payments.map((payment, index) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            payment.status === 'completed' ? 'bg-green-400' :
                            payment.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              Payment #{payments.length - index}
                            </p>
                            <p className="text-sm text-gray-600">
                              {new Date(payment.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-unitylend-700">
                            ${payment.amount.toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-500">
                            ${payment.principal.toFixed(2)} principal + ${payment.interest.toFixed(2)} interest
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Payment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-gold-800">
                    <Calendar className="w-6 h-6 mr-2" />
                    Next Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gold-800 mb-2">
                      ${loan.monthlyPayment.toFixed(2)}
                    </p>
                    <p className="text-gold-700 mb-4">
                      Due {new Date(loan.nextPaymentDate).toLocaleDateString()}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-unitylend-600 to-unitylend-700 hover:from-unitylend-700 hover:to-unitylend-800 text-white">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Make Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Collateral Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-unitylend-800">
                    <Shield className="w-6 h-6 mr-2" />
                    Collateral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold">{loan.collateralType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Amount</span>
                      <span className="font-semibold">{loan.collateralAmount} {loan.collateralType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current Value</span>
                      <span className="font-semibold text-green-600">$7,850</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Health Ratio</span>
                      <span className="font-semibold text-green-600">220%</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Wallet className="w-4 h-4 mr-2" />
                      View on Explorer
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Loan Terms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-unitylend-800">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Loan Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term Length</span>
                      <span className="font-semibold">{loan.termMonths} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold">{loan.apr}% APR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payments Remaining</span>
                      <span className="font-semibold">{loan.paymentsRemaining}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payoff Date</span>
                      <span className="font-semibold">
                        {new Date(Date.now() + loan.paymentsRemaining * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanDetailsPage
