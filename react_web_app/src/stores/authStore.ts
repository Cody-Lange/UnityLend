import { create } from 'zustand'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, _password: string) => {
    // Mock login - in real app, call API
    const mockUser: User = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: email
    }
    set({ user: mockUser, isAuthenticated: true })
  },
  logout: () => {
    set({ user: null, isAuthenticated: false })
  },
  setUser: (user: User) => {
    set({ user, isAuthenticated: true })
  }
}))
