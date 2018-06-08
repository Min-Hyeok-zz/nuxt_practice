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
        <li>
          <nuxt-link :to="`/board/write`" class="button--green">글작성</nuxt-link>
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
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  list-style: none;
}

#header{
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
}
#gnb{
  display: flex;
}
#gnb > li{
  margin: 0 5px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  transition: .4s;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;transition: .4s;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.form-control{
  padding: 12px 10px;
  color: #35495e;
  border-radius: 5px;
  border:1px solid #bebebe;
}
</style>
