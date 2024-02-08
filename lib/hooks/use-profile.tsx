'use client'

import * as React from 'react'

const LOCAL_STORAGE_KEY = 'profile'

interface ProfileContext {
  isProfileOpen: boolean
  toggleProfile: () => void
  isLoading: boolean
}

const ProfileContext = React.createContext<ProfileContext | undefined>(
  undefined
)

export function useProfile() {
  const context = React.useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider')
  }
  return context
}

interface ProfileProviderProps {
  children: React.ReactNode
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [isProfileOpen, setProfileOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value) {
      setProfileOpen(JSON.parse(value))
    }
    setLoading(false)
  }, [])

  const toggleProfile = () => {
    setProfileOpen(value => {
      const newState = !value
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState))
      return newState
    })
  }

  if (isLoading) {
    return null
  }

  return (
    <ProfileContext.Provider
      value={{ isProfileOpen, toggleProfile, isLoading }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
