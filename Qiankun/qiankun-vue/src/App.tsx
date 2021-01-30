import { defineComponent } from 'vue';
import '@/assets/scss/app.scss';

const App = defineComponent({
  setup() {
    return () => <router-view />;
  }
});

export default App;

/* import { Vue, Component } from 'vue-property-decorator';
// import Component from "vue-class-component";
// import { Component as tsc } from "vue-tsx-support";

@Component
export default class App extends Vue {
  setup() {
    return (
      <div>
        <router-view></router-view>
      </div>
    );
  }
} */
