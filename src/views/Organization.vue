<template>
<div  class="b-g">
<div  class="b-g1">
  <van-nav-bar title="组织" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<div  class="btn-1">管理员</div>
  <div class="nb-1" >
    <div class="z-4">
    <span  class="s-p">志愿者组织</span></div>
    <img  class="nb-2" src="../images/organization/xiazai.png" alt="志愿者图标" >
  </div>
  <div  class="z-1">
    南京工业职业技术学院计算机与软件学院
  </div>
   <div   class="z-2">
     软件1841
   </div>
   <div  class="z-3"  >
     志愿服务：0小时
   </div>

</div>

<div >
<div   class="t-p" >
  <img  src="../images/organization/jia.png" alt="加">
  <div>发布活动</div>
</div>
</div>

<div  class="w-r">
   <van-row type="flex" justify="space-between" style="padding:10px 20px ;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/organization/geren.png" alt=""></van-col>
    <van-col class="q-z">志愿者名单(1)</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="#21E59E" size="25" />
  </van-row>
</van-row>
<div style="border-top:1px solid #C5C5C5">   <van-row type="flex" justify="space-between" style="padding:10px 20px ;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/organization/huodong.png" alt=""></van-col>
    <van-col class="q-z">组织活动(0)</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="#21E59E" size="25" />
  </van-row>
</van-row></div>
  <div   style="border-top:1px solid #C5C5C5">   <van-row type="flex" justify="space-between" style="padding:10px 20px ;" align="center">
  <van-row align="center" type="flex">
    <van-col style="padding-right:21px"><img class="s-z" src="../images/organization/shenhe.png" alt=""></van-col>
    <van-col class="q-z">待审核志愿者(1)</van-col>
  </van-row>
  <van-row>
    <van-icon name="arrow" color="#21E59E" size="25" />
  </van-row>
</van-row></div>

</div>



</div>

</template>
<script>
export default {
  name: 'Organization',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.btn-1{

  top:20px;
  left:300px;
}
.nb-1{
  border-radius: 50%;
  width: 100px;
  height: 100px;
   background-color: red;
		vertical-align: middle;
    position: relative;
    right: -120px;
    top: -10px;
}

.nb-2{
    border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
		display: table-cell;
		vertical-align: middle;
    position: absolute;
    right: 25px;
    top: 48px;
}
.z-1{
  font-size: 18px;
  color: #858585;
  padding-left: 16px;

}
.z-2{
  font-size: 18px;
   color: #858585;
   padding-left: 16px;
}
.z-3{
  font-size: 18px;
  position: absolute;
  left: 30%;
   color:  #858585;
}
.z-4{
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
.s-p{
   display: flex;
  flex-wrap: nowrap;
  width: 100px;
  position: absolute;
  top: 20px;
  left: 4px;
  font-size: 18px;
  color: aliceblue;
}
.b-g{
  background-color: #EDEDED;
  min-height: 800px;
}
.b-g1{
  background-color: rgb(255, 255, 255);
  min-height: 280px;
  padding-left: 10px;
}
.t-p{
   position: absolute;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: rgb(255, 255, 255);
  min-height: 150px;
  font-size: 30px;
  color: #08706A;
}
.z-8{
  font-size: 20px;
 color: red;
}
.z-y{
  margin-right:  0;
}

.t-t{
  height: 180px;
  background-color: white;
  margin-top:180px;
}
.row{
		display: flex;
		flex-direction: row;

	}
	.im{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 15px;
	}
	.sp{
		padding: 10px 20px 0 130px;
		color: rgb(58, 206, 225);
    width: 3px;
		font-size: 20px;
	}
	.sp-1{
		/* margin: 10px 20px 0 20px; */
		padding:10px 20px 0 20px ;

	}
	.line{
		margin-top: 10px;
		margin-bottom: 10px;
		background-color: #C8C7CC;
		height: 1px;
		width: 100%;
	}
  .w-r{
    margin-top: 190px;
    background-color: rgb(255, 255, 255);
     border-bottom: 1px solid #C5C5C5;
  }
</style>
