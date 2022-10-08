import { createI18n } from 'vue-i18n'

const message = {//不同的语言对应的内容
    en: {
        msg: {
            title: "use-login"
        },
        driver: {
            doneBtnText: 'done',
            closeBtnText: 'close',
            nextBtnText: 'next',
            prevBtnText: 'prev',
            guideBtn: "guide",
            hamburgerBtn: "hamburger",
            fullScreen: "fullScreen",
            lang: "langchange"
        },
        table: {
            search: "search",
            adduser: "adduser",
            placeholder: "please enter a user name to search for",
            username: "username",
            email: "email",
            mobile: "mobile"
            , role_name: "role_name",
            mg_state: "mg_state",
            create_time: "create_time",
            action: "action"
        } ,
        message:{
            updateSuccess:"update success"
        }
    },
    zh: {
        msg: {
            title: "用户登录",

        },
        driver: {
            doneBtnText: '完成',
            closeBtnText: '关闭',
            nextBtnText: '下一步',
            prevBtnText: '上一步',
            guideBtn: "引导按钮",
            hamburgerBtn: "汉堡按钮",
            fullScreen: "全屏按钮",
            lang: "语言切换"
        },
        table: {
            search: "查询",
            adduser: "添加用户",
            placeholder: "请输入搜索的用户姓名",
            username: "姓名",
            email: "邮箱",
            mobile: "手机"
            , role_name: "角色",
            mg_state: "状态",
            create_time: "创建时间",
            action: "操作"
        },
        message:{
            updateSuccess:"更新成功"
        }
    }
}

const getCurrentLanguage = () => {//设置语言 
    const UAlang = navigator.language
    //zh-CN，如果浏览器语言是中文，就会返回zh-CN
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    //检测是否是中文还是英文，
    localStorage.setItem('lang', langCode)
    return langCode
}


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getCurrentLanguage() || 'zh',
    messages: message
})

export default i18n