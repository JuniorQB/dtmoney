import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((data) => {
              return (
                <tr key={data.id}>
                  <td width="50%">{data.description}</td>
                  <td>
                    <PriceHighLight variant={data.type}>
                      {data.type === 'outcome' && ' - '}
                      {priceFormatter.format(data.price)}
                    </PriceHighLight>
                  </td>
                  <td>{data.category}</td>
                  <td>{dateFormatter.format(new Date(data.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
