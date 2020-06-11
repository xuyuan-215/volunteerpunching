<template>
  <div   class="c-s">
   <van-nav-bar title="我" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

  <div class="b-h">
   <div class="b-h-1">
      <div>
      <img class="b-g" src="../images/me/people.jpg" alt="头像">  
    </div>
      <div  class="b-g1" >
        <div>
          <span class="z-a">许源</span>
        <span  class="n-n"><img src="../images/me/man.png" alt="man">
          </span>
          </div>
        <div  class="c-z" >
          <span class="c-x"><img src="../images/me/22.png" alt="dd"></span>
          <span  class="c-m">
          <img  src="../images/me/33.png"  alt="ww"></span>
        </div>
        <div class="v-q">
          <span class="u-i"><img src="../images/me/44.png"  alt=""></span><span>积分：60</span>
        </div>
   </div>
   </div>
    <div class="v-g" > 
        <div is-link @click="showPopup"><div><img src="../images/me/55.png" alt=""></div>
        <div class="x-s">公益名片</div></div>
    <van-popup class="c-t"  v-model="show"
    :overlay="true"
      closeable
     position="center"><div id="qrCode" ref="qrCodeDiv"></div> <div  class="t-u">个人二维码</div> </van-popup>
      </div>
  </div>

<div  class="w-s">
<van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/sports.png" alt=""></van-col>
    <van-col class="q-z">公益日记</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
<div style="border-top:1px solid #C5C5C5">
<van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center" >
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/Architecture.png" alt=""></van-col>
    <van-col class="q-z">公益时间</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>
</div>

<div  class="w-w">
  <div  style="border-top:1px solid #C5C5C5">
     <van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/Evaluation.png" alt=""></van-col>
    <van-col class="q-z">活动</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>
 <div  style="border-top:1px solid #C5C5C5"> <van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/Public welfare.png" alt=""></van-col>
    <van-col class="q-z">组织项目</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>
<div  style="border-top:1px solid #C5C5C5"><van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/time.png" alt=""></van-col>
    <van-col class="q-z">评价</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>

</div>

<div class="a-a">
  <div  style="border-top:1px solid #C5C5C5">  
     <van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/wallet.png" alt=""></van-col>
    <van-col class="q-z">我的福利</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>
<div style="border-top:1px solid #C5C5C5"> 
  <van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/welfare.png" alt=""></van-col>
    <van-col class="q-z">公益钱包</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row></div>


</div>
<div  class="i-i">
   <van-row type="flex" justify="space-between" style="padding:10px 20px;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/me/wisdom.png" alt=""></van-col>
    <van-col class="q-z">智慧团建</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="rgb(43,231,158)" size="25" />
  </van-row>
</van-row>
</div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'My',
  data() {
    return {
      show:false
    }
  },
  components: {},
  created() {},
  mounted() {

  },
  methods: {
    showPopup(){
      this.show=true;
       this.$nextTick(function () {
        this.bindQRCode();
      })
    },
      bindQRCode: function () {
        document.getElementById('qrCode').innerHTML = ''
        new QRCode(this.$refs.qrCodeDiv, {
          text: ' 姓名：许源',
          width: 260,
          height: 260,
          colorDark: "#86C9BB", //二维码颜色
          colorLight: "#ffffff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
        })
      }

},
  
  computed: {}
}
</script>

<style scoped lang="scss">
.b-g{
  width: 100px;
  height: 100px;
  padding-top: 20px;
  padding-left: 20px;
}
.b-g1 img{
  width: 30px;
  height: 30px;
}
.b-g1{
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

margin-top: 18px ;

}
.b-h{
 display: flex;
 justify-content: space-between;
 background-color: white;
 margin-top: 20px;
 border-radius: 10px;;


}
.v-q  {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding-left: 5px;
  padding-top: 2px;
}
.v-q span{
  display: block;
  font-size: 20px;

}
.v-q span:first-child {
  margin-left: -13px;

}
.v-g {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.b-h-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.c-s{
  background-color: rgb(237, 237, 237);
  min-height: 900px;

}
.c-x{
  display:block;
  width: 70px;
}
.c-x img{
  width: 80px;
}
.c-z{
  display: flex;
  flex-wrap: nowrap;
 

}
.z-a{
  margin-left: 2px;
  font-size: 20px;
  color: #1Cbad3;
}
.n-n{
  margin-left: 15px;
}
.c-m{
  display: flex;
  flex-wrap: nowrap;
  padding-left: 20px;
}
.u-i{
  height: 30px;
  width: 30px;
  border-radius: 50%;

}
.q-z{
  font-size: 18px;
}
.s-z{
  border-radius: 50%;
  
}
.w-s{
  border-bottom: 1px solid #C5C5C5;
  background-color: rgb(255, 255, 255);
  margin-top:10px ;
}
.w-w{
   border-bottom: 1px solid #C5C5C5;
  background-color: rgb(255, 255, 255);
  margin-top:20px ;
}
.a-a{
   border-bottom: 1px solid #C5C5C5;
  background-color: rgb(255, 255, 255);
  margin-top:20px ;
}
.i-i{
  border-bottom: 1px solid #C5C5C5;
  background-color: rgb(255, 255, 255);
  margin-top:20px ;
}
.x-s{

  margin-left: 13px;
}
.c-t{
 padding: 30px;
background-image: url('../images/me/erweima.png');
}
.t-u{
  font-size: 30px;
  text-align: center;
  background-color: #86C9BB;
  
}
</style>
