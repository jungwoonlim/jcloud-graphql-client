import { gql, useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...:(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <h1>
        {currency}: {rate}
      </h1>
    </div>
  ));
}

export default Home;
