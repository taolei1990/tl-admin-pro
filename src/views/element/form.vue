<template>
  <div class="qw-page">
    <el-form :model="form" :rules="state.rules" label-width="160px">
      <el-row>
        <el-col :span="24">
          <p><QwTitle :title="'基本信息'" /></p>
        </el-col>
        <el-col :span="24">
          <el-form-item label="搜索框">
            <el-input v-model="form.input1" placeholder="Please Input">
              <template #suffix>
                <el-icon class="qw-input-suffix-icon"><Search /></el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="输入框" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="下拉框">
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="时间选择器">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="开关">
            <el-switch v-model="form.delivery" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <p><QwTitle :title="'专案信息'" /></p>
        </el-col>
        <el-col :span="24">
          <el-form-item label="复选框">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="单选框">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor" />
              <el-radio disabled label="Venue" />
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="数字输入框">
            <el-input-number
              v-model="form.num"
              class="mx-4"
              :min="1"
              :max="10"
              controls-position="right"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="滑块">
            <el-slider input-size="large" v-model="form.slider" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="进度条">
            <div style="width: 100%">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="50"
              >
                <span>Content</span>
              </el-progress>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="富文本">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="禁用">
            <el-input
              v-model="form.input"
              placeholder="Please input"
              disabled
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { Search } from '@element-plus/icons-vue'
import QwTitle from '@/components/QwTitle/index.vue'
defineOptions({ name: 'Form' })
// do not use same name with ref
const state = reactive({
  form: {
    title: '标题',
    name: '',
    region: '',
    date: [],
    delivery: false,
    type: [],
    resource: 'Venue',
    desc: '',
    num: 2,
    slider: 80
  },
  rules: {
    name: [
      {
        required: true,
        message: '输入名称',
        trigger: 'blur'
      },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
    ]
  }
})
const { form } = toRefs(state)
</script>
