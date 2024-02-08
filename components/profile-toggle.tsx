'use client'

import * as React from 'react'

import { useProfile } from '@/lib/hooks/use-profile'
import { Button } from '@/components/ui/button'

export function ProfileToggle() {
  const { toggleProfile } = useProfile()

  return (
    <Button
      variant="ghost"
      className="px-4 py-2 text-md lg:flex border "
      onClick={() => toggleProfile()}
    >
      <span>Profile</span>
    </Button>
  )
}
