<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container {
  overflow: hidden;
  text-align: center;
}
.title
{
  color: #3076fa;
  margin-top: 15px;
  font-size: 100px;
}
.info
{
  font-weight: 300;
  font-size: 40px;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
