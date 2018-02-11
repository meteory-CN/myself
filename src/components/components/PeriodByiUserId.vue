<template>
<div class="PeriodByiUserId">
  <div class="form">
    <form>
      <mu-text-field class="selectdata" v-model:value="iUserId"  hintText="输入用户ID" slot="left" />
    </form>
  </div>
  <mu-flat-button label="提交" primary/>
  <P v-model="getindexlist">
    {{ getindexlist }}
  </P>
  <div>
    <mu-table :fixedFooter="fixedFooter" @rowSelection="handleSelect"   :fixedHeader="fixedHeader" :height="height" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="ID">用户ID</mu-th>
          <mu-th tooltip="名称">用户名称</mu-th>
          <mu-th tooltip="状态">开始时间</mu-th>
          <mu-th tooltip="状态">结束时间</mu-th>
          <mu-th tooltip="操作">操作</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody >
        <mu-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
          <mu-td >{{item.iUserId}}</mu-td>
          <mu-td>{{item.name}}</mu-td>
          <mu-td>{{item.starttime}}</mu-td>
          <mu-td>{{item.endtime}}</mu-td>
          <mu-td><mu-raised-button label="删除" secondary/></mu-td>
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
      SelectData: [],
      tableData: [{
        iUserId: 12364,
        name: 'shijun',
        starttime: '2018-01-30',
        endtime: '2019-01-30'
      },{
        iUserId: 12365,
        name: 'shijun1',
        starttime: '2018-01-30',
        endtime: '2019-01-30'
      }],
      height: '300px',
      iUserId: '',
      fixedHeader: true,
      fixedFooter: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true
    }
  },
  computed: {
    getindexlist: function() {
      return this.tableData.map(
        () => {
          this.a = 1
      })
    }
  },
  methods: {
    handleSelect: function (rowIndexs) {
      this.tableData = this.tableData.map((item, index) => {
        item.selected = rowIndexs.indexOf(index) !== -1
        return item
      })
    },
  }
}
</script>

<style scoped>

/*
div.form {
  margin-left: 0px;
  padding-left: 0px;
  border: 2px solid black
}

div.form mu-text-field {
  float: right;
  width: 80px;
} */

mu-td mu-flat-button {
  border-bottom: 1px solid black
}

</style>
