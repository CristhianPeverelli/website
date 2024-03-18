<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Cristhian Peverelli
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Everything you need to know
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Home',
    caption: 'My biography',
    icon: 'account_circle',
    link: 'https://quasar.dev'
  },
  {
    title: 'Education',
    caption: 'My educational history',
    icon: 'school',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Work Experience',
    caption: 'My work experiences',
    icon: 'badge',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Projects',
    caption: 'Personal projects I have worked into',
    icon: 'build',
    link: 'https://github.com/CristhianPeverelli'
  },
  {
    title: 'GitHub Profile',
    caption: 'My GitHub page',
    icon: 'code',
    link: 'https://github.com/CristhianPeverelli'
  },
  {
    title: 'Codewars Profile',
    caption: 'Where I solve some code puzzles',
    icon: 'data_object',
    link: 'https://www.codewars.com/users/CristhianPeverelli'
  },
  {
    title: 'LeetCode Profile',
    caption: 'Other puzzles :)',
    icon: 'terminal',
    link: 'https://leetcode.com/CristhianPeverelli/'
  },
  {
    title: 'Contact me',
    caption: 'Click for Telegram or cristhian.peverelli@gmail.com',
    icon: 'favorite',
    link: 'https://t.me/nonsonopeve'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
