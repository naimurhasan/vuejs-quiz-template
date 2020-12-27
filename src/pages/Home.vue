<template>
  <div id="intro" class="section">
    <h1>Quiz</h1>
    <p>Welcome to Quiz Board!</p>
    <router-link to="/quiz" class="btn btn-submit">Start Now</router-link>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style scoped>
#intro {
    margin-top: 200px;
}
#intro h1 {
    font-size: 70px;
}
#intro p{
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>