import React from 'react'

interface IconBaseProps {
  width?: string
  height?: string
  color?: string
  viewBox?: string
  icon: React.ReactNode
}

export const IconBase: React.FC<IconBaseProps> = ({
  width = '50',
  height = '50',
  color = 'black',
  viewBox = '0 0 32 32',
  icon,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
    >
      {icon}
    </svg>
  )
}
