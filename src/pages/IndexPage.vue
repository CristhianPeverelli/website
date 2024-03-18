<template>
  <q-page style="margin-top:10px">
    <q-card class="biography-card">
      <q-card-section>
        <div class="row">
          <img src="../assets/filler.png" style="width:100px; height:100px">
          <q-typography class="text-h6 text-center" style="width:300px">{{ presentation }}</q-typography>
        </div>
      </q-card-section>
      <q-card-section>
        <q-typography class="text-body1">{{ biography }}</q-typography>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<script>
export default {
  data() {
    return {
      presentation: "Hi! I'm Cristhian Peverelli, a Software Developer",
      biography: "Test"
    };
  }
};
</script>

<style scoped>
.biography-card {
  max-width: 98%;
  margin: auto;
  padding: 20px;
}
</style>
