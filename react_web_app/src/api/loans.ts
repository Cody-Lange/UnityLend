export interface Loan {
  id: string
  amount: number
  interestRate: number
  term: number
  status: 'pending' | 'approved' | 'rejected' | 'active' | 'completed'
  createdAt: string
  borrower: {
    name: string
    creditScore: number
  }
}

// Mock data for demonstration
const mockLoans: Loan[] = [
  {
    id: '1',
    amount: 50000,
    interestRate: 8.5,
    term: 24,
    status: 'active',
    createdAt: '2025-01-15',
    borrower: {
      name: 'Alice Johnson',
      creditScore: 750
    }
  },
  {
    id: '2',
    amount: 25000,
    interestRate: 9.2,
    term: 12,
    status: 'pending',
    createdAt: '2025-01-20',
    borrower: {
      name: 'Bob Smith',
      creditScore: 680
    }
  }
]

export const getLoans = async (): Promise<Loan[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockLoans
}

export const getLoan = async (id: string): Promise<Loan | null> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockLoans.find(loan => loan.id === id) || null
}
