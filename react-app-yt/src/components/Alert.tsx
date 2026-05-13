import React, { type ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 border border-blue-100" role="alert">
        <span className="font-medium">{ children }</span>
    </div>
  )
}

export default Alert