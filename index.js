import san from "san"
import { router } from "san-router";

const HelloWorld = san.defineComponent({
  template: "<h1>Hello, {{ msg }}</h1>",

  initData: function() {
    return { msg: "world" };
  }
});

const helloWorld = new HelloWorld();
helloWorld.attach(document.body);
