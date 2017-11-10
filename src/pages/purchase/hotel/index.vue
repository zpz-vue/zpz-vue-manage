<template>
  <div class="page-padding-container">

    <el-tabs type="card" v-model="editableTabsValue" addable @edit="handleTabsEdit">
      <el-tab-pane :closable="false" key="1" name="1">
        <span slot="label"><i class="el-icon-date"></i> {{ $t('hotelTabel') }}</span>
        <div><hotel-table ></hotel-table></div>
      </el-tab-pane>
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :name="item.name"
        :closable="true"
      >
        <span slot="label"><i class="el-icon-date"></i> {{item.title}}</span>
        <div v-html="item.content"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import hotelTable from '../../../components/hotel/table'
  export default {
    data () {
      return {
        editableTabsValue: '1',
        editableTabs: [],
        tabIndex: 2
      }
    },
    components: {
      hotelTable
    },
    methods: {
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + ''
          this.editableTabs.push({
            title: '新增酒店信息',
            name: newTabName,
            content: '<div>ssss</div>'
          })
          this.editableTabsValue = newTabName
        }
        if (action === 'remove') {
          let tabs = this.editableTabs
          let activeName = this.editableTabsValue
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }
          this.editableTabs = tabs.filter(tab => tab.name !== targetName)
          if (this.editableTabs.length === 0) {
            this.editableTabsValue = '1'
          } else {
            this.editableTabsValue = activeName
          }
        }
      }
    }
  }
</script>
<style>
  .el-tabs__new-tab {
    /*background-color: #00C1DE!important;
    color: #ffffff;
    font-weight: 900;
    font-size: 16px;*/
  }
</style>
