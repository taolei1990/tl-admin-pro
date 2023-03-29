<template>
  <div>
    文件预览
    <div v-html="html" />
  </div>
</template>

<script setup>
defineOptions({ name: 'DocIndex' })
import showdown from 'showdown'
const converter = new showdown.Converter()
const readme = load('./README.md')
const html = converter.makeHtml(readme)

// $('#virVariable').text(text)
function load(name) {
  const xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', name, false)
  xhr.overrideMimeType('text/html;charset=utf-8')
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}
</script>

<style scoped></style>
