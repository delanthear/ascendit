
<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ascendit.rocks</v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/Gyms" flat>Gyms</v-btn>
        <v-btn to="/Gym" flat>Gym</v-btn>
        <v-btn to="/Circuit" flat>Circuit</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-navigation-drawer
      temporary
      v-model="drawer"
      absolute
      :mini-variant="mini"
      mini-variant-width=80
      light
    >
      <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
      <router-view>hello?</router-view>
      
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard', to: '/Gym' },
        { title: 'About', icon: 'question_answer' }
      ],
      problems: [
        {
          attempts: '0',
          problemname: 'Conan the librarian',
          tags: 'Mushroom, tall, scary',
          done: false,
          bookmarked: true
        },
        { divider: true, inset: true },
        {
          attempts: '5',
          problemname: 'Strawberries',
          tags: 'stupid',
          done: true,
          bookmarked: true
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          problemname: 'Problem 4',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        }
      ],
      mini: false,
      right: null
    }
  }
}
</script>