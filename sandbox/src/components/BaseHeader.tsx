import React from 'react'
import style from '@/assets/css/BaseHeader.module.scss'
import { IconBase } from '@/components/icons/IconBase'
import IconLogo from '@/components/icons/IconLogo'

export const BaseHeader: React.FC = () => {
  return (
    <div className={style.header}>
      <IconBase width='40' height='40' icon={<IconLogo />} />
      <div className={style.header__menu}>
        <div className={style.header__menuItem}>
          <p>Home</p>
        </div>
        <div className={style.header__menuItem}>
          <p>About</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
