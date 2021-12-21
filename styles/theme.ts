import { Heading, theme } from '@chakra-ui/react'

const customTheme = {
    ...theme,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: "Menlo, monospace"
    },
    fontWeights: {
        ...theme.fontWeights,
    },
}

export default customTheme;