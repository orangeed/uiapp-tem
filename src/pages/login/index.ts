import { login } from '@/serve/login';
import { RouteList } from '@/utils/enum';
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    name: 'Login',
    components: {},
    setup() {
        const data = reactive({});

        // 登录函数
        const handleLogin = () => {
            uni.navigateTo({
                url: RouteList.INDEX,
                animationType: 'fade-in',
            });
            // login({ username: 'orange', password: '111' }).then(() => {
            //     console.log('登录');
            // });
        };
        return {
            ...toRefs(data),
            handleLogin,
        };
    },
});
