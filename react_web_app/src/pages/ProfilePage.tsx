import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuthStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="space-y-4">
                <p className="text-gray-300">
                  Name: {user.firstName} {user.lastName}
                </p>
                <p className="text-gray-300">
                  Email: {user.email}
                </p>
                <Button onClick={logout} variant="destructive">
                  Sign Out
                </Button>
              </div>
            ) : (
              <p className="text-gray-400">Not signed in</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default ProfilePage
