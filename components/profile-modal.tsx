'use client'

import { useProfile } from '@/lib/hooks/use-profile-modal'
import { useEffect } from 'react'

import ProfileForm from '@/components/profile-form'

export function ProfileModal() {
  const { isProfileOpen, toggleProfile } = useProfile()

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        toggleProfile()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [toggleProfile])

  if (!isProfileOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center min-h-screen"
      onClick={() => toggleProfile()}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">Profile</h2>
          <button
            onClick={() => toggleProfile()}
            className="text-xl font-semibold"
          >
            &times;
          </button>
        </div>
        <ProfileForm />
      </div>
    </div>
  )
}
