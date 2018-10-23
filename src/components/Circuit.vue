<template>
  <v-list two-line dense>
    <template v-for="(item, index) in problems">
      <v-divider
        v-if="item.divider"
        :inset="item.inset"
        :key="index"
      ></v-divider>

      <v-list-tile
        v-else
      >
        <template v-if="item.done">
          <v-list-tile-action>
              <v-icon slot="activator" color=success clickable>check_circle</v-icon>
          </v-list-tile-action>
        </template>
        <template v-else>
          <v-list-tile-action>
              <div style="font-weight: bold; text-align: center; ">
                {{ item.attempts }}
              </div>
          </v-list-tile-action>
        </template>
        
        <v-list-tile-content>
          <v-list-tile-title v-html="item.problemname"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.tags"></v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn flat round ripple small icon>
            <v-tooltip bottom>
              <v-icon slot="activator"   clickable>plus_one</v-icon>
              <span>Add attempt</span>
            </v-tooltip>
          </v-btn>
        </v-list-tile-action>
  
        <v-list-tile-action>
          <v-btn flat round small icon>
            
            <template v-if="item.done">
              <v-tooltip bottom>
                <v-icon slot="activator" color=success clickable>check_circle</v-icon>
                <span>Ticked!</span>
              </v-tooltip>
            </template>
            <template v-else>
              <v-tooltip bottom>
                <v-icon slot="activator"  clickable>check_circle_outline</v-icon>
                <span>Ticked!</span>
              </v-tooltip>
            </template>
            
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn flat round small icon>
            <v-tooltip bottom>
              <v-icon slot="activator"  clickable>label</v-icon>
              <span>Add tag</span>
            </v-tooltip>
          </v-btn>
        </v-list-tile-action>

        <v-list-tile-action>
          <v-btn flat round small icon>
            <v-tooltip bottom>
              <v-icon slot="activator"  clickable>bookmark</v-icon>
              <span>Bookmark</span>
            </v-tooltip>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      </template>
    </v-list>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
export default {
  data () {
    return {
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
