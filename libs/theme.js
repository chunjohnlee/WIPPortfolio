// 1. import `extendTheme` function
import { extendTheme, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
        }
    })

}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
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
            color: mode('#3d7aed', '#88ccca')(props),
            textUnderlineOffset: 3,
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca',
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