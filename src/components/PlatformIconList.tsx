import React from 'react'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'



interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

  const iconMap: {[key: string] : IconType} = {
    //mapping the slug (a form of textual id) of each platform to the icon component of the console
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe

  } 
    
  return (
    <HStack marginY={1}>
    {platforms.map((platform) => <Icon key={platform.id}as={iconMap[platform.slug]} color={'gray.500'}/>)}
    </HStack>
  ) 
}

export default PlatformIconList