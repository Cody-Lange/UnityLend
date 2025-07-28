export interface User {
  id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  phoneNumber?: string
  kycStatus: 'pending' | 'approved' | 'rejected'
  createdAt: string
  updatedAt: string
}

export interface Loan {
  id: string
  userId: string
  amount: number
  apr: number
  termMonths: number
  status: 'pending' | 'approved' | 'rejected' | 'disbursed' | 'repaid' | 'defaulted'
  riskScore?: number
  aiAssessment?: {
    riskScore: number
    recommendedApr: number
    maxLoanAmount: number
    assessmentFactors: {
      averageBalance: number
      transactionFrequency: number
      incomeStability: number
      debtToIncomeRatio: number
    }
    modelVersion: string
  }
  arbitrumTxHash?: string
  usdcAmount?: number
  smartContractAddress?: string
  circlePaymentId?: string
  createdAt: string
  updatedAt: string
}

export interface LoanApplication {
  amount: number
  termMonths: number
}

export interface AuthTokens {
  access: string
  refresh: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  username: string
  password: string
  confirmPassword: string
  phoneNumber?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface LoanStatusResponse {
  loans: Loan[]
  totalLoans: number
}

export interface CreditAssessment {
  riskScore: number
  recommendedApr: number
  maxLoanAmount: number
  assessmentFactors: {
    averageBalance: number
    transactionFrequency: number
    incomeStability: number
    debtToIncomeRatio: number
  }
  modelVersion: string
}
