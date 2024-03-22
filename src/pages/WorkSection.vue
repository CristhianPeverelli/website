<template>
  <q-page style="margin-top:10px">
    <q-card class="item-card" >
      <div class="q-pa-md">
        <h1>Work in progress</h1>
      </div>
      
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<script setup>
 defineOptions({
  name: 'WorkSection'
})
</script>