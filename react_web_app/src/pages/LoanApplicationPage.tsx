import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  DollarSign, 
  Calendar, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Info
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'

interface LoanTerms {
  amount: number
  termMonths: number
  apr: number
  monthlyPayment: number
  totalInterest: number
  totalRepayment: number
}

const LoanApplicationPage: React.FC = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    amount: 5000,
    termMonths: 12,
    purpose: '',
    annualIncome: '',
    collateralType: 'ETH',
    collateralAmount: '',
    walletAddress: ''
  })
  const [loanTerms, setLoanTerms] = useState<LoanTerms | null>(null)

  const totalSteps = 4

  const steps = [
    { number: 1, title: 'Loan Details', icon: DollarSign, description: 'Amount & Purpose' },
    { number: 2, title: 'Collateral', icon: Shield, description: 'Secure Your Loan' },
    { number: 3, title: 'Terms', icon: Calendar, description: 'Review Terms' },
    { number: 4, title: 'Confirm', icon: CheckCircle, description: 'Submit Application' }
  ]

  const loanPurposes = [
    'Business Investment',
    'Education',
    'Home Improvement',
    'Debt Consolidation',
    'Other'
  ]

  const collateralOptions = [
    { symbol: 'ETH', name: 'Ethereum', ratio: '75%', icon: '🔷' },
    { symbol: 'WBTC', name: 'Wrapped Bitcoin', ratio: '70%', icon: '₿' },
    { symbol: 'USDC', name: 'USD Coin', ratio: '95%', icon: '💵' },
    { symbol: 'ARB', name: 'Arbitrum', ratio: '60%', icon: '🔵' }
  ]

  // Calculate loan terms based on amount, duration, and collateral
  const calculateLoanTerms = (amount: number, termMonths: number, collateralType: string): LoanTerms => {
    let baseAPR = 8.5
    
    // Adjust APR based on collateral type
    const collateralAPRAdjustment = {
      'ETH': -1.0,
      'WBTC': -1.5,
      'USDC': -2.0,
      'ARB': 0.5
    }
    
    const apr = baseAPR + (collateralAPRAdjustment[collateralType as keyof typeof collateralAPRAdjustment] || 0)
    const monthlyRate = apr / 100 / 12
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                          (Math.pow(1 + monthlyRate, termMonths) - 1)
    const totalRepayment = monthlyPayment * termMonths
    const totalInterest = totalRepayment - amount

    return {
      amount,
      termMonths,
      apr,
      monthlyPayment,
      totalInterest,
      totalRepayment
    }
  }

  useEffect(() => {
    const terms = calculateLoanTerms(formData.amount, formData.termMonths, formData.collateralType)
    setLoanTerms(terms)
  }, [formData.amount, formData.termMonths, formData.collateralType])

  // Quick loan amount options
  const loanAmounts = [1000, 2500, 5000, 10000, 25000, 50000]
  
  // Term options with different durations
  const termOptions = [
    { value: 6, label: '6 months', description: 'Short term' },
    { value: 12, label: '12 months', description: 'Most popular' },
    { value: 18, label: '18 months', description: 'Extended' },
    { value: 24, label: '24 months', description: 'Long term' },
    { value: 36, label: '36 months', description: 'Maximum' }
  ]

  // Calculate monthly payment
  const calculateMonthlyPayment = (amount: number, termMonths: number, apr: number = 6.5): string => {
    const monthlyRate = apr / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                   (Math.pow(1 + monthlyRate, termMonths) - 1)
    return payment.toFixed(2)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    navigate('/dashboard')
  }

  const getCollateralRequirement = (amount: number, collateralType: string) => {
    const ratios = {
      'ETH': 1.33,
      'WBTC': 1.43,
      'USDC': 1.05,
      'ARB': 1.67
    }
    return amount * (ratios[collateralType as keyof typeof ratios] || 1.5)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-unitylend-900 via-unitylend-800 to-red-900 bg-network-pattern p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold text-white mb-3">
            Apply for Your Loan
          </h1>
          <p className="text-gold-200 text-lg font-medium">
            AI-Driven Risk Analysis • DeFi-Powered • 5-10% APR
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-gold-500 border-gold-400 text-white shadow-gold'
                      : 'bg-white/20 border-white/30 text-white/60'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-gold-400' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-2xl mx-auto mt-3">
            {steps.map((step) => (
              <p
                key={step.number}
                className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-gold-300' : 'text-white/60'
                }`}
              >
                {step.title}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <Card className="bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-2xl overflow-hidden">
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-display font-bold text-unitylend-800 mb-2">
                      How much would you like to borrow?
                    </h2>
                    <p className="text-gray-600">Choose an amount that fits your needs</p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full mb-6 shadow-gold">
                      <span className="text-3xl font-display font-bold text-white">
                        ${formData.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {loanAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, amount })}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                          formData.amount === amount
                            ? 'border-unitylend-500 bg-unitylend-50 text-unitylend-700'
                            : 'border-gray-300 text-gray-700 hover:border-unitylend-300'
                        }`}
                      >
                        ${amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 font-semibold">Custom Amount</Label>
                    <Input
                      type="number"
                      min="500"
                      max="50000"
                      value={formData.amount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amount: parseInt(e.target.value) || 0 })}
                      className="text-lg font-semibold border-2 focus:border-unitylend-500"
                      placeholder="Enter amount"
                    />
                    <p className="text-sm text-gray-500">
                      Minimum: $500 • Maximum: $50,000
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-700 font-semibold">What's this loan for?</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {loanPurposes.map((purpose) => (
                        <motion.button
                          key={purpose}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData({ ...formData, purpose })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.purpose === purpose
                              ? 'border-unitylend-500 bg-unitylend-50 text-unitylend-700'
                              : 'border-gray-300 text-gray-700 hover:border-unitylend-300'
                          }`}
                        >
                          {purpose}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-display font-bold text-unitylend-800 mb-2">
                      Choose Your Collateral
                    </h2>
                    <p className="text-gray-600">Secure your loan with cryptocurrency</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {collateralOptions.map((collateral) => (
                      <motion.div
                        key={collateral.symbol}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setFormData({ ...formData, collateralType: collateral.symbol })}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          formData.collateralType === collateral.symbol
                            ? 'border-unitylend-500 bg-unitylend-50'
                            : 'border-gray-300 hover:border-unitylend-300'
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{collateral.icon}</span>
                          <div>
                            <h3 className="font-bold text-gray-900">{collateral.symbol}</h3>
                            <p className="text-sm text-gray-600">{collateral.name}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">LTV Ratio:</span>
                            <span className="font-semibold text-green-600">{collateral.ratio}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Required:</span>
                            <span className="font-semibold">
                              ${getCollateralRequirement(formData.amount, collateral.symbol).toLocaleString()} {collateral.symbol}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-700 font-semibold">Wallet Address (Optional)</Label>
                    <Input
                      value={formData.walletAddress}
                      onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                      className="border-2 focus:border-unitylend-500"
                      placeholder="0x... (connect wallet or enter manually)"
                    />
                    <p className="text-sm text-gray-500">
                      We'll verify your collateral balance before loan approval
                    </p>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-display font-bold text-unitylend-800 mb-2">
                      Choose Your Loan Term
                    </h2>
                    <p className="text-gray-600">Select a repayment schedule that works for you</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {termOptions.map((term) => (
                        <motion.div
                          key={term.value}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setFormData({ ...formData, termMonths: term.value })}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            formData.termMonths === term.value
                              ? 'border-unitylend-500 bg-unitylend-50'
                              : 'border-gray-300 hover:border-unitylend-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-gray-900">{term.label}</p>
                              <p className="text-sm text-gray-600">
                                ${calculateMonthlyPayment(formData.amount, term.value)}/month
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 ${
                              formData.termMonths === term.value
                                ? 'border-unitylend-500 bg-unitylend-500'
                                : 'border-gray-300'
                            }`}>
                              {formData.termMonths === term.value && (
                                <CheckCircle className="w-full h-full text-white" />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-xl border-2 border-gold-200">
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-gold-600 mr-2" />
                        <h3 className="font-display font-bold text-gold-800">Loan Summary</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Loan Amount:</span>
                          <span className="font-bold text-unitylend-700">${formData.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Term:</span>
                          <span className="font-bold text-unitylend-700">{formData.termMonths} months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Collateral:</span>
                          <span className="font-bold text-unitylend-700">{formData.collateralType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Estimated APR:</span>
                          <span className="font-bold text-green-600">
                            {loanTerms ? loanTerms.apr.toFixed(1) : '6.5'}%
                          </span>
                        </div>
                        <hr className="border-gold-300" />
                        <div className="flex justify-between">
                          <span className="text-gray-700">Monthly Payment:</span>
                          <span className="font-bold text-xl text-unitylend-700">
                            ${calculateMonthlyPayment(formData.amount, formData.termMonths)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-display font-bold text-unitylend-800 mb-2">
                      Review & Submit
                    </h2>
                    <p className="text-gray-600">Confirm your loan application details</p>
                  </div>

                  <div className="bg-gradient-to-br from-unitylend-50 to-gold-50 p-6 rounded-xl border-2 border-unitylend-200">
                    <h3 className="font-display font-bold text-unitylend-800 mb-4">Application Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="font-bold text-xl text-unitylend-700">${formData.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Purpose</p>
                          <p className="font-semibold text-gray-900">{formData.purpose}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Loan Term</p>
                          <p className="font-semibold text-gray-900">{formData.termMonths} months</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600">Collateral Type</p>
                          <p className="font-semibold text-gray-900">{formData.collateralType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Payment</p>
                          <p className="font-bold text-xl text-green-600">
                            ${calculateMonthlyPayment(formData.amount, formData.termMonths)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">APR</p>
                          <p className="font-semibold text-green-600">
                            {loanTerms ? loanTerms.apr.toFixed(1) : '6.5'}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-blue-800 mb-1">Next Steps</p>
                        <ul className="text-blue-700 space-y-1">
                          <li>• AI risk assessment (instant)</li>
                          <li>• Collateral verification</li>
                          <li>• Smart contract deployment</li>
                          <li>• Funds disbursement (24-48 hours)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="border-unitylend-300 text-unitylend-700 hover:bg-unitylend-50 disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Step {currentStep} of {totalSteps}
                </span>
                
                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-unitylend-600 to-unitylend-700 hover:from-unitylend-700 hover:to-unitylend-800 text-white shadow-unitylend"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoanApplicationPage
