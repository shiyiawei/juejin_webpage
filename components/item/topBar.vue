<template>
    <header class="topbar__wrapper">
        <div class="topbar" ref="topbar"
            :class="['topbar--' + (isTopbarBlock ? 'show' : 'hidden'), topicWhite ? 'topBarDay' : 'night']">
            <div class="topbar__main">
                <nuxt-link to="/" class="logo">
                    <img src="~/assets/images/png/logo.svg" alt="掘金">
                </nuxt-link>
                <ul class="navs">
                    <nuxt-link v-for="item in navList" :key="item.id" :to="item.link" tag="li" class="nav-item">
                        <div class="position_div">
                            <span>{{ $t('topbar.' + item.name) }}</span>
                            <span class="top_message" v-if="item.topContent">{{ item.topContent }}</span>
                        </div>
                    </nuxt-link>
                </ul>
                <!-- 主题更改按钮 -->
                <div class="nav-sign">
                    <el-button type="info" icon="el-icon-moon" circle @click="changeTopic"></el-button>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'TopBar',
    data() {
        return {
            navs: [
                {
                    name: 'home',
                    link: '/'
                },
                {
                    name: 'pin',
                    link: '/pins'
                },
                {
                    name: 'course',
                    link: '/course'
                },
                {
                    name: 'live',
                    link: '/live'
                },
                {
                    name: 'events',
                    link: '/events/all'
                },
                {
                    name: 'challenge',
                    link: '/challenge'
                },
                {
                    name: 'shop',
                    link: '/shop'
                },
                {
                    name: 'APP',
                    link: '/app '
                }
            ],
            keyword: '',
            scrollingElement: null,
            searchFormClass: '',
            noticeNum: 0,
            isShowNavMenu: false,
            navList: [],
            arr: [],
            resArr: [],
            white: '',
            show: true
        }
    },
    props: {
        topicWhite: {
            type: [Boolean, String],
            default: true
        }
    },
    async fetch() {
        console.log('fetch');
        let res = await this.$api.getTags()
        this.resArr = Array.from(res.data)
        let that = this
        this.resArr.forEach((item) => {
            that.navList.push(item.attributes)
        })
        this.navList.forEach(function (item, index) {
            if (index > 3) {
                that.arr.push(item)
            }
        })
    },
    created() {
        if (process.client) {
            this.white = localStorage.getItem('isWhite')
        }
    },
    mounted() {
        console.log(this.$refs.topbar);
        let scrollingElement = document.scrollingElement
        let scrollTop = 0
        window.addEventListener('scroll', () => {
            if (Math.abs(scrollingElement.scrollTop - scrollTop) < 100) {
                return;
            }
            if (scrollingElement.scrollTop < 300) {
                this.isTopbarBlock === false && this.UPDATE_TOPBAR_BLOCK(true)
                return
            }
            if (scrollingElement.scrollTop > scrollTop) {
                this.UPDATE_TOPBAR_BLOCK(false)
            } else if (scrollingElement.scrollTop < scrollTop) {
                this.UPDATE_TOPBAR_BLOCK(true)
            }
            scrollTop = scrollingElement.scrollTop
        })
    },
    computed: {
        ...mapState([
            'isTopbarBlock',
            'isWhite'
        ]),
        ...mapState('auth', [
            'userInfo'
        ]),
        ...mapState('locale', [
            'locale'
        ]),
        noticeNumTip() {
            return this.noticeNum > 99 ? '99+' : this.noticeNum
        }
    },
    watch: {
        '$route.path': {
            handler(newVal, oldVal) {
                if (newVal != oldVal) {
                    this.UPDATE_TOPBAR_BLOCK(true)
                }
            },
            immediate: true
        }
    },
    methods: {
       
        ...mapMutations({
            'UPDATE_TOPBAR_BLOCK': 'UPDATE_TOPBAR_BLOCK',
            'SET_LANG': 'locale/SET_LANG'
        }),
        // 切换主题
        ...mapMutations(["changeTopicFn"]),
        changeTopic() {
            if (this.white == true) {
                // 白色点击切换成黑色
                localStorage.removeItem('isWhite')
                localStorage.setItem("isWhite", false)
                this.white = false
                this.changeTopicFn()
            } else {
                localStorage.removeItem('isWhite')
                localStorage.setItem("isWhite", true)
                this.white = true
                this.changeTopicFn()
            }
        }
    }
}
</script>
  
<style lang='scss' scoped>
@import "~/assets/css/scss/top.scss";
</style>