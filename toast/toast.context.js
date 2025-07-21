'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import Toast from './toast.common'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')
  const [toastDuration, setToastDuration] = useState(3000)

  const showToast = useCallback(({ message, type = 'success', duration = 3000 }) => {
    setToastMessage(message)
    setToastType(type)
    setToastDuration(duration)
    setToastOpen(true)
  }, [])

  const handleClose = () => {
    setToastOpen(false)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        open={toastOpen}
        onClose={handleClose}
        message={toastMessage}
        type={toastType}
        autoHideDuration={toastDuration}
      />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within a ToastProvider')
  return context
}
