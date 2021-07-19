import React from 'react'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiBookOpen, FiMail } from "react-icons/fi"

const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column" visibility={'hidden', 'visible', 'visible'} display={['none', 'flex', 'flex']}>
            <div>
                <Link href="https://github.com/mwesterby" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/michael-westerby/"
                    title="LinkedIn"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://medium.com/@michael.westerby" title="Medium" isExternal>
                    <IconButton
                        aria-label="Medium"
                        icon={<FiBookOpen />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
            </div>
        </Flex>
    )
}

export default Footer