// 1. import `extendTheme` function
import { extendTheme, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#edf2f4', '#2b2d42')(props),
        }
    })

}

const components = {
    Heading: {
        baseStyle: {
            marginBottom: 3,
        },
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
            'sub-title': {
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', 'highlight')(props),
            textUnderlineOffset: 3,
        })
    }
}

const fonts = {
    heading: "Microgramma D Medium Extended",
    body: "PP Telegraf",
}

const colors = {
    glassTeal: '#88ccca',
    highlight: '#ff6375',
}

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme