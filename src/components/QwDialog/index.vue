<template>
  <el-dialog
    v-model="visible"
    :width="Props.width"
    :title="Props.title"
    draggable
  >
    <slot name="default" />
    <template #footer v-if="confirmValue || cancelValue">
      <div class="dialog-footer">
        <el-button v-if="confirmValue" type="primary" @click="visible = false">
          {{ confirmText }}
        </el-button>
        <el-button v-if="cancelValue" type="info" @click="visible = false">
          {{ cancelText }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, watch } from 'vue'
const Emits = defineEmits([])
const Props = defineProps({
  width: {
    type: [String, Number],
    default: 1200
  },
  title: {
    type: String,
    default: ''
  },
  dialogVisible: {
    type: Boolean,
    default: false
  },
  cancelValue: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmValue: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: '确定'
  }
})
const visible = computed({
  get() {
    return Props.dialogVisible
  },
  set(value) {
    Emits('update:dialogVisible', value)
  }
})
</script>

<style scoped></style>
