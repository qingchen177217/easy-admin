export const steps=(i18n:any)=>[//保存引导页数据，创建几个就有几个引导页
    {
        element: '#guide',//指定哪一个元素开始使用引导页
        popover: {
          title: i18n('driver.guideBtn'),
          description: '了解网站的各种信息',
          position: 'left'
        }
      },
      {
        element: '#hanbao',//指定哪一个元素开始使用引导页
        popover: {
          title: i18n('driver.hamburgerBtn'),
          description: '点击可展开和缩放导航栏',
          position: 'bottom'
        }
      }, {
        element: '#screenfull',//指定哪一个元素开始使用引导页
        popover: {
          title: i18n('driver.fullScreen'),
          description: '点击可展开全屏',
          position: 'left'
        }
      }, {
        element: '#lang',//指定哪一个元素开始使用引导页
        popover: {
          title: i18n('driver.lang'),
          description: '切换中英文',
          position: 'left'
        }
      },
]