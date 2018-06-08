<template>
  <section class="container">
    <div>
      <h1 class="title">
        회원가입
      </h1>
      <h2 class="subtitle">
        
      </h2>
      <div class="links">
      </div>
      <div class="form">
        <form action="" method="post">
            <input type="text" name="id" placeholder="아이디" class="form-control" required>
            <input type="password" name="pw" placeholder="비밀번호" class="form-control" required>
            <input type="text" name="name" placeholder="이름" class="form-control" required>
            <button type="submit" class="button--green">회원가입</button>
        </form>
      </div>
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
