<template>
  <section class="container">
    <div>
      <h1 class="title">로그인</h1>
        <form action="" method="post" class="form">
            <input type="text" name="id" placeholder="아이디" class="form-control" required>
            <input type="text" name="subject" placeholder="글제목" class="form-control" required>
            <button type="submit" class="button--green">로그인</button>
        </form>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  }
}
</script>

<style>

</style>
