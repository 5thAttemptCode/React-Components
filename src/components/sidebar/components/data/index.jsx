import React from 'react'
import { ArticleNyTimes, Barcode, ChatCenteredDots, Headset, House, UsersThree } from 'phosphor-react'


const size = 22
const color = "#ffffff"

export const SideData = [
  {
    title: 'Home',
    path: '/',
    icon: <House size={size} color={color} />
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <ArticleNyTimes size={size} color={color} />    
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Barcode size={size} color={color} />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <UsersThree size={size} color={color} />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <ChatCenteredDots size={size} color={color} />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Headset size={size} color={color} />
  }
]