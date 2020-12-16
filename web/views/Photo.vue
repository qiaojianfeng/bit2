<template>
  <div class="photo">
    <img :src="photo.url"
         width="200" />
    <h1>{{photo.title}}</h1>
    <p>{{photo.size}}KB</p>
    <p>创建时间:{{photo.createTime}}</p>
    <p>版权号:BT2-{{photo._id}}</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ul>
      <li>网页贴图代码(HTML):
        <input type="text"
               readonly
               :value='`<a href="###"><img src="${url}"alt="${photo.name}" border="0" /></a>`'>

      </li>
      <li>论坛贴图代码(BBCode):
        <input type="text"
               readonly
               :value='`[url=##][img]${url}[/img][/url]`'>
      </li>
      <li>Markdown代码:
        <input type="text"
               readonly
               :value='`[![CQvjTH.jpg](${url})](https://###)`'>
      </li>
      <li>图片URL链接:
        <input type="text"
               readonly
               :value='url'>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getPhotoApi } from '@/api/photo'
export default {
  props: ['id'],
  setup(props) {
    const photo = ref({})
    let url = ref('')
    async function getMyPhoto() {
      try {
        const res = await getPhotoApi(props.id)
        if (res) {
          photo.value = res.data
          url.value = window.location.origin + res.data.url
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMyPhoto()
    return { photo, url }
  }
}
</script>
<style lang="scss" scoped>
.photo {
}
</style>