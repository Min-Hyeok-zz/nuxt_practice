<template>
  <section class="container">
    <div>
      <h1 class="title">글수정</h1>
        <form action="" method="post" @submit.prevent="boardUpdate" class="form">
            <input type="text" name="writer" id="writer" placeholder="작성자" class="form-control" :value="view.writer" required>
            <input type="text" name="subject" id="subject" placeholder="글제목" class="form-control" :value="view.subject" required>
            <textarea name="content" id="content" class="form-control" placeholder="글내용" required v-html="view.content"></textarea>
            <button type="submit" class="button--green">글수정</button>
        </form>
    </div>
  </section>
</template>

<script>
import mh from '~/plugins/mh'
export default {
  async asyncData ({ params }, callback) {
    mh.getData(`/api/board/${params.idx}`, (data) => {
      console.log(data)
      callback(null, { view: data[0] })
    })
  },
  data () {
    return {
      view: []
    }
  },
  methods: {
    async boardUpdate (e) {
        const _this = this
        const idx = this.$route.params.idx
        const url = `/api/board/${idx}`
        const frm = e.target
        console.log(mh.serialize(frm))
        mh.putData(url, mh.serialize(frm), data => {
          alert('수정되었습니다.')
          _this.$router.push(`/board/view/${idx}`)
        })
    }
  }
}
</script>

<style>

</style>
