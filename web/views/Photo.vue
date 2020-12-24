<template>
  <div class="photo">
    <div class="pic">
      <img class="img"
           :src="photo.url" />
      <p>版号:BIT2-{{photo._id}}</p>
    </div>
    <div class="desc">
      <h1 class="title">{{photo.title}}</h1>
      <p class="item size">大小:{{photo.size}}KB</p>
      <p class="item addtime">创建时间:{{photo.createTime}}</p>
      <ul class="codes">
        <li v-for="(item,index) in codesList"
            :key="index">
          <div class="label">{{item.name}}</div>
          <div class="con">
            <input type="text"
                   class="input"
                   readonly
                   :value='item.temp'>
            <span class="btn"
                  @click="handleCopy(item.temp)">复制</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import { getPhotoApi } from '@/api/photo'
import { useClipboard } from 'v-clipboard3'
export default {
  props: ['id'],
  setup(props) {
    const photo = ref({})
    const url = ref('')
    const pageUrl = window.location.href
    const codes = [
      { name: 'HTML', temp: `<a href="${pageUrl}" target="_blank"><img src="{url}"alt="{filename}" border="0" /></a>` },
      { name: 'BBCode', temp: `[url=${pageUrl}][img]{url}[/img][/url]` },
      { name: 'Markdown', temp: `[![{filename}]({url})](${pageUrl})` },
      { name: 'URL', temp: `{url}` }
    ]
    const codesList = computed(function () {
      return codes.map((v) => {
        if (url.value) {
          v.temp = v.temp.replace(/{url}/g, url.value).replace(/{filename}/, photo.value.filename)
        }
        return v
      })
    })
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

    async function handleCopy(code) {
      try {
        await useClipboard(code)
        alert('copy ok！')
      } catch (error) {
        console.log(error)
        alert('copy error!')
      }
    }
    return { photo, url, handleCopy, codesList }
  }
}
</script>
<style lang="scss" scoped>
.photo {
  padding-top: 200px;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
  .pic {
    width: 60%;
    .img {
      max-width: 100%;
      max-height: 50vh;
    }
  }
  .desc {
    background-color: #21232c;
    padding: 30px;
    border-radius: 10px;
    text-align: left;
    color: #fff;
    .title {
    }
    .item {
      font-size: 13px;
      &.size {
        margin-top: 30px;
      }
    }
    .codes {
      margin-top: 35px;
      list-style: none;
      li {
        width: 100%;
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          width: 100px;
        }
        .con {
          .input {
            width: 200px;
            height: 30px;
            box-sizing: border-box;
            padding: 2px 5px;
            border-radius: 4px 0 0 4px;
            background-color: rgb(41, 46, 57);
            color: #fff;
            font-size: 12px;
            font-weight: 300;
          }
          .btn {
            width: 60px;
            height: 30px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            border-radius: 3px;
            font-size: 14px;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
            background-color: #f30843;
            text-align: center;
            &:hover {
              background-color: #c40b39;
            }
          }
        }
      }
    }
  }
}
</style>