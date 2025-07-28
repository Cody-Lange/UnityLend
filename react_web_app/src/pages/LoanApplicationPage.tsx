import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LoanApplicationPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    amount: 1000,
    termMonths: 12,
    purpose: '',
    annualIncome: ''
  })

  const totalSteps = 4

  const steps = [
    { number: 1, title: 'Loan Amount', icon: DollarSign },
    { number: 2, title: 'Loan Terms', icon: Calendar },
    { number: 3, title: 'Financial Info', icon: TrendingUp },
    { number: 4, title: 'Review', icon: CheckCircle }
  ]

  const loanAmounts = [500, 1000, 1500, 2000, 2500, 3000]
  const termOptions = [
    { value: 6, label: '6 months' },
    { value: 12, label: '12 months' },
    { value: 18, label: '18 months' },
    { value: 24, label: '24 months' },
    { value: 36, label: '36 months' }
  ]

  const calculateMonthlyPayment = (amount: number, termMonths: number, apr: number = 6.5) => {
    const monthlyRate = apr / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                   (Math.pow(1 + monthlyRate, termMonths) - 1)
    return payment.toFixed(2)
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
                      max="5000"
                      value={formData.amount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amount: parseInt(e.target.value) || 0 })}
                      className="text-lg font-semibold border-2 focus:border-unitylend-500"
                      placeholder="Enter amount"
                    />
                    <p className="text-sm text-gray-500">
                      Minimum: $500 • Maximum: $5,000
                    </p>
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
                          <span className="text-gray-700">Estimated APR:</span>
                          <span className="font-bold text-green-600">6.5%</span>
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
                <Button
                  onClick={nextStep}
                  disabled={currentStep === totalSteps}
                  className="bg-gradient-to-r from-unitylend-600 to-unitylend-700 hover:from-unitylend-700 hover:to-unitylend-800 text-white shadow-unitylend"
                >
                  {currentStep === totalSteps ? 'Submit Application' : 'Continue'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoanApplicationPage
