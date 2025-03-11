// components/SignatureCanvas.vue
<template>
  <div class="signature-canvas" style="overflow: hidden;">
    <canvas 
      ref="canvasRef"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart="startDrawing"
      @touchmove="draw"
      @touchend="stopDrawing"
     width="800"
     style="background: whitesmoke;border: 0;"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch, defineEmits } from 'vue'

interface Props {
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 200
})

const emit = defineEmits<{
  (e: 'update:signature', data: { dataUrl: string, isEmpty: boolean }): void
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let isDrawing = false
let lastX = 0
let lastY = 0

interface Position {
  x: number
  y: number
}

const getPosition = (e: MouseEvent | TouchEvent): Position => {
  if (!canvasRef.value) return { x: 0, y: 0 }
  const rect = canvasRef.value.getBoundingClientRect()
  
  if ('touches' in e) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    }
  } else {
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }
}

const startDrawing = (e: MouseEvent | TouchEvent) => {
  e.preventDefault()
  isDrawing = true
  const pos = getPosition(e)
  lastX = pos.x
  lastY = pos.y
}

const draw = (e: MouseEvent | TouchEvent) => {
  if (!isDrawing || !ctx) return
  e.preventDefault()
  
  const pos = getPosition(e)
  
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(pos.x, pos.y)
  ctx.stroke()
  ctx.closePath()
  
  lastX = pos.x
  lastY = pos.y
  
  updateSignatureData()
}

const stopDrawing = () => {
  isDrawing = false
  updateSignatureData()
}

const updateSignatureData = () => {
  if (!canvasRef.value) return
  const dataUrl = canvasRef.value.toDataURL()
  emit('update:signature', {
    dataUrl,
    isEmpty: isEmptyCanvas()
  })
}

const isEmptyCanvas = (): boolean => {
  if (!canvasRef.value) return true
  const blank = document.createElement('canvas')
  blank.width = canvasRef.value.width
  blank.height = canvasRef.value.height
  return canvasRef.value.toDataURL() === blank.toDataURL()
}

const clear = () => {
  if (ctx && canvasRef.value) {
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    ctx.beginPath()
    updateSignatureData()
  }
}

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = props.width
    canvasRef.value.height = props.height
    ctx = canvasRef.value.getContext('2d')
    
    if (ctx) {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = 2
      ctx.strokeStyle = '#000'
    }
  }
})

defineExpose({
  clear
})
</script>

<style scoped>
canvas {
  border: 1px solid #ccc;
  background-color: white;
}
</style>
