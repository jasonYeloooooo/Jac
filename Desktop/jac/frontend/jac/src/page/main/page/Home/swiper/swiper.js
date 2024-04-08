import React from 'react'
import { Space, Swiper,Toast } from 'antd-mobile'

import './demo8.css'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']


const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className="content"
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))


export default function swiper() {
  return (
    <Space direction='vertical' block>
    <Swiper
      style={{
        '--border-radius': '8px',
      }}
      loop
      autoplay
      defaultIndex={3}
    >
      {items}
    </Swiper>
   
  </Space>
  )
}