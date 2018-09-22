<template>
  <div>
    <h1>Static BTC | ETH | XRP Prices</h1>
    <table style="width:100%">
      <tr>
        <th>Currency</th>
        <th>Price</th> 
        <th>Circulating Supply</th>
      </tr>
      <tr>
        <td>Bitcoin</td>
        <td>{{ 6754.87 | formatCurrency }}</td> 
        <td>{{ 17280450 | formatNumber}} BTC</td>
      </tr>
      <tr>
        <td>Ethereum</td>
        <td>{{ 247.25 | formatCurrency }}</td> 
        <td>{{ 102102365 | formatNumber}} ETH</td>
      </tr>
      <tr>
        <td>Ripple</td>
        <td>{{ 0.54 | formatCurrency }}</td> 
        <td>{{ 39809069106 | formatNumber }} XRP</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CryptoComponent",
  filters: {
    formatCurrency(number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(number);
    },
    formatNumber(number) {
      return new Intl.NumberFormat().format(number);
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
