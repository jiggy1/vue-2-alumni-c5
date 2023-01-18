<template>
  <div class="wrapper--input">
    <input type="text" placeholder="Search..." />
    <button class="button">Search</button>
  </div>
</template>

<script>
export default {
  name: "BoitedeRech",
};
</script>

<style lang="scss" scoped>
.wrapper--input {
  margin-inline: auto;
  display: flex;
  width: 100%;
  max-width: 68.25rem;

  input {
    background-color: #f6f6f6;
    border: none;
    outline: none;
    padding-left: 16px;
    padding-right: 16px;
    flex: 1 1 70%;
  }
}

.button {
  background-color: #ff7900;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  flex: 1 0 30%;
}

@media only screen and (max-width: 1534px) {
  .wrapper--input {
    max-width: 696px;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper--input {
    padding: 0 2rem;
  }
}
</style>
