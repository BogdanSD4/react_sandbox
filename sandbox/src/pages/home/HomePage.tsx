import React from 'react'
import IconLogo from '@/components/icons/IconLogo'
import { IconBase } from '@/components/icons/IconBase'
import style from '@/assets/css/HomePage.module.scss'
import IconAuth from '@/components/icons/IconAuth'
import { CartContainer } from '@/pages/home/models/cartContainer'

const container = new CartContainer()

const HomePage: React.FC = () => {
  return (
    <div className={style.homePage}>
      {container.carts.map((item, index) => (
        <div key={index} className={style.homePage__cardWrap}>
          <div className={style.homePage__card}>
            <IconBase
              width='100'
              height='100'
              viewBox='0 0 16 16'
              icon={<IconAuth />}
            />
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage
