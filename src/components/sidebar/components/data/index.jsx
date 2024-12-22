import React from 'react'
import { ArticleNyTimes, Barcode, ChatCenteredDots, Headset, House, UsersThree } from 'phosphor-react'

const size = 22

export const SideData = [
  {
    title: 'Home',
    path: '/',
    icon: <House size={size} />
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <ArticleNyTimes size={size} />    
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Barcode size={size} />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <UsersThree size={size} />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <ChatCenteredDots size={size} />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Headset size={size} />
  }
]