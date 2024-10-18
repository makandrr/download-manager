import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Layout } from './components/Layout'

const AppLayout = styled.div`
    height: 100vh;
    background-image: linear-gradient(
        -13deg,
        ${({ theme }) => theme.background.secondary} 50%,
        ${({ theme }) => theme.background.primary} 50%
    );
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppLayout>
                <Layout />
            </AppLayout>
        </ThemeProvider>
    )
}

export default App
