<template>
  <section class="container">
    <div>
      <h1 class="title">글작성</h1>
        <form action="" method="post" @submit="boardAdd" class="form">
            <input type="text" name="writer" id="writer" placeholder="작성자" class="form-control" required readonly v-model="this.$store.state.member[0]['name']">
            <input type="text" name="subject" id="subject" placeholder="글제목" class="form-control" required>
            <textarea name="content" id="content" class="form-control" placeholder="글내용" required></textarea>
            <button type="submit" class="button--green">글작성</button>
        </form>
    </div>
  </section>
</template>


<script>
import mh from '~/plugins/mh'
export default {
  created () {
    if (!this.$store.state.member){
      alert('로그인 후 이용 가능합니다.')
      this.$router.go(-1)
    }
  },
  methods: {
    async boardAdd (e) {
      e.preventDefault();
      const url = '/api/board'
      const frm = e.target
      const _this = this
      mh.postData(url, mh.serialize(frm), data => {
        alert('완료되었습니다.')
        _this.$router.push(`./view/${data.insertId}`)
      })
    }
  }
}
</script>

<style>

</style>
