import './bat.scss'
import React from 'react'

interface BatProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Bat = ({ className, size = 'lg' }: BatProps) => {
  const sizeClass = {
    sm: 'bat-sm',
    md: 'bat-md', 
    lg: 'bat-lg',
    xl: 'bat-xl'
  }[size];

  return (
    <div className={className}>
      <div className='bat'/>
    </div>

  )
}

export default Bat
