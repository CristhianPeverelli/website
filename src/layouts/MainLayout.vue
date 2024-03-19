<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: rgb(79, 131, 191);">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar size="100px" icon="terminal">
        </q-avatar>
        <q-toolbar-title style="font-size:35px;
                                font-family:'system-ui'  
                                ">
          Cristhian Peverelli
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      
    >
      <q-list padding>
        <q-item-label header>
          Everything you need to know
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          @click="route(link)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-65 text-white">
      <q-toolbar>
        <q-toolbar-title style="text-align: center; font-size:15px">
          Built in <a href="https://quasar.dev/" style="color:wheat;">Quasar</a> with ❤︎
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    
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
    route: '/',
    link: ''
  },
  {
    title: 'Education',
    caption: 'My educational history',
    icon: 'school',
    route: '/',
    link: ''
  },
  {
    title: 'Work Experience',
    caption: 'My work experiences',
    icon: 'badge',
    route: '/#/work',
    link: ''
  },
  {
    title: 'Projects',
    caption: 'Personal projects I have been working to',
    icon: 'build',
    route: '/#/projects',
    link: ''
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
    caption: 'via Telegram',
    icon: 'favorite',
    link: 'https://t.me/nonsonopeve'
  }
]

const leftDrawerOpen = ref(true)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function route (item) {
  if (item.link != '') {
    window.open(item.link, '_blank').focus();
  }else{
    window.location.href = item.route;
  }
}
</script>
