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
        <nuxt-link :to="`/board/write`" class="button--green">글작성</nuxt-link>
      </div>
      <div>
        {{ list }}
        <!-- <ul v-if="this.list.length > 0">
          <li v-for="data in list" :key="data.idx">
            {{data.idx}}
            {{data.writer}}
            <router-link :to="`/board/view/${data.idx}`">{{data.subject}}</router-link>
            {{data.date}}
          </li>
        </ul> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
 data () {
    return {
      list: []
    }
  }
  // created () {
  //   fetch('http://localhost:3001/board')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(json => {
  //     console.log(json)
  //     this.list = json
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
}
</script>

<style>

</style>
