<template>
  <div class="page-container">
    <div class="page-left">
      <el-tree
        :data="orgData"
        node-key="id"
        :props="defaultProps">
      </el-tree>
    </div>
    <div class="page-content">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        orgData: [{
          id: 1,
          label: '阿里巴巴集团',
          children: [{
            id: 4,
            label: '淘宝事业部',
            children: [{
              id: 9,
              label: '天猫事业部'
            }, {
              id: 10,
              label: '聚划算事业部'
            }]
          }]
        }, {
          id: 2,
          label: '腾讯集团',
          children: [{
            id: 5,
            label: 'QQ事业部'
          }, {
            id: 6,
            label: '微信事业部'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>

<style>
  /*#FFFFFF*/
  .el-tree{
    border: none;
    background-color:#EAEDF1 ;
  }
  .el-tree-node__content:hover{
    background-color: #ffffff;
  }
  .page-container {
    height: calc(100vh - 50px);
  }
  .page-left{
    position: absolute;
    width: 200px;
    height: 100%;
    background-color: #EAEDF1;
  }
  .page-content{
    position: absolute;
    left: 200px;
    width: calc(100% - 200px);
    height: 100%;
  }
</style>
