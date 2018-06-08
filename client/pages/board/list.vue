<template>
  <section class="container">
    <div>
      <h1 class="title">
        게시판
      </h1>
      <h2 class="subtitle">
        게시글 리스트
      </h2>
      <div class="links">
        <a href="/board/write" class="button--green">글작성</a>
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
