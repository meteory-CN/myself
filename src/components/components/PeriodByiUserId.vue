<template>
<div class="PeriodByiUserId">
  <div class="form">
    <form>
      <mu-text-field class="selectdata" v-model:value="iUserId"  hintText="输入用户ID" slot="left" />
      <mu-flat-button v-on:click="getperioddetail" label="提交" primary/>
      <P>
        <!-- {{ getselected.iUserId }} -->
        <!-- {{ getselected }} -->
        <!-- {{ periodtable }} -->
      </P>
    </form>
  </div>


  <div>
    <mu-table :fixedFooter="fixedFooter" @rowSelection="handleSelect"   :fixedHeader="fixedHeader" :height="height" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="ID">用户ID</mu-th>
          <mu-th tooltip="类别">是否包期</mu-th>
          <mu-th tooltip="开始时间">开始时间</mu-th>
          <mu-th tooltip="结束时间">结束时间</mu-th>
          <mu-th tooltip="包期">包期点数</mu-th>
          <mu-th tooltip="FM">FM点数</mu-th>
          <mu-th tooltip="操作">操作</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody >
        <mu-tr v-for="item,index in periodtable"  :key="index" :selected="item.selected">
          <mu-td >{{ item.iUserid }}</mu-td>
          <mu-td>{{ item.iPropertyMobile }}</mu-td>
          <mu-td>{{ item.dtStartMobile }}</mu-td>
          <mu-td>{{ item.dtExpireMobile }}</mu-td>
          <mu-td>{{ item.iMagazineCount }}</mu-td>
          <mu-td>{{ item.iFMCount }}</mu-td>
          <mu-td><mu-raised-button label="删除" secondary/></mu-td>
        </mu-tr>
      </mu-tbody>
      <mu-tfoot slot="footer">
        <mu-tr>
          <mu-td>用户ID</mu-td>
          <mu-td>用户名称</mu-td>
          <mu-td>开始时间</mu-td>
          <mu-td>结束时间</mu-td>
          <mu-td>是否包期身份</mu-td>
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
      SelectData: [1,2],
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
      periodtable: {},
      fixedHeader: true,
      fixedFooter: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true
    }
  },
  computed: {
    getselected: function() {
      let app = this
      return app.tableData.filter(
          (item, index) => {
            return item.selected === true
            // console.log(item)
          }
        )
      }
  },
  methods: {
    handleSelect: function (rowIndexs) {
      let app = this
      this.tableData = this.tableData.map((item, index) => {
        item.selected = rowIndexs.indexOf(index) !== -1
        return item
      })
    },
    getperioddetail: function() {
      let app = this
      app.periodtable = {}
      this.$http.get('/api/analysis/period',{
        params:{
          iUserId: app.iUserId
        }
      })
        .then(function (response){
          // console.log(response)
          if ( response.data.istatus !== "-200" ) {
            app.periodtable = response.data

            let  starttime =  new Date(app.periodtable.dtStartMobile)
            let  endtime = new Date(app.periodtable.dtExpireMobile)
            console.log(typeof(app.periodtable.dtStartMobile))
            console.log(starttime.getYear())
            console.log(endtime)
          }
        })
        .catch( function (error){
          console.log(error);
      })
    }
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

#submituserid {
  background-color: gray;
  display: inline-block;
}

</style>
