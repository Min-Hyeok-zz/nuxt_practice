<template>
  <section class="container">
    <div>
      <h1 class="title">
        글작성 페이지
      </h1>
      <h2 class="subtitle">
        입니다.
      </h2>
      <div class="form">
        <form action="" method="post" @submit="boardAdd">
            <input type="text" name="writer" id="writer" placeholder="작성자" class="form-control" required>
            <input type="text" name="subject" id="subject" placeholder="글제목" class="form-control" required>
            <textarea name="content" id="content" class="form-control" placeholder="글내용" required></textarea>
            <button type="submit" class="button--green">글작성</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import mh from '~/plugins/mh'
export default {
  methods: {
    async boardAdd (e) {
      e.preventDefault();
      const url = '/board'
      const frm = e.target
      const _this = this
      mh.postData(url, mh.serialize(frm), data => {
        _this.$router.push(`./view/${data.insertId}`)
      })
    }
  }
}
</script>

<style>

</style>
