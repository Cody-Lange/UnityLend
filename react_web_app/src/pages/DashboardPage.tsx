import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useQuery } from '@tanstack/react-query'
import { getLoans, type Loan } from '@/api/loans'
import { useAuthStore } from '@/stores/authStore'

const DashboardPage: React.FC = () => {
  const user = useAuthStore(state => state.user)
  const { data: loans = [] } = useQuery<Loan[]>({
    queryKey: ['loans'], 
    queryFn: getLoans
  })

  const stats = [
    {
      title: 'Available Credit',
      value: '$2,500',
      subtitle: 'Ready to use',
      icon: DollarSign,
      color: 'text-gold-600',
      bgColor: 'bg-gradient-to-br from-gold-50 to-gold-100',
      borderColor: 'border-gold-200'
    },
    {
      title: 'Credit Score',
      value: '745',
      subtitle: '+15 this month',
      icon: TrendingUp,
      color: 'text-unitylend-600',
      bgColor: 'bg-gradient-to-br from-unitylend-50 to-red-100',
      borderColor: 'border-unitylend-200'
    },
    {
      title: 'Active Loans',
      value: loans.length,
      subtitle: 'In progress',
      icon: Clock,
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-200'
    },
    {
      title: 'Payment Score',
      value: '100%',
      subtitle: 'Excellent history',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      borderColor: 'border-green-200'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern">
      <div className="p-6 space-y-6">
        {/* Header with UnityLend Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-unitylend border border-white/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-unitylend-700 to-unitylend-900 bg-clip-text text-transparent">
                  Welcome back, {user?.firstName || 'User'}! 👋
                </h1>
                <p className="text-unitylend-600 mt-2 font-medium">
                  Building wealth together through smart financial decisions
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">July 2025</p>
                <p className="text-lg font-display font-bold text-unitylend-700">UnityLend Dashboard</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid with Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className={`${stat.bgColor} ${stat.borderColor} border-2 hover:shadow-xl transition-all duration-300 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.color} bg-white/50 backdrop-blur-sm`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-display font-bold text-gray-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.subtitle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Loans */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Active Loans</span>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loans.length > 0 ? (
                <div className="space-y-4">
                  {loans.slice(0, 3).map((loan: Loan) => (
                    <div
                      key={loan.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">Loan #{loan.id}</h4>
                          <p className="text-sm text-gray-600">
                            ${loan.amount} at {loan.interestRate}% APR
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>50% paid</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No active loans
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ready to apply for your first loan?
                  </p>
                  <Button>Apply Now</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="default">
                <DollarSign className="mr-2 h-4 w-4" />
                Apply for Loan
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Make Payment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Credit Report
              </Button>
            </CardContent>
          </Card>

          {/* Financial Insights */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>💡 Financial Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p>Your payment history is excellent</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p>Consider a larger loan for home improvements</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <p>Your credit utilization is optimal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage
