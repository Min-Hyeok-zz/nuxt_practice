<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{view.subject}}
      </h1>
      <h2 class="subtitle">
        {{view.content}}
      </h2>
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
    mh.getData(`/board/${params.idx}`, (data) => {
      console.log(data)
    })
    callback(null, {view : {subject: 'test', content: 'test2'}})
    // mh.getData(`/board/${params.idx}`, (data) => {
    //   callback(null, { view: data[0] })
    // })
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
