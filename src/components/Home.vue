<template>
<div class="content">
  <div class="wrapper">
    <div class="title"><h1>THE FINAL LIST</h1></div>
    <p>THE DEFINITIVE COLLECTION OF BESTS, WORSTS, AND GREATS<br>
    (THESE LISTS ARE NOT FINAL)</p>
    <router-link
      class="btn btn-confirm"
      :to="{ name: 'movies' }"
    >
      START VOTING
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.title h1 { color: var(--color-blue); width: 100%; font-size: 10em; text-align: center; }
.wrapper {
  padding: 0 5vw;
  text-align: center;
}

p {
  padding-bottom: 20px;
}

@media screen and (max-width: 414px) {
  .title h1 { font-size: 3em; }
}

a.btn.btn-confirm {
  text-decoration: none;
}
</style>
