<template>
  <div>
    <header id="header">
      <div class="logo"> <nuxt-link :to="`/`"><app-logo class="app-logo"></app-logo></nuxt-link></div>
      <nav id="nav">
        <ul id="gnb">
          <li><nuxt-link :to="`/board/list`">게시판</nuxt-link></li>
          <li><nuxt-link :to="`/member/join`">회원가입</nuxt-link></li>
          <li><nuxt-link :to="`/member/login`">로그인</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  }
}
</script>
<style src="~/assets/css/style.css" />
