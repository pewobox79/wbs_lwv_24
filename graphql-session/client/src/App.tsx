import './App.css'
import Clients from './components/Clients'
import MainContent from './components/MainContent'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:5001/graphql',
    cache: new InMemoryCache()
  })

  return <ApolloProvider client={client}>
    <MainContent>
      <h1>GraphQL mit Apollo</h1>
      <Clients />
    </MainContent>
  </ApolloProvider>

}

export default App
