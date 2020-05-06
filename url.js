var host = window.location.origin;
window.globalConfig = {
	"apiUri": host,
	//   "apiUri": "http://10.10.243.86:8228",
	//控制页面多久请求一次数据。180000ms。即3分钟        
	"time": 30000,
	//大屏标题
	"title_1": "云数据中心",
	"title_2": "应用情况",
	"title_3": "安全可靠平台",
	"title_4": {
		title: "安全态势感知",
		subtitle: "互联网安全评测机构"
	},
	//云数据中心假数据
	"dataCenter": {
		//商密网数据
		"bussiness": {
			//左上角即服务可用性
			"leftTop": {
				//图例名称
				legendData: ["云服务"],
				//X坐标轴数据
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				//数据值,一条折线则数组中有一个数组,两条折线则有两个数组,一次类推
				data: [
					[86, 99, 85, 87, 83, 100, 87, 99, 87, 86, 84, 81]
				],
				//#0486E3为折线的颜色和red为基准线的颜色
				colorData: ["#0486E3", "red"],
				//y轴名称
				name: "",
				//是否显示图例
				showLegend: true,
				//折线下方区域是否填充颜色
				showAreaColor: true
			},
			//左中即服务受理量
			"leftCenter": {
				//图例名称
				legendData: ["已完成", "未完成"],
				//X坐标轴数据
				timeData: ["1周", "2周", "3周", "4周", "5周", "6周", "7周", "8周", "9周", "10周", "11周", "12周"],
				//和图例对应，第一个数组代表已完成的数据,第二个数组代表为完成的数据
				data: [
					[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 220],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280],
				],
				//y轴名称
				name: "",
				//是否显示图例
				showLegend: true,
			},
			//左下即告警统计
			"leftBottom": {
				legendData: ["紧急", "重要", "一般", "通知"],
				timeData: ["1周", "2周", "3周", "4周", "5周", "6周", "7周", "8周", "9周", "10周", "11周", "12周"],
				//和图例对应，第1到4个数组偶从代表紧急、重要、一般和通知的数据
				data: [
					[9, 1, 9, 6, 10, 1, 10, 1, 8, 9, 3, 7],
					[15, 14, 10, 15, 14, 13, 14, 10, 18, 16, 11, 11],
					[19, 34, 30, 44, 19, 11, 39, 24, 30, 35, 19, 48],
					[96, 80, 99, 53, 48, 58, 88, 61, 68, 58, 38, 43]
				],
				//和图例对应，第1到4个数组偶从代表紧急、重要、一般和通知的折线的颜色
				colorData: ["#CB060A", "#CC7310", "#0181DB", "#AFB2B9"],
				//y轴名称
				name: "",
				//是否显示图例
				showLegend: true,
				//折线下方区域是否填充颜色
				showAreaColor: false
			},
			//资源使用量top5
			"rightBottom": [
				"中国航天科工运载技术研究院",
				"中国长峰机电技术研究设计院",
				"航天工业发展股份有限公司",
				"中国航天科工信息技术研究院",
				"航天精工股份有限公司"
			],
			//地图四个数据中心线路状态数据,state 0代表正常，1代表异常
			"map": [{
				"from": "呼和浩特数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "呼和浩特数据中心",
				"to": "常州数据中心",
				"state": 1
			}, {
				"from": "呼和浩特数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "呼和浩特数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "北京",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "北京",
				"state": 0
			}]


		},
		//互联网数据
		"network": {
			//左上即服务可用性
			"leftTop": {
				legendData: ["云服务"],
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				data: [
					[94, 91, 90, 81, 84, 91, 98, 94, 89, 98, 100, 81]
				],
				colorData: ["#0486E3", "red"],
				name: "",
				showLegend: true,
				showAreaColor: true
			},
			//左中即服务受理量
			"leftCenter": {
				legendData: ["已完成", "未完成"],
				timeData: ["1周", "2周", "3周", "4周", "5周", "6周", "7周", "8周", "9周", "10周", "11周", "12周"],
				data: [
					[274, 210, 205, 220, 275, 108, 178, 167, 107, 204, 170, 289],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90],
				],
				name: "",
				showLegend: true
			},
			//左下即告警统计
			"leftBottom": {
				legendData: ["紧急", "重要", "一般", "通知"],
				timeData: ["1周", "2周", "3周", "4周", "5周", "6周", "7周", "8周", "9周", "10周", "11周", "12周"],
				data: [
					[10, 5, 7, 10, 9, 2, 6, 9, 1, 1, 2, 10],
					[18, 17, 15, 16, 17, 15, 20, 14, 14, 19, 18, 20],
					[27, 49, 36, 15, 27, 41, 45, 26, 38, 30, 24, 21],
					[50, 84, 57, 74, 50, 96, 95, 85, 63, 77, 62, 63]
				],
				colorData: ["#CB060A", "#CC7310", "#0181DB", "#AFB2B9"],
				name: "",
				showLegend: true,
				showAreaColor: false,
				//控制折线图上是否展示数字
				showLabel: false
			},
			//资源使用量top5
			"rightBottom": [
				"航天云网科技发展有限责任公司",
				"中国航天科工信息技术研究院",
				"深圳航天工业技术研究院有限公司",
				"航天工业机关服务中心",
				"航天科工智慧产业发展有限公司"
			],
			//地图四个数据中心线路状态数据,state 0代表正常，1代表异常
			"map": [{
				"from": "呼和浩特数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "呼和浩特数据中心",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "呼和浩特数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "呼和浩特数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "常州数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "南昌数据中心",
				"to": "北京",
				"state": 0
			}, {
				"from": "北京",
				"to": "呼和浩特数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "常州数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "南昌数据中心",
				"state": 0
			}, {
				"from": "北京",
				"to": "北京",
				"state": 0
			}]


		},
	},
	//商密网应用情况假数据
	"business": {
		//以下为系统折线图数据
		"协同办公": {
			//运行时间配置
			"time": {
				day: 220,
				hour: 12,
				minute: 34,
				second: 50
			},
			//用户数按月增长量折线图数据
			"rightTop": {
				//
				legendData: ["用户增长量"],
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				data: [
					[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
				],
				colorData: ["#01FEF8"],
				name: "用户数按月增长量趋势",
				showLegend: false,
				showAreaColor: false,
				//控制折线图上是否展示数字
				showLabel: true
			},
			//业务量按月增长量折线图数据
			"rightCenter": {
				legendData: ["业务增长量"],
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				//和图例对应，第一个数组代表已完成的数据,第二个数组代表为完成的数据
				data: [
					[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
				],
				colorData: ["#01FEF8"],
				name: "业务量按月增长量趋势",
				showLegend: false,
			},
			//用户数
			"rightTopPanel": 30045,
			//业务量
			"rightCenterPanel": 2003004,
			//关键系统响应时间
			"rightBottom": {
				legendData: ["业务增长量"],
				timeData: [
					"打开发文查询页面",
					"发文正文",
					"收文正文",
					"按发文标题查询",
					"保存工作委托信息",
					"返回工作委托列表"
				],
				data: [
					[1739, 2938, 505, 2791, 2886, 2745]
				],
				colorData: ["#01FEF8"],
				name: "关键系统响应时间",
				showLegend: false,
				showAreaColor: false
			}
		},
		"安全邮件": {
			//运行时间配置
			"time": {
				day: 221,
				hour: 20,
				minute: 09,
				second: 30
			},
			"rightTop": {
				legendData: ["用户增长量"],
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				data: [
					[390, 390, 148, 367, 129, 327, 296, 154, 255, 215, 268, 353]
				],
				colorData: ["#FFF766"],
				name: "用户数按月增长量趋势",
				showLegend: false,
				showAreaColor: false,
				showLabel: true
			},
			"rightCenter": {
				legendData: ["业务增长量"],
				timeData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				data: [
					[199, 146, 160, 176, 194, 136, 179, 158, 56, 180, 84, 142]
				],
				colorData: ["#FFF766"],
				name: "业务量按月增长量趋势",
				showLegend: false,
				showAreaColor: false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 23311,
			//业务量
			"rightCenterPanel": 43323,
			"rightBottom": {
				legendData: ["业务增长量"],
				timeData: [
					"打开发文查询页面",
					"发文正文",
					"收文正文",
					"按发文标题查询",
					"保存工作委托信息",
					"返回工作委托列表"
				],
				data: [
					[1364, 1553, 1686, 1530, 1887, 2185]
				],
				colorData: ["#FFF766"],
				name: "关键系统响应时间",
				showLegend: false,
				showAreaColor: false
			}
		},
		"公文管理": {
			//运行时间配置
			"time": {
				day: 222,
				hour: 20,
				minute: 29,
				second: 15
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[364, 183, 105, 165, 329, 224, 180, 148, 332, 195, 346, 347]
				],
				"colorData": ["#01FEF8"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[140, 14, 92, 101, 93, 119, 52, 67, 117, 33, 119, 41]
				],
				"colorData": ["#01FEF8"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 56633,
			//业务量
			"rightCenterPanel": 600986,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[1739, 2938, 505, 2791, 2886, 2745]
				],
				"colorData": ["#01FEF8"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"信息发布": {
			//运行时间配置
			"time": {
				day: 223,
				hour: 23,
				minute: 50,
				second: 25
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[354, 143, 341, 130, 118, 216, 124, 207, 107, 360, 269, 286]
				],
				"colorData": ["#FFF766"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[119, 125, 80, 23, 58, 98, 11, 70, 145, 62, 155, 196]
				],
				"colorData": ["#FFF766"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 27000,
			//业务量
			"rightCenterPanel": 340000,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[1964, 1052, 2198, 2795, 2577, 1480]
				],
				"colorData": ["#FFF766"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"智慧企业": {
			//运行时间配置
			"time": {
				day: 224,
				hour: 23,
				minute: 14,
				second: 33
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[256, 311, 357, 241, 323, 218, 181, 128, 189, 340, 161, 385]
				],
				"colorData": ["#01FEF8"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[46, 81, 158, 155, 16, 135, 100, 92, 80, 34, 57, 104]
				],
				"colorData": ["#01FEF8"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 42550,
			//业务量
			"rightCenterPanel": 340055,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[1364, 1553, 1686, 1530, 1887, 2185]
				],
				"colorData": ["#01FEF8"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"专有云": {
			//运行时间配置
			"time": {
				day: 325,
				hour: 20,
				minute: 09,
				second: 15
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[331, 339, 329, 129, 365, 226, 310, 106, 147, 285, 216, 303]
				],
				"colorData": ["#FFF766"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[55, 117, 69, 64, 169, 67, 188, 69, 141, 138, 166, 94]
				],
				"colorData": ["#FFF766"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 3490,
			//业务量
			"rightCenterPanel": 789650,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[966, 2947, 2625, 2001, 2058, 1244]
				],
				"colorData": ["#FFF766"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"智慧党建": {
			//运行时间配置
			"time": {
				day: 226,
				hour: 23,
				minute: 16,
				second: 35
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[257, 344, 180, 153, 355, 335, 148, 112, 330, 374, 128, 252]
				],
				"colorData": ["#01FEF8"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[186, 189, 196, 120, 77, 22, 190, 42, 55, 73, 142, 140]
				],
				"colorData": ["#01FEF8"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 50065,
			//业务量
			"rightCenterPanel": 800559,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[791, 2142, 1291, 2112, 905, 1578]
				],
				"colorData": ["#01FEF8"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"大额票据": {
			//运行时间配置
			"time": {
				day: 227,
				hour: 23,
				minute: 24,
				second: 26
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[206, 137, 204, 102, 256, 353, 207, 328, 371, 237, 174, 255]
				],
				"colorData": ["#FFF766"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[125, 98, 102, 120, 99, 99, 195, 65, 128, 120, 95, 81]
				],
				"colorData": ["#FFF766"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 42500,
			//业务量
			"rightCenterPanel": 750046,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[2853, 1624, 580, 1364, 812, 2420]
				],
				"colorData": ["#FFF766"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		"用户中心": {
			//运行时间配置
			"time": {
				day: 228,
				hour: 23,
				minute: 17,
				second: 45
			},
			"rightTop": {
				"legendData": ["用户增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[201, 355, 277, 185, 257, 266, 325, 351, 231, 235, 311, 334]
				],
				"colorData": ["#01FEF8"],
				"name": "用户数按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			"rightCenter": {
				"legendData": ["业务增长量"],
				"timeData": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				"data": [
					[18, 84, 43, 51, 15, 120, 51, 48, 140, 183, 67, 54]
				],
				"colorData": ["#01FEF8"],
				"name": "业务量按月增长量趋势",
				"showLegend": false,
				"showAreaColor": false,
				showLabel: true
			},
			//用户数
			"rightTopPanel": 52298,
			//业务量
			"rightCenterPanel": 7895643,
			"rightBottom": {
				"legendData": ["业务增长量"],
				"timeData": ["打开发文查询页面", "发文正文", "收文正文", "按发文标题查询", "保存工作委托信息", "返回工作委托列表"],
				"data": [
					[752, 2399, 1107, 646, 2195, 622]
				],
				"colorData": ["#01FEF8"],
				"name": "关键系统响应时间",
				"showLegend": false,
				"showAreaColor": false
			}
		},
		//以下为滑动页1的系统的健康度、繁忙度和可用度配置，state为0表示正常，绿灯。1表示异常，红灯。
		"firstFloorName": [{
			name: "协同办公",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "安全邮件",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "公文管理",
			busy: "70%",
			available: "30%",
			health: "48%",
			state: 1
		},
		{
			name: "信息发布",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		}
		],
		//以下为滑动页2的系统的健康度、繁忙度和可用度配置，state为0表示正常，绿灯。1表示异常，红灯。
		"firstTwoFloorName": [
			{
			name: "智慧企业",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "专有云",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "智慧党建",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "大额票据",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 0
		},
		{
			name: "用户中心",
			busy: "30%",
			available: "70%",
			health: "68%",
			state: 1
		}
		]
	},
	// 安全态势感知
	safeData: {
		//资产类型
		assetType: {
			title: '资产类型',
			color: ['#c7c712', '#cc8f16', '#157d33', '#0d74ba', '#135add', '#12cacd', '#a43711', '#5118ad'],
			data: [{
				name: '服务器',
				value: 14.73
			}, {
				name: '桌面PC',
				value: 10
			}, {
				name: 'Web服务',
				value: 20
			}, {
				name: '安全设备',
				value: 17.78
			}, {
				name: '中间件',
				value: 19.45
			}, {
				name: '数据库',
				value: 6.5
			}, {
				name: '业务系统',
				value: 9.8
			}, {
				name: '网络设置',
				value: 9.74
			}]
		},
		//外连风险总览
		risk: {
			title: '外连风险总览',
			realData: false,
			data: [{//图标的名称要与name保持一致
				name: "对外攻击",
				value: 589,
				unit: '次'
			}, {
				name: "违规访问",
				value: 0,
				unit: '次'
			}, {
				name: "APT C&C通信",
				value: 0,
				unit: '次'
			}, {
				name: "可疑行为",
				value: 229,
				unit: '次'
			}, {
				name: "服务器风险访问",
				value: "11k",
				unit: '次'
			}, {
				name: "隐蔽通信",
				value: 0,
				unit: '次'
			}]
		},
		//漏洞类型排名
		leak: {
			title: '漏洞类型排名',
			colorArray: [],
			barAttr: {
				barBorderRadius: 11,
			},
			data: [{
				name: '弱口令',
				value: 70
			}, {
				name: '跨站脚本（XSS）',
				value: 80
			}, {
				name: 'sql注入',
				value: 88
			}, {
				name: '敏感信息泄露',
				value: 48
			}, {
				name: '后台对外',
				value: 67
			}, {
				name: '远程代码执行',
				value: 56
			}, {
				name: '任意文件下载',
				value: 20
			}, {
				name: 'URL重定向',
				value: 27
			}, {
				name: '文件上传',
				value: 16
			}]
		},
		//地图
		worldMap: {
			realData: false,
			legendData: [
				{
					name: "已失陷",
					value: 1,
					unit: "个",
					color: "#fb2e29"
				},
				{
					name: "高危",
					value: 10,
					color: "#ffa429"
				},
				{
					name: "中危",
					value: 0,
					unit: "个",
					color: "#fdee2f"
				},
				{
					name: "低危",
					value: 204,
					unit: "个",
					color: "#2e7fff"
				},
				{
					name: "信息",
					value: 5,
					unit: "个",
					color: "#2cfed1"
				}
			],
			score: {
				value: 88,
				name: "综合评分",
			},
			geoCoordMap: [{
				上海: [121.4648, 31.2891],
				尼日利亚: [-4.388361, 11.186148],
				美国洛杉矶: [-118.24311, 34.052713],
				香港: [114.195466, 22.282751],
				美国芝加哥: [-87.801833, 41.870975],
				加纳库马西: [-4.62829, 7.72415],
				英国曼彻斯特: [-1.657222, 51.886863],
				德国: [10.01959, 54.38474],
				哈萨克斯坦阿拉木图: [45.326912, 41.101891],
				俄罗斯伊尔库茨克: [89.116876, 67.757906],
				巴西: [-48.678945, -10.493623],
				埃及达米埃塔: [31.815593, 31.418032],
				西班牙巴塞罗纳: [2.175129, 41.385064],
				柬埔寨金边: [104.88659, 11.545469],
				意大利米兰: [9.189948, 45.46623],
				乌拉圭蒙得维的亚: [-56.162231, -34.901113],
				莫桑比克马普托: [32.608571, -25.893473],
				阿尔及利亚阿尔及尔: [3.054275, 36.753027],
				阿联酋迪拜: [55.269441, 25.204514],
				匈牙利布达佩斯: [17.108519, 48.179162],
				澳大利亚悉尼: [150.993137, -33.675509],
				美国加州: [-121.910642, 41.38028],
				澳大利亚墨尔本: [144.999416, -37.781726],
				墨西哥: [-99.094092, 19.365711],
				加拿大温哥华: [-123.023921, 49.311753]
			}, {
				澳大利亚悉尼: [150.993137, -33.675509],
				澳大利亚墨尔本: [144.999416, -37.781726],
				香港: [114.195466, 45.282751],
				加拿大: [-109.404347, 60.638178],
				'澳大利亚': [137.708144, -25.328065],
				'安哥拉': [13.285773, -8.748538],
				'阿根廷': [-64.388276, -31.379492],
				'巴西': [-47.888777, -15.791724], //巴西-巴西利亚
				'文莱': [114.951828, 4.948475], //文莱-斯里巴加湾市
				'智利': [-70.693344, 19.48165], // 智利-圣地亚哥     Chile
				'科特迪瓦': [-5.255454, 6.826119], //亚穆苏克罗-科特迪瓦 Ivory Coast
				'喀麦隆': [11.502655, 3.852758], //喀麦隆-雅温得   Cameroon 
				'刚果民主共和国': [15.2495, -4.422756], //刚果民主共和国 -金沙萨   Democratic Republic of the Congo
				'刚果共和国': [15.240923, -4.263634], //刚果共和国-布拉柴维尔   Republic of the Congo
				'哥伦比亚共和国': [-74.074104, 4.715315], //哥伦比亚共和国-波哥大    Colombia
				'哥斯达黎加共和国': [-90.871819, 14.023867], //哥斯达黎加共和国-圣何塞    Costa Rica 
				'古巴共和国': [-82.366883, 23.119708], //古巴共和国- 哈瓦那   Cuba
				'北塞浦路斯': [33.380839, 35.184858], //北塞浦路斯土耳其共和国-尼科西亚   Northern Cyprus
				'塞浦路斯': [33.380264, 35.183442], //塞浦路斯-尼科西亚    Cyprus 
				'捷克共和国': [14.437258, 50.078142], //捷克共和国-布拉格    Czech Republic
				'德国': [13.40498, 52.521199], //德国-柏林  Germany
				'吉布提共和国': [43.146919, 11.573827], // 吉布提- 吉布提市   Djibouti 
				'丹麦': [12.431735, 55.665973], //丹麦-哥本哈根  Denmark 
				'多米尼加共和国': [-80.245123, 22.580836], //多米尼加共和国-圣多明各  Dominican Republic 
				'阿尔及利亚': [3.058874, 36.755571], //阿尔及利亚-阿尔及尔    Algeria
			},{
				'厄瓜多尔': [-78.467263, -0.179206], //厄瓜多尔-基多   Ecuador
				'埃及': [31.236287, 30.045171], //埃及-开罗      Egypt
				'厄立特里亚': [38.925716, 15.324804], //厄立特里亚-阿斯马拉  Eritrea
				'西班牙': [-3.703414, 40.419467], //西班牙-马德里 Spain
				'爱沙尼亚': [24.75379, 59.439569], // 爱沙尼亚共和国 -塔林        Estonia
				柬埔寨金边: [104.88659, 11.545469],
				意大利米兰: [9.189948, 45.46623],
				乌拉圭蒙得维的亚: [-56.162231, -34.901113],
				莫桑比克马普托: [32.608571, -25.893473],
			}],
			mapData: [{
				data1: [{
					name: "加拿大温哥华",
					value: 3590
				}, {
					name: "美国加州",
					value: 3590
				}, {
					name: "美国洛杉矶",
					value: 2370
				}, {
					name: "美国芝加哥",
					value: 2350
				}, {
					name: "墨西哥",
					value: 3590
				}, {
					name: "巴西",
					value: 3590
				}, {
					name: "乌拉圭蒙得维的亚",
					value: 3590
				}],
				data2: [{
					name: "尼日利亚",
					value: 9100
				},
				{
					name: "加纳库马西",
					value: 5120
				},
				{
					name: "英国曼彻斯特",
					value: 3110
				},
				{
					name: "德国",
					value: 6280
				},
				{
					name: "哈萨克斯坦阿拉木图",
					value: 7255
				},
				{
					name: "埃及达米埃塔",
					value: 3590
				},
				{
					name: "西班牙巴塞罗纳",
					value: 3590
				},

				{
					name: "意大利米兰",
					value: 3590
				},

				{
					name: "莫桑比克马普托",
					value: 3590
				},
				{
					name: "阿尔及利亚阿尔及尔",
					value: 3590
				},
				{
					name: "阿联酋迪拜",
					value: 3590
				},
				{
					name: "匈牙利布达佩斯",
					value: 3590
				}],
				data3: [{
					name: "澳大利亚悉尼",
					value: 3590
				},
				{
					name: "澳大利亚墨尔本",
					value: 3590
				}, {
					name: "柬埔寨金边",
					value: 3590
				}, {
					name: "香港",
					value: 3130
				}, {
					name: "俄罗斯伊尔库茨克",
					value: 8125
				}]
			}, {
				data1: [{
					name: "澳大利亚悉尼",
					value: 3590
				},{
					name: "加拿大",
					value: 432
				},{
					name: "澳大利亚",
					value: 432
				},{
					name: "安哥拉",
					value: 432
				},{
					name: "阿根廷",
					value: 432
				},{
					name: "哥伦比亚共和国",
					value: 432
				},{
					name: "哥斯达黎加共和国",
					value: 432
				},{
					name: "古巴共和国",
					value: 432
				},{
					name: "北塞浦路斯",
					value: 432
				}],
				data2: [{
					name: "澳大利亚墨尔本",
					value: 3590
				},{
					name: "巴西",
					value: 432
				},{
					name: "文莱",
					value: 432
				},{
					name: "智利",
					value: 432
				},{
					name: "塞浦路斯",
					value: 432
				},{
					name: "捷克共和国",
					value: 432
				},{
					name: "吉布提共和国",
					value: 432
				}],
				data3: [{
					name: "香港",
					value: 3130
				},{
					name: "科特迪瓦",
					value: 432
				},{
					name: "喀麦隆",
					value: 432
				},{
					name: "刚果民主共和国",
					value: 432
				},{
					name: "刚果共和国",
					value: 432
				},{
					name: "德国",
					value: 432
				},{
					name: "丹麦",
					value: 432
				},{
					name: "多米尼加共和国",
					value: 432
				},{
					name: "阿尔及利亚",
					value: 432
				}]
			},{
				data1:[{
					name: "厄瓜多尔",
					value: 432
				},{
					name: "埃及",
					value: 432
				},{
					name: "厄立特里亚",
					value: 432
				}],
				data2:[{
					name: "西班牙",
					value: 432
				},{
					name: "爱沙尼亚",
					value: 432
				},{
					name: "柬埔寨金边",
					value: 432
				}],
				data3:[{
					name: "意大利米兰",
					value: 432
				},{
					name: "乌拉圭蒙得维的亚",
					value: 432
				},{
					name: "莫桑比克马普托",
					value: 432
				}]
			}]
		},
		// 地图下列表
		attackList: {
			columns: [
				{
					prop: "ip",
					label: "攻击者IP",
					width: "15%"
				},
				{
					prop: "local",
					label: "攻击者所属地",
					width: "15%"
				},
				{
					prop: "victim",
					label: "受害者",
					width: "10%"
				},
				{
					prop: "type",
					label: "攻击类型",
					width: "20%"
				},
				{
					prop: "time",
					label: "攻击时间",
					width: "30%"
				},
				{
					prop: "log",
					label: "日志数",
					width: "10%"
				}
			],
			data: [//配置的国旗名称必须与图片名称保持一致
				{
					ip: "14.102.121.255",
					local: "中国",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "英国",
					img: "Britain",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "上海",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "德国",
					img: "Germany",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "天津",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "南京",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "北京",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "杭州",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "温州",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "广州",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				},
				{
					ip: "14.102.121.255",
					local: "深圳",
					img: "China",
					victim: "天智",
					type: "WEBSHELL上传（83）",
					time: "2019-11-10 22:14:11至2019-11-15 16：20：11",
					log: 83
				}
			]
		},
		//安全事件态势
		securityList: {
			title: '安全事件态势',
			data: [
				{
					name: "1主机疑似存在数据泄露风险",
					value: 1,
					status: true
				},
				{
					name: "2遭受风险访问",
					value: 2,
					status: true
				},
				{
					name: "3收到垃圾邮件",
					value: 46,
					status: false
				},
				{
					name: "4对外DoD攻击",
					value: 2,
					status: true
				},
				{
					name: "5对外IP扫描",
					value: 2,
					status: false
				},
				{
					name: "6对外MySQL爆破",
					value: 1,
					status: true
				},
				{
					name: "7收到垃圾数据",
					value: 1,
					status: false
				},
				{
					name: "8收到垃圾数据",
					value: 1,
					status: false
				},
				{
					name: "9收到垃圾数据",
					value: 1,
					status: false
				},
				{
					name: "10对外IP扫描",
					value: 1,
					status: false
				},
				{
					name: "11对外IP扫描",
					value: 1,
					status: true
				},
				{
					name: "12对外IP扫描",
					value: 1,
					status: false
				},
				{
					name: "13对外IP扫描",
					value: 1,
					status: true
				},
				{
					name: "14收到垃圾",
					value: 1,
					status: false
				},
				{
					name: "15收到垃圾",
					value: 1,
					status: false
				}
			]
		},
		//安全事件处置
		securityEchart: {
			title: '安全事件处置',
			realData: false,
			data: {
				sum: {
					name: '总派单数',
					value: 768
				},
				disposalRate: {
					name: '处置率',
					value: 0.8
				},
				intercepted: {
					name: '已拦截攻击',
					value: 0.5
				}
			}
		},
		//威胁情况排名
		threat: {
			title: '威胁情况排名',
			barAttr: {
				barBorderRadius: 0,
			},
			data: [{
				name: 'DDOS攻击',
				value: 87
			}, {
				name: '蠕虫病毒',
				value: 35
			}, {
				name: '恶意软件',
				value: 65
			}, {
				name: '钓鱼网站',
				value: 34
			}, {
				name: 'SQL注入',
				value: 24
			}, {
				name: '漏洞攻击',
				value: 17
			}, {
				name: '暴力破解',
				value: 80
			}]
		},
	}
}