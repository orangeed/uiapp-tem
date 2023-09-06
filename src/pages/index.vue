<template>
    <view class="index">
        <view :style="{ display: currentIndex === 0 ? '' : 'none' }">
            <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top>
                <home ref="home"></home>
            </scroll-view>
        </view>

        <view :style="{ display: currentIndex === 1 ? '' : 'none' }">
            <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top>
                <mine ref="mine"></mine>
            </scroll-view>
        </view>

        <TnTabbar v-model="currentIndex" fixed switch-animation>
            <TnTabbarItem
                v-for="(item, index) in tabbarList"
                :key="index"
                :icon="item.inactiveIcon"
                :active-icon="item.activeIcon"
                :text="item.title"
            />
        </TnTabbar>
    </view>
</template>

<script lang="ts" setup>
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue';
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue';
import Home from './index/index.vue';
import Mine from './my/index.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

// 底部tabbar菜单数据
const tabbarList = ref([
    {
        title: '首页',
        activeIcon: '/static/tabbar/home_tnnew.png',
        inactiveIcon: '/static/tabbar/home_tn.png',
    },
    // {
    //     title: '圈子',
    //     activeIcon: '/static/tabbar/circle_tnnew.png',
    //     inactiveIcon: '/static/tabbar/circle_tn.png',
    // },
    // {
    //     title: '广场',
    //     activeIcon: 'menu-circle',
    //     inactiveIcon: 'rocket',
    //     activeIconColor: '#FFFFFF',
    //     inactiveIconColor: '#FFFFFF',
    //     iconSize: 50,
    //     out: true,
    // },
    // {
    //     title: '优选',
    //     activeIcon: '/static/tabbar/preferred_tnnew.png',
    //     inactiveIcon: '/static/tabbar/preferred_tn.png',
    // },
    {
        title: '我的',
        activeIcon: '/static/tabbar/mine_tnnew.png',
        inactiveIcon: '/static/tabbar/mine_tn.png',
    },
]);
// tabbar当前被选中的序号
const currentIndex: Ref<number | string> = ref(0);
</script>

<style lang="scss" scoped></style>