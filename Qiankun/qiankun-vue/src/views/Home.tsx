import { Component, Vue } from "vue-property-decorator";
import { Component as tsc } from "vue-tsx-support";

@Component
export default class HomeContainer extends tsc<Vue> {
  protected render() {
    return (
      <div>
        首页
      </div>
    );
  }
}
