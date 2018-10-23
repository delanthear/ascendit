<template>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="white darken-2">
              <v-layout>
                <v-flex>
                  <v-img
                    src="https://www.climbingworks.com/images/srv/block-header-logo-image/Logos_and_Icons/climbing-works-logo.png"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline">The Climbing Works</h3>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex>
                  <v-card-text>
                      <div>Unit B,<br />
                      Centenary Works,<br />
                      Little London Road,<br />
                      Sheffield,<br />
                      S8 0UJ<br /></div>
                      <div>
                      T 0114 250 9990<br />
                      F 0114 250 0909<br />
                      E info@climbingworks.com</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-list two-line>
              <template v-for="(item, index) in circuits">
                <v-divider
                  v-if="item.divider"
                  :inset="item.inset"
                  :key="index"
                ></v-divider>
      
                <v-list-tile
                  v-else
                >
                <v-list-tile-avatar>
                   <v-icon>done_outline</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title> {{ item.circuitname }} {{ item.difficulty }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.circuitdescription }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn flat round ripple small icon>
                    <v-tooltip bottom>
                      <v-icon slot="activator" color=success>plus_one</v-icon>
                      <span>Add attempt</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-action>
                  <v-btn flat round small icon>
                    <v-tooltip bottom>
                      <v-icon slot="activator" color=success>done_outline</v-icon>
                      <span>Ticked!</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-action>
                  <v-btn flat round small icon>
                    <v-tooltip bottom>
                      <v-icon slot="activator">home</v-icon>
                      <span>Add tag</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-action>
                  <v-btn flat round small icon>
                    <v-tooltip bottom>
                      <v-icon slot="activator">bookmark</v-icon>
                      <span>Bookmark</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
          </v-flex>
        </v-layout>
      </v-container>
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
      circuits: [
        {
          attempts: '0',
          circuitname: 'Greens',
          circuitdescription: 'Green holds',
          difficulty: '3',
          tags: '',
          done: false,
          bookmarked: true
        },
        { divider: true, inset: true },
        {
          attempts: '5',
          circuitname: 'Blues',
          circuitdescription: 'Blue holds',
          difficulty: '4',
          tags: 'stupid',
          done: true,
          bookmarked: true
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'Pinkles',
          circuitdescription: 'Pink and Purple holds',
          difficulty: '5 - 5+',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'Blacks',
          circuitdescription: 'Black holds and volumes',
          difficulty: '5+ - 6a+',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'IrnBrus',
          circuitdescription: 'Orange and Blue holds',
          difficulty: '6a - 6b+',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'Wasps',
          circuitdescription: 'Yellow and Black',
          difficulty: '6b+ - 6c+',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'Murples',
          circuitdescription: 'Mauve and Purple',
          difficulty: '4+',
          tags: 'mysterous',
          done: false,
          bookmarked: false
        },
        { divider: true, inset: true },
        {
          attempt: '15',
          circuitname: 'Reds',
          circuitdescription: 'Red holds',
          difficulty: '7+',
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