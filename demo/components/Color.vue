<template lang="html">
	<div class="">
		<h2>Color&nbsp;色彩</h2>
    <p>Jo&nbsp;为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
		<h3>主色</h3>
		<p>Jo&nbsp;主要品牌颜色是鲜艳、友好的绿色。</p>
		<table>
      <tr>
        <th>预览</th>
        <th>色号</th>
        <th>使用场景</th>
      </tr>
      <tr>
        <td style="background: #2dcc70"></td>
        <td>#2DCC70</td>
        <td>品牌色，侧边icon，三级导航choose条，主按钮色，上升数据色</td>
      </tr>
      <tr>
        <td style="background: #32e57d"></td>
        <td>#32E57D</td>
        <td>主按钮悬停色</td>
      </tr>
			<tr>
        <td style="background: #1bb25a"></td>
        <td>#1BB25A</td>
        <td>主按钮点击色</td>
      </tr>
    </table>
    <h3>辅色</h3>
		<p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
		<table>
      <tr>
        <th>预览</th>
        <th>色号</th>
        <th>使用场景</th>
      </tr>
      <tr>
        <td style="background: #2b3744"></td>
        <td>#2B3744</td>
        <td>左侧边栏，Tab选中色</td>
      </tr>
      <tr>
        <td style="background: #35404f"></td>
        <td>#35404F</td>
        <td>左侧边栏线条色</td>
      </tr>
			<tr>
        <td style="background: #7fbfff"></td>
        <td>#7FBFFF</td>
        <td>提示图标，提示弹窗背景</td>
      </tr>
      <tr>
        <td style="background: #73d948"></td>
        <td>#73D948</td>
        <td>成功/正确图标，成功/正确提示弹窗背景</td>
      </tr>
      <tr>
        <td style="background: #ffbb33"></td>
        <td>#FFBB33</td>
        <td>警告图标，警告提示弹窗背景</td>
      </tr>
      <tr>
        <td style="background: #ff5b4c"></td>
        <td>#FF5B4C</td>
        <td>错误图标，错误提示弹窗背景</td>
      </tr>
      <tr>
        <td style="background: #d7d7d7"></td>
        <td>#D7D7D7</td>
        <td>默认图标色</td>
      </tr>
      <tr>
        <td style="background: #e7e7e7"></td>
        <td>#E7E7E7</td>
        <td>输入框边框，默认线条，表格/列表分割线</td>
      </tr>
      <tr>
        <td style="background: #eeeeee"></td>
        <td>#EEEEEE</td>
        <td>底层背景</td>
      </tr>
      <tr>
        <td style="background: #f2f2f2"></td>
        <td>#F2F2F2</td>
        <td>禁用按钮/表格填充色</td>
      </tr>
      <tr>
        <td style="background: #f5f8fb"></td>
        <td>#F5F8FB</td>
        <td>列表顶部信息背景，奇特强调信息默认背景，筛选信息背景</td>
      </tr>
    </table>
    <h3>文字</h3>
		<p>页面中文字，文章颜色</p>
		<table>
      <tr>
        <th>预览</th>
        <th>色号</th>
        <th>使用场景</th>
      </tr>
      <tr>
        <td style="background: #333333"></td>
        <td>#333333</td>
        <td>品牌色，侧边icon，三级导航choose条，主按钮色，上升数据色</td>
      </tr>
      <tr>
        <td style="background: #666666"></td>
        <td>#666666</td>
        <td>文章正文内容，次重点按钮文字，分页页码</td>
      </tr>
			<tr>
        <td style="background: #999999"></td>
        <td>#999999</td>
        <td>辅助文字，次重要文字信息，标签文字，列表顶部信息文字</td>
      </tr>
      <tr>
        <td style="background: #b7b7b7"></td>
        <td>#B7B7B7</td>
        <td>禁用按钮/表格文字</td>
      </tr>
      <tr>
        <td style="background: #459ae9"></td>
        <td>#459AE9</td>
        <td>文字链，带有交互信息的文字</td>
      </tr>
    </table>
    <h3>数据图表</h3>
		<p>在聚客通中，数据分析</p>
		<table>
      <tr>
        <th>预览</th>
        <th>色号</th>
        <th>使用场景</th>
      </tr>
      <tr>
        <td style="background: #ff5b4c"></td>
        <td>#FF5B4C</td>
        <td>购物时间段，短信营销次数，公众号关注时间，活动参与次数，互动消息次数</td>
      </tr>
      <tr>
        <td style="background: #73d948"></td>
        <td>#73D948</td>
        <td>交易时间，短信营销次数，微信绑定，活动参与次数，发送消息时间</td>
      </tr>
			<tr>
        <td style="background: #ffbb33"></td>
        <td>#FFBB33</td>
        <td>交易金额，客单价</td>
      </tr>
      <tr>
        <td style="background: #4cc3ff"></td>
        <td>#4CC3FF</td>
        <td>交易笔数，群组过滤</td>
      </tr>
      <tr>
        <td style="background: #9966cc"></td>
        <td>#9966CC</td>
        <td>用户性别，购买商品，参与活动</td>
      </tr>
    </table>
  </div>
</template>

<script>
    'use strict'

    export default {
        name: 'color',
        components: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
        events: {

        },
        watch: {

        },
        computed: {

        }
    }
</script>