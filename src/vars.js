const vars = [
  {
    name: 'prefix',
    children: [
      {
        name: '@ant-prefix',
        type: 'string',
        value: 'ant',
        desc: 'The prefix to use on all css classes from ant'
      },
      {
        name: '@iconfont-css-prefix',
        type: 'string',
        value: 'anticon',
        desc: ''
      }
    ]
  },
  {
    name: 'Colors',
    children: [
      {
        name: '@primary-color',
        type: 'color',
        value: '#1890ff',
        desc: '全局主色'
      },
      {
        name: '@success-color',
        type: 'color',
        value: '#52c41a',
        desc: '成功色'
      },
      {
        name: '@info-color',
        type: 'color',
        value: '#1890ff',
        desc: ''
      },
      {
        name: '@warning-color',
        type: 'color',
        value: '#faad14',
        desc: '警告色'
      },
      {
        name: '@error-color',
        type: 'color',
        value: '#f5222d',
        desc: '错误色'
      },
      {
        name: '@highlight-color',
        type: 'color',
        value: '#f5222d',
        desc: ''
      },
      {
        name: '@processing-color',
        type: 'string',
        value: '@primary-color',
        desc: ''
      },
      {
        name: '@body-background',
        type: 'color',
        value: '#fff',
        desc: 'background color for <body>'
      },
      {
        name: '@component-background',
        type: 'color',
        value: '#fff',
        desc: 'base background color for most components'
      },
      {
        name: '@icon-color',
        type: 'string',
        value: 'inherit',
        desc: ''
      },
      {
        name: '@icon-color-hover',
        type: 'color',
        value: 'rgb(0,0,0,0.75)',
        desc: ''
      },
      {
        name: '@heading-color',
        type: 'color',
        value: 'rgb(0,0,0,0.85)',
        desc: '标题色'
      },
      {
        name: '@text-color',
        type: 'color',
        value: 'rgb(0,0,0,0.65)',
        desc: '主文本色'
      },
      {
        name: '@text-color-secondary',
        type: 'color',
        value: 'rgb(0,0,0,0.45)',
        desc: '次文本色'
      },
      {
        name: '@text-color-inverse',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@heading-color-dark',
        type: 'color',
        value: 'rgb(0,0,0,1)',
        desc: ''
      },
      {
        name: '@text-color-dark',
        type: 'color',
        value: 'rgb(255,255,255,0.85)',
        desc: ''
      },
      {
        name: '@text-color-secondary-dark',
        type: 'color',
        value: 'rgb(255,255,255,0.65)',
        desc: ''
      },
      {
        name: '@text-selection-bg',
        type: 'color',
        value: '#1890ff',
        desc: ''
      }
    ]
  },
  {
    name: 'Layout',
    children: [
      {
        name: '@layout-body-background',
        type: 'color',
        value: '#f0f2f5',
        desc: ''
      },
      {
        name: '@layout-header-background',
        type: 'color',
        value: '#001529',
        desc: ''
      },
      {
        name: '@layout-footer-background',
        type: 'string',
        value: '@layout-body-background',
        desc: ''
      },
      {
        name: '@layout-header-height',
        type: 'number',
        value: 64,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-header-padding',
        type: 'string',
        value: '0 50px',
        desc: ''
      },
      {
        name: '@layout-footer-padding',
        type: 'string',
        value: '24px 50px',
        desc: ''
      },
      {
        name: '@layout-sider-background',
        type: 'string',
        value: '@layout-header-background',
        desc: ''
      },
      {
        name: '@layout-trigger-height',
        type: 'number',
        value: 48,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-trigger-background',
        type: 'color',
        value: '#002140',
        desc: ''
      },
      {
        name: '@layout-trigger-color',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-zero-trigger-width',
        type: 'number',
        value: 36,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-zero-trigger-height',
        type: 'number',
        value: 42,
        unit: 'px',
        desc: ''
      },
      {
        name: '@layout-sider-background-light',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-trigger-background-light',
        type: 'color',
        value: '#fff',
        desc: ''
      },
      {
        name: '@layout-trigger-color-light',
        type: 'string',
        value: '@text-color',
        desc: ''
      }
    ]
  }
];

module.exports = vars;
