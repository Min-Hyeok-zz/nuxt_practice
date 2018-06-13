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
      <div class="board-list">
        <ul v-for="data in list" :key="data.idx">
          <li>글번호 : {{ data.idx }}</li>
          <li>작성자 : {{ data.writer }}</li>
          <li>글제목 : <nuxt-link :to="`/board/view/${data.idx}`">{{ data.subject }}</nuxt-link></li>
          <li>작성일 : {{ data.date }}</li>
        </ul>
      </div>
      
    </div>
  </section>
</template>

<script>
import mh from '~/plugins/mh'
export default {
  async asyncData ({ params }, callback) {
    mh.getData('/board', data => {
      callback(null, {list:data})
    })
  },
  async data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
