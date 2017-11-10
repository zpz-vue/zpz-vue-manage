<template>
  <div class="page-padding-container">
    <el-card class="box-card search-pannel">

      <el-form :inline="true" :model="hotelSearchForm" class="demo-form-inline">
        <el-form-item >
          <el-select v-model="hotelSearchForm.region" placeholder="协议/常用">
            <el-option label="协议" value="shanghai"></el-option>
            <el-option label="常用" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-select v-model="hotelSearchForm.region" placeholder="星级">
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
            <el-option label="3" value="beijing"></el-option>
            <el-option label="4" value="beijing"></el-option>
            <el-option label="5" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-select v-model="hotelSearchForm.region" placeholder="类型">
            <el-option label="民居" value="shanghai"></el-option>
            <el-option label="酒店" value="beijing"></el-option>
            <el-option label="宾馆" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格：">
          <el-col :span="11"><el-input placeholder="起"></el-input></el-col>
          <el-col :span="2">至</el-col>
          <el-col :span="11"><el-input  placeholder="终"></el-input></el-col>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="hotelSearchForm.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>


      <!--<el-row>
        <el-col :xs="22" :sm="22" :md="22" :lg="19" :xl="18">
          <el-row>
            <el-col :xs="8" :sm="8" :md="4" :lg="3" class="input-field">
              <el-dropdown size="small">
                  <span class="el-dropdown-link">
                     协议/常用&nbsp;&nbsp;&nbsp;<i class="el-icon-arrow-down el-icon-right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>协议</el-dropdown-item>
                  <el-dropdown-item>常用</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :xs="8" :sm="8" :md="4" :lg="3" class="input-field">
              <el-dropdown size="small">
                  <span class="el-dropdown-link">
                     星级&nbsp;&nbsp;&nbsp;<i class="el-icon-arrow-down el-icon-right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>协议</el-dropdown-item>
                  <el-dropdown-item>常用</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :xs="8" :sm="8" :md="4" :lg="4" class="input-field">
              <el-dropdown size="small">
                  <span class="el-dropdown-link">
                     类型&nbsp;&nbsp;&nbsp;<i class="el-icon-arrow-down el-icon-right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>协议</el-dropdown-item>
                  <el-dropdown-item>常用</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :xs="8" :sm="8" :md="4" :lg="5" class="input-field">
              <el-row>
                <el-col :span="4">
                  价格
                </el-col>
                <el-col :span="4">
                  <el-input-number v-model="num3" :step="2"></el-input-number>
                </el-col>

              </el-row>
            </el-col>
            <el-col :xs="8" :sm="8" :md="4" :lg="5" class="input-field">
              城市
            </el-col>
            <el-col :xs="8" :sm="8" :md="4" :lg="4" class="input-field">
              酒店名称
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="5" :xl="6">
          <el-button type="primary">查 询</el-button>
        </el-col>
      </el-row>-->
    </el-card>
    <el-row>
      <el-table
        :data="tableData3"
        height="250"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        hotelSearchForm: {
          user: '',
          region: ''
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
        currentPage4: 4
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style>
  .search-pannel {
    margin-bottom: 10px;
    background-color: #eef1f6;
    box-shadow: none;
  }

</style>
