<template>
  <section class="container">
    <div>
      <h1 class="title">
        글수정 페이지
      </h1>
      <h2 class="subtitle">
        입니다.
      </h2>
      <div class="form">
        <form action="" method="post">
            <input type="text" name="writer" placeholder="작성자" class="form-control" required>
            <input type="text" name="subject" placeholder="글제목" class="form-control" required>
            <textarea name="content" class="form-control" placeholder="글내용" required></textarea>
            <button type="submit" class="button--green">글작성</button>
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
