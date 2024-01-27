import Router from "./src/routes.js";

const router = new Router();
router.add("/home", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();