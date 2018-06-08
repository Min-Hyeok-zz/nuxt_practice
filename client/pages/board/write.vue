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
            <input type="text" name="writer" placeholder="작성자" class="form-control" required>
            <input type="text" name="subject" placeholder="글제목" class="form-control" required>
            <textarea name="content" class="form-control" placeholder="글내용" required></textarea>
            <button type="submit" class="button--green">글작성</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      writer:'',
      subject:'',
      content:''
    }
  },
  methods: {
    boardAdd (e) {
      e.preventDefault();
      const url = 'http://localhost:8080/board/write'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          writer: frm.writer.value,
          subject: frm.subject.value,
          content: frm.content.value,
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          alert('글이 추가되었습니다')
          _this.$router.push(`./view/${json.insertId}`)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
