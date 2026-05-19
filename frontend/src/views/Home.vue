<template>
  <div class="home">
    <h1>ZZZ Fullstack Platform</h1>
    <p>Backend Status: {{ status }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'Home',
  setup() {
    const status = ref('Checking...')
    onMounted(async () => {
      try {
        const res = await axios.get('/api/health')
        status.value = res.data.status
      } catch {
        status.value = 'Backend not connected'
      }
    })
    return { status }
  },
}
</script>
