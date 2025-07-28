import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { 
  User, 
  Loan, 
  LoanApplication, 
  AuthTokens, 
  LoginCredentials, 
  RegisterData,
  LoanStatusResponse,
  ApiResponse 
} from '../types'

class ApiClient {
  private client: AxiosInstance

  constructor(baseURL: string = 'http://localhost:8000/api') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add request interceptor to include auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Add response interceptor for token refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token expired, try to refresh
          const refreshToken = localStorage.getItem('refreshToken')
          if (refreshToken) {
            try {
              const response = await this.refreshToken(refreshToken)
              localStorage.setItem('accessToken', response.access)
              
              // Retry the original request
              error.config.headers.Authorization = `Bearer ${response.access}`
              return this.client.request(error.config)
            } catch (refreshError) {
              // Refresh failed, redirect to login
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
              window.location.href = '/login'
            }
          }
        }
        return Promise.reject(error)
      }
    )
  }

  // Authentication
  async login(credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await this.client.post('/login/', credentials)
    return response.data
  }

  async register(userData: RegisterData): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await this.client.post('/register/', userData)
    return response.data
  }

  async refreshToken(refresh: string): Promise<AuthTokens> {
    const response = await this.client.post('/token/refresh/', { refresh })
    return response.data
  }

  // User Profile
  async getUserProfile(): Promise<User> {
    const response = await this.client.get('/profile/')
    return response.data
  }

  // Loans
  async applyForLoan(application: LoanApplication): Promise<ApiResponse<Loan>> {
    const response = await this.client.post('/apply_loan/', application)
    return response.data
  }

  async getLoanStatus(): Promise<LoanStatusResponse> {
    const response = await this.client.get('/status/')
    return response.data
  }

  async getLoanDetails(loanId: string): Promise<Loan> {
    const response = await this.client.get(`/loans/${loanId}/`)
    return response.data
  }

  // Utility method for custom requests
  async request<T>(config: AxiosRequestConfig): Promise<T> {
    const response = await this.client.request(config)
    return response.data
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient()

// Export individual API functions for easy importing
export const authAPI = {
  login: (credentials: LoginCredentials) => apiClient.login(credentials),
  register: (userData: RegisterData) => apiClient.register(userData),
  refreshToken: (refresh: string) => apiClient.refreshToken(refresh),
}

export const userAPI = {
  getProfile: () => apiClient.getUserProfile(),
}

export const loanAPI = {
  apply: (application: LoanApplication) => apiClient.applyForLoan(application),
  getStatus: () => apiClient.getLoanStatus(),
  getDetails: (loanId: string) => apiClient.getLoanDetails(loanId),
}
