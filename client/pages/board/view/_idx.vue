<template>
  <section class="container">
    <div>
      <h1 class="title">글보기</h1>
      <table id="view-table">
        <colgroup>
          <col width="20%">
          <col width="80%">
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td>{{view.writer}}</td>
          </tr>
          <tr>
            <td>글제목</td>
            <td>{{view.subject}}</td>
          </tr>
          <tr>
            <td>글내용</td>
            <td>{{view.content}}</td>
          </tr>
          <tr>
            <td>작성일</td>
            <td>{{view.date}}</td>
          </tr>
          <tr>
            <td>조회수</td>
            <td>{{view.hit}}</td>
          </tr>
        </tbody>
      </table>
      <div class="links">
          <nuxt-link to="/board/list">뒤로가기</nuxt-link>
          <nuxt-link :to="`/board/write/${$route.params.idx}`">수정하기</nuxt-link>
          <a href="#" @click.prevent="boardDelete">삭제하기</a>
      </div>
    </div>
  </section>
</template>

<script>
import mh from '~/plugins/mh'
export default {
  asyncData ({ params }, callback) {
    mh.getData(`/api/board/${params.idx}`, (data) => {
      callback(null, {view : data[0]})
    })
  },
  data () {
    return {
      view: []
    }
  },
  methods: {
    async boardDelete (e) {
      alert('test')
    }
  },
  async created () {
    
  }
}
</script>

<style>

</style>
