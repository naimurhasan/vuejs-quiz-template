<template>
  <div>
    <a v-on:click="$router.go(-1)" class="btn btn-back">
      <img src="../assets/curve-arrow.svg" class="img-icon">
    </a>
    <div id="quizboard" class="section">
      <h1>Multiple Choise Questions</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'QuizBoard',
    
}
</script>

<style scoped>
#quizboard{
  margin-top: 50px;
  max-width: 900px;
}
img.img-icon {
    width: 70px;
    margin: 10px;
}
</style>