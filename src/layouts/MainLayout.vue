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
      <div class="row justify-between fab">
        <q-fab
          v-model="fabRight"
          vertical-actions-align="right"
          color="secondary"
          glossy
          icon="keyboard_arrow_up"
          direction="up"
          label="Contacts"
        >
          <q-fab-action label-position="left" color="primary" @click="onClick('Email')" icon="mail" label="Email" />
          <q-fab-action label-position="left" color="light-blue" @click="onClick('LinkedIn')" icon="verified" label="LinkedIn" />
          <q-fab-action label-position="left" color="grey" @click="onClick('GitHub')" icon="code" label="GitHub" />
        </q-fab>
      </div>
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
    caption: 'My work experience',
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

<script>
export default {
  methods: {
    onClick(label) {
      switch (label) {
        case 'Email':
          window.location.href = 'mailto:cristhian.peverelli@gmail.com?subject=Super%20Professional%20Business%20Mail%20:)&body=Hi%20Cristhian,';
          break;
        case 'LinkedIn':
          window.location.href = 'https://www.linkedin.com/in/cristhian-peverelli/';
          break;
        case 'GitHub':
          window.location.href = 'https://github.com/CristhianPeverelli';
          break;
        default:
          console.log("Error on fab: ",label);
          break;
      }
    }
  },
  setup () {
    return {
      fabLeft: ref(true),
      fabCenter: ref(true),
      fabRight: ref(true),
    }
  }
};

</script>

<style scoped>
.fab {
  position: fixed;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 999; /* Ensure it's above other content */
}
</style>

<style>
.item-card {
  max-width: 98%;
  margin: auto;
  padding: 20px;
  margin-bottom: 3px;
}

.biography-page {
  padding: 20px;
}

.item-card {
  margin-bottom: 20px;
}

.biography-title {
  font-size: 18px;
  margin-left: 10px;
}

.item-text {
  font-size: 16px;
  line-height: 1.6;
}
</style>
