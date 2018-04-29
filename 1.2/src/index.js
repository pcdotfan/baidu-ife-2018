import san from 'san'
import { router, Link } from "san-router";

import HelloWorld from "./components/HelloWorld.san"

router.add({
  rule: "/",
  Component: HelloWorld
});

router.start();