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
        <td>6754.87 </td> 
        <td>17280450 BTC</td>
      </tr>
      <tr>
        <td>Ethereum</td>
        <td>247.25</td> 
        <td>102102365ETH</td>
      </tr>
      <tr>
        <td>Ripple</td>
        <td>0.54</td> 
        <td>39809069106 XRP</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CryptoComponent",
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
