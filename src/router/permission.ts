import router from "./index";
import { getToken } from '@/utils/cookies'

router.beforeEach((to, from) => {

    console.log("跟新跟路后")

    if (getToken()) {
        console.log("有token")
    } else {
        console.log("暂无token")
    }

    console.log(to, from)
})

router.afterEach(() => {
    console.log("路由之后")
})