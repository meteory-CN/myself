<template>
<div class="PeriodByiUserId">
  <mu-text-field class="selectdata" v-model:value="iUserId" hintText="输入用户ID" slot="default" />
  <mu-flat-button label="提交" primary/>
  <P>
    {{ iUserId }}
  </P>
  <div>
    <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="ID">用户ID</mu-th>
          <mu-th tooltip="名称">用户名称</mu-th>
          <mu-th tooltip="状态">开始时间</mu-th>
          <mu-th tooltip="状态">结束时间</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="item,index in tableData" :key="index" :selected="item.selected">
          <mu-td>{{item.iUserId}}</mu-td>
          <mu-td>{{item.name}}</mu-td>
          <mu-td>{{item.starttime}}</mu-td>
          <mu-td>{{item.endtime}}</mu-td>
        </mu-tr>
      </mu-tbody>
      <mu-tfoot slot="footer">
        <mu-tr>
          <mu-td>用户ID</mu-td>
          <mu-td>用户名称</mu-td>
          <mu-td>开始时间</mu-td>
          <mu-td>结束时间</mu-td>
        </mu-tr>
      </mu-tfoot>
    </mu-table>
  </div>
</div>
</template>


<script>
export default {
  data: function() {
    return {
      tableData: [{
        iUserId: 12364,
        name: 'shijun',
        starttime: '2018-01-30',
        endtime: '2019-01-30'
      }],
      iUserId: '',
      fixedHeader: true,
      fixedFooter: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      showCheckbox: true
    }
  }
}
</script>

<style>
</style>
