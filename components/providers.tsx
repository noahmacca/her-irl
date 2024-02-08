'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { ProfileProvider } from '@/lib/hooks/use-profile'
import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <ProfileProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ProfileProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}
