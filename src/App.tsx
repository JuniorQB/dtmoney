import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext'
import { Transactions } from './pages/Transactions'
import { GLobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GLobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}