import React from 'react'
import Widget from './components/widget'
import TimeDate from './components/timeDate'
import LightSwitch from './components/darkLightToggle'
import ModalComponent from './components/modal'
import DropdownComponent from './components/dropdown'
import Sidebar from './components/sidebar'
import SearchBar from './components/searchbar'
import CopyToClipboard from './components/copyToClipboard'
import FileUploader from './components/fileUploader'
import WishList from './components/wishList'


export default function App() {
  
  return (
    <>
      {/* <CopyToClipboard /> */}
      {/* <DropdownComponent /> */}
      {/* <FileUploader uploadURL="https://httpbin.org/post" /> */}
      {/* <LightSwitch /> */}
      {/* <ModalComponent /> */}
      {/* <SearchBar /> */}
      {/* <Sidebar /> */}
      {/* <TimeDate /> */}
      {/* <Widget /> */}
      <WishList />
    </>
  )
}
