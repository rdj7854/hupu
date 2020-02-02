<template>
  <div>
    <br />
    <router-link
      :to="'/newscontent/' + item.id"
      v-for="(item,index) in list"
      :key="index"
      :index="index"
    >
      <el-card class="box-card">
        <p>{{item.source}} </p>
        <p>{{item.title}}</p>
        {{item.ptime}}
      </el-card>
      <br />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    requestData() {
      const api =
        "/api/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore";
      this.axios.get(api).then(
        response => {
          console.log(response.data.data);
          this.list = response.data.data;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>