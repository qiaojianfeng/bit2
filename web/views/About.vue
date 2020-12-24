<template>
  <div class="about">
    <base-card>
      <h1>服务条款</h1>
      <h3>禁止上传以下违法违规图片, 一经发现, 立即删除该用户下所有图片, 并永久封账号和IP!</h3>
      <ul>
        <li>侵权图片, 包括侵犯个人私隐、企业版权等;</li>
        <li>含有色情內容的图片;</li>
        <li>成人性用品的相关图片;</li>
        <li>煽动暴力、宣扬宗教、种族主义、种族仇恨等;</li>
        <li>含有恐怖、血腥场面的图片;</li>
        <li>含有VPN相关信息的图片;</li>
        <li>含有二维码信息的图片;</li>
        <li>含有色情网站水印标记的图片;</li>
        <li>其他非法图片(包括但不限于反动、博彩、电脑病毒、欺诈、黑产、非法药品等行为);</li>
        <li>违反中华人民共和国法律法规的图片;</li>
      </ul>
    </base-card>
  </div>
</template>
<script>
import BaseCard from '@/components/BaseCard'
export default {
  components: {
    BaseCard
  }
}
</script>
<style lang="scss" scoped>
.about {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>