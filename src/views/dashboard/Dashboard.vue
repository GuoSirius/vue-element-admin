<template>
  <div class="dashboard-wrapper app-container">
    <run-information />

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <line-chart :chart-data="lineChartData" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <line-chart :chart-data="lineChartData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { lineChartData } from './constant'

export default {
  name: 'Dashboard',
  components: {
    LineChart: () => import('./components/LineChart.vue'),
    RunInformation: () => import('./components/RunInformation.vue'),
    TransactionTable: () => import('./components/TransactionTable.vue')
  },
  created() {
    this.lineChartData = lineChartData.newVisitis
  }
}
</script>

<style lang="stylus" scoped>
+prefix-classes('dashboard-') {
  .wrapper {}
}
</style>
