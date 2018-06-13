<template>
  <div>
    <header id="header">
      <div class="logo"><app-logo/></div>
      <ul id="gnb">
        <li>
          <nuxt-link :to="`/`" class="button--green">메인</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="`/board/list`" class="button--green">게시판</nuxt-link>
        </li>
      </ul>
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
