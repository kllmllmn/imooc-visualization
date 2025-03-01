import { sleep } from "@/utils/index.js";
const mockData = {
  success: true,
  code: 200,
  data: {
    regionData: {
      regions: [
        {
          id: 1,
          name: "华北",
          value: 57,
        },
        {
          id: 2,
          name: "东北",
          value: 76,
        },
        {
          id: 3,
          name: "华东",
          value: 84,
        },
        {
          id: 4,
          name: "中南",
          value: 85,
        },
        {
          id: 5,
          name: "西南",
          value: 53,
        },
        {
          id: 6,
          name: "西北",
          value: 55,
        },
      ],
    },
    serverData: {
      servers: [
        {
          id: 1,
          name: "服务1",
          value: 81,
        },
        {
          id: 2,
          name: "服务2",
          value: 67,
        },
        {
          id: 3,
          name: "服务3",
          value: 83,
        },
        {
          id: 4,
          name: "服务4",
          value: 85,
        },
        {
          id: 5,
          name: "服务5",
          value: 77,
        },
        {
          id: 6,
          name: "服务6",
          value: 64,
        },
      ],
    },
    riskData: {
      risks: [
        {
          id: 1,
          name: "华北",
          value: 70,
        },
        {
          id: 2,
          name: "东北",
          value: 82,
        },
        {
          id: 3,
          name: "华东",
          value: 45,
        },
        {
          id: 4,
          name: "中南",
          value: 90,
        },
        {
          id: 5,
          name: "西南",
          value: 49,
        },
        {
          id: 6,
          name: "西北",
          value: 88,
        },
      ],
    },
    abnormalData: {
      abnormals: [
        {
          id: 1,
          name: "华北",
          value: 542,
        },
        {
          id: 2,
          name: "东北",
          value: 536,
        },
        {
          id: 3,
          name: "华东",
          value: 694,
        },
        {
          id: 4,
          name: "中南",
          value: 303,
        },
        {
          id: 5,
          name: "西南",
          value: 661,
        },
      ],
    },
    relationData: {
      relations: [
        {
          id: 1,
          name: "上级平台1",
          source: "上级平台1",
          target: "数据中心",
          speed: 151,
          value: [0, 300],
        },
        {
          id: 2,
          name: "上级平台2",
          source: "上级平台2",
          target: "数据中心",
          speed: 200,
          value: [0, 100],
        },
        {
          id: 3,
          name: "子级平台1",
          source: "数据中心",
          target: "子级平台1",
          speed: 87,
          value: [100, 100],
        },
        {
          id: 4,
          name: "子级平台2",
          source: "数据中心",
          target: "子级平台2",
          speed: 74,
          value: [100, 300],
        },
        {
          id: 0,
          name: "数据中心",
          speed: 53,
          value: [50, 200],
        },
      ],
    },
    wordCloudData: {
      datas: [
        {
          value: 38,
          name: "企联网",
        },
        {
          value: 26,
          name: "智农通",
        },
        {
          value: 24,
          name: "OPPO",
        },
        {
          value: 29,
          name: "HONOR",
        },
        {
          value: 34,
          name: "红米",
        },
        {
          value: 35,
          name: "小米",
        },
        {
          value: 21,
          name: "美图",
        },
        {
          value: 19,
          name: "ONEPLUS",
        },
        {
          value: 23,
          name: "魅族",
        },
        {
          value: 37,
          name: "红手指",
        },
        {
          value: 24,
          name: "SAMSUNG",
        },
        {
          value: 38,
          name: "金立",
        },
        {
          value: 21,
          name: "BLACKBERRY",
        },
        {
          value: 22,
          name: "诺基亚",
        },
        {
          value: 20,
          name: "锤子",
        },
        {
          value: 18,
          name: "大疆",
        },
        {
          value: 12,
          name: "361",
        },
        {
          value: 30,
          name: "摩托罗拉",
        },
        {
          value: 21,
          name: "联想",
        },
        {
          value: 23,
          name: "玩家国度",
        },
      ],
    },
    totalData: {
      total: "6794739",
      hb: "87788",
      db: "65446",
      hd: "76456",
      zn: "42135",
      xn: "74564",
      xb: "75753",
    },
    mapData: {
      voltageLevel: ["2019", "2020", "2021", "2022", "2023"],
      colors: [
        "#1DE9B6",
        "#F46E36",
        "#04B9FF",
        "#5DBD32",
        "#FFC809",
        "#FB95D5",
        "#BDA29A",
        "#6E7074",
        "#546570",
        "#C4CCD3",
      ],
      categoryData: {
        2019: [
          {
            name: "北京",
            value: 35,
          },
          {
            name: "天津",
            value: 11,
          },
          {
            name: "河北",
            value: 63,
          },
          {
            name: "山西",
            value: 25,
          },
          {
            name: "内蒙古",
            value: 13,
          },
          {
            name: "辽宁",
            value: 59,
          },
          {
            name: "吉林",
            value: 21,
          },
          {
            name: "黑龙江",
            value: 63,
          },
          {
            name: "上海",
            value: 35,
          },
          {
            name: "江苏",
            value: 35,
          },
          {
            name: "安徽",
            value: 11,
          },
          {
            name: "浙江",
            value: 13,
          },
          {
            name: "福建",
            value: 65,
          },
          {
            name: "江西",
            value: 77,
          },
          {
            name: "山东",
            value: 37,
          },
          {
            name: "河南",
            value: 51,
          },
          {
            name: "湖北",
            value: 75,
          },
          {
            name: "湖南",
            value: 14,
          },
          {
            name: "广东",
            value: 19,
          },
          {
            name: "广西",
            value: 46,
          },
          {
            name: "海南",
            value: 53,
          },
          {
            name: "重庆",
            value: 14,
          },
          {
            name: "四川",
            value: 29,
          },
          {
            name: "贵州",
            value: 42,
          },
          {
            name: "云南",
            value: 75,
          },
          {
            name: "陕西",
            value: 44,
          },
          {
            name: "甘肃",
            value: 40,
          },
          {
            name: "青海",
            value: 49,
          },
          {
            name: "宁夏",
            value: 30,
          },
          {
            name: "新疆",
            value: 35,
          },
          {
            name: "西藏",
            value: 32,
          },
        ],
        2020: [
          {
            name: "北京",
            value: 67,
          },
          {
            name: "天津",
            value: 67,
          },
          {
            name: "河北",
            value: 60,
          },
          {
            name: "山西",
            value: 64,
          },
          {
            name: "内蒙古",
            value: 35,
          },
          {
            name: "辽宁",
            value: 79,
          },
          {
            name: "吉林",
            value: 47,
          },
          {
            name: "黑龙江",
            value: 69,
          },
          {
            name: "上海",
            value: 69,
          },
          {
            name: "江苏",
            value: 56,
          },
          {
            name: "安徽",
            value: 17,
          },
          {
            name: "浙江",
            value: 39,
          },
          {
            name: "福建",
            value: 71,
          },
          {
            name: "江西",
            value: 64,
          },
          {
            name: "山东",
            value: 50,
          },
          {
            name: "河南",
            value: 59,
          },
          {
            name: "湖北",
            value: 55,
          },
          {
            name: "湖南",
            value: 69,
          },
          {
            name: "广东",
            value: 73,
          },
          {
            name: "广西",
            value: 33,
          },
          {
            name: "海南",
            value: 34,
          },
          {
            name: "重庆",
            value: 43,
          },
          {
            name: "四川",
            value: 21,
          },
          {
            name: "贵州",
            value: 65,
          },
          {
            name: "云南",
            value: 25,
          },
          {
            name: "陕西",
            value: 11,
          },
          {
            name: "甘肃",
            value: 76,
          },
          {
            name: "青海",
            value: 42,
          },
          {
            name: "宁夏",
            value: 15,
          },
          {
            name: "新疆",
            value: 28,
          },
          {
            name: "西藏",
            value: 21,
          },
        ],
        2021: [
          {
            name: "北京",
            value: 40,
          },
          {
            name: "天津",
            value: 75,
          },
          {
            name: "河北",
            value: 22,
          },
          {
            name: "山西",
            value: 73,
          },
          {
            name: "内蒙古",
            value: 37,
          },
          {
            name: "辽宁",
            value: 62,
          },
          {
            name: "吉林",
            value: 50,
          },
          {
            name: "黑龙江",
            value: 17,
          },
          {
            name: "上海",
            value: 67,
          },
          {
            name: "江苏",
            value: 44,
          },
          {
            name: "安徽",
            value: 50,
          },
          {
            name: "浙江",
            value: 32,
          },
          {
            name: "福建",
            value: 79,
          },
          {
            name: "江西",
            value: 24,
          },
          {
            name: "山东",
            value: 60,
          },
          {
            name: "河南",
            value: 38,
          },
          {
            name: "湖北",
            value: 17,
          },
          {
            name: "湖南",
            value: 67,
          },
          {
            name: "广东",
            value: 15,
          },
          {
            name: "广西",
            value: 39,
          },
          {
            name: "海南",
            value: 22,
          },
          {
            name: "重庆",
            value: 39,
          },
          {
            name: "四川",
            value: 65,
          },
          {
            name: "贵州",
            value: 77,
          },
          {
            name: "云南",
            value: 27,
          },
          {
            name: "陕西",
            value: 53,
          },
          {
            name: "甘肃",
            value: 13,
          },
          {
            name: "青海",
            value: 15,
          },
          {
            name: "宁夏",
            value: 67,
          },
          {
            name: "新疆",
            value: 52,
          },
          {
            name: "西藏",
            value: 13,
          },
        ],
        2022: [
          {
            name: "北京",
            value: 42,
          },
          {
            name: "天津",
            value: 62,
          },
          {
            name: "河北",
            value: 68,
          },
          {
            name: "山西",
            value: 50,
          },
          {
            name: "内蒙古",
            value: 61,
          },
          {
            name: "辽宁",
            value: 12,
          },
          {
            name: "吉林",
            value: 68,
          },
          {
            name: "黑龙江",
            value: 54,
          },
          {
            name: "上海",
            value: 52,
          },
          {
            name: "江苏",
            value: 27,
          },
          {
            name: "安徽",
            value: 30,
          },
          {
            name: "浙江",
            value: 23,
          },
          {
            name: "福建",
            value: 32,
          },
          {
            name: "江西",
            value: 49,
          },
          {
            name: "山东",
            value: 25,
          },
          {
            name: "河南",
            value: 75,
          },
          {
            name: "湖北",
            value: 23,
          },
          {
            name: "湖南",
            value: 50,
          },
          {
            name: "广东",
            value: 36,
          },
          {
            name: "广西",
            value: 13,
          },
          {
            name: "海南",
            value: 15,
          },
          {
            name: "重庆",
            value: 50,
          },
          {
            name: "四川",
            value: 64,
          },
          {
            name: "贵州",
            value: 17,
          },
          {
            name: "云南",
            value: 79,
          },
          {
            name: "陕西",
            value: 64,
          },
          {
            name: "甘肃",
            value: 14,
          },
          {
            name: "青海",
            value: 51,
          },
          {
            name: "宁夏",
            value: 55,
          },
          {
            name: "新疆",
            value: 70,
          },
          {
            name: "西藏",
            value: 44,
          },
        ],
        2023: [
          {
            name: "北京",
            value: 46,
          },
          {
            name: "天津",
            value: 70,
          },
          {
            name: "河北",
            value: 50,
          },
          {
            name: "山西",
            value: 20,
          },
          {
            name: "内蒙古",
            value: 38,
          },
          {
            name: "辽宁",
            value: 49,
          },
          {
            name: "吉林",
            value: 35,
          },
          {
            name: "黑龙江",
            value: 35,
          },
          {
            name: "上海",
            value: 54,
          },
          {
            name: "江苏",
            value: 76,
          },
          {
            name: "安徽",
            value: 28,
          },
          {
            name: "浙江",
            value: 45,
          },
          {
            name: "福建",
            value: 20,
          },
          {
            name: "江西",
            value: 55,
          },
          {
            name: "山东",
            value: 22,
          },
          {
            name: "河南",
            value: 16,
          },
          {
            name: "湖北",
            value: 63,
          },
          {
            name: "湖南",
            value: 72,
          },
          {
            name: "广东",
            value: 57,
          },
          {
            name: "广西",
            value: 33,
          },
          {
            name: "海南",
            value: 69,
          },
          {
            name: "重庆",
            value: 38,
          },
          {
            name: "四川",
            value: 72,
          },
          {
            name: "贵州",
            value: 72,
          },
          {
            name: "云南",
            value: 60,
          },
          {
            name: "陕西",
            value: 22,
          },
          {
            name: "甘肃",
            value: 22,
          },
          {
            name: "青海",
            value: 72,
          },
          {
            name: "宁夏",
            value: 76,
          },
          {
            name: "新疆",
            value: 18,
          },
          {
            name: "西藏",
            value: 31,
          },
        ],
      },
      topData: {
        2019: [
          {
            name: "天津",
            value: [117.4219, 39.4189, 84.1],
          },
          {
            name: "河北",
            value: [114.4995, 38.1006, 82.4],
          },
          {
            name: "北京",
            value: [116.4551, 40.2539, 79.5],
          },
          {
            name: "河南",
            value: [113.4668, 34.6234, 77.2],
          },
          {
            name: "山东",
            value: [117.1582, 36.8701, 71.2],
          },
          {
            name: "安徽",
            value: [117.29, 32.0581, 68],
          },
          {
            name: "湖北",
            value: [114.3896, 30.6628, 64.5],
          },
          {
            name: "江苏",
            value: [118.8062, 31.9208, 62.5],
          },
          {
            name: "新疆",
            value: [87.9236, 43.5883, 59.1],
          },
          {
            name: "湖南",
            value: [113.0823, 28.2568, 57.2],
          },
        ],
        2020: [
          {
            name: "北京",
            value: [116.4551, 40.2539, 78.5],
          },
          {
            name: "河北",
            value: [114.4995, 38.1006, 74.8],
          },
          {
            name: "河南",
            value: [113.4668, 34.6234, 73.7],
          },
          {
            name: "天津",
            value: [117.4219, 39.4189, 70.6],
          },
          {
            name: "山东",
            value: [117.1582, 36.8701, 69.7],
          },
          {
            name: "安徽",
            value: [117.29, 32.0581, 58.9],
          },
          {
            name: "江苏",
            value: [118.8062, 31.9208, 58.6],
          },
          {
            name: "湖北",
            value: [114.3896, 30.6628, 57.8],
          },
          {
            name: "上海",
            value: [121.4648, 31.2891, 51.9],
          },
          {
            name: "山西",
            value: [112.3352, 37.9413, 50.7],
          },
        ],
        2021: [
          {
            name: "北京",
            value: [116.4551, 40.2539, 69.5],
          },
          {
            name: "天津",
            value: [117.4219, 39.4189, 68.4],
          },
          {
            name: "河北",
            value: [114.4995, 38.1006, 67.3],
          },
          {
            name: "河南",
            value: [113.4668, 34.6234, 65.7],
          },
          {
            name: "山东",
            value: [117.1582, 36.8701, 61.3],
          },
          {
            name: "新疆",
            value: [87.9236, 43.5883, 53.8],
          },
          {
            name: "安徽",
            value: [117.29, 32.0581, 52.9],
          },
          {
            name: "陕西",
            value: [109.1162, 34.2004, 51.1],
          },
          {
            name: "湖北",
            value: [114.3896, 30.6628, 50.5],
          },
          {
            name: "山西",
            value: [112.3352, 37.9413, 50.4],
          },
        ],
        2022: [
          {
            name: "河南",
            value: [113.4668, 34.6234, 61],
          },
          {
            name: "天津",
            value: [117.4219, 39.4189, 60.1],
          },
          {
            name: "河北",
            value: [114.4995, 38.1006, 60.1],
          },
          {
            name: "安徽",
            value: [117.29, 32.0581, 56],
          },
          {
            name: "北京",
            value: [116.4551, 40.2539, 55.7],
          },
          {
            name: "山东",
            value: [117.1582, 36.8701, 54.3],
          },
          {
            name: "陕西",
            value: [109.1162, 34.2004, 50.2],
          },
          {
            name: "新疆",
            value: [87.9236, 43.5883, 49.7],
          },
          {
            name: "山西",
            value: [112.3352, 37.9413, 49.4],
          },
          {
            name: "湖北",
            value: [114.3896, 30.6628, 48.5],
          },
        ],
        2023: [
          {
            name: "河南",
            value: [113.4668, 34.6234, 57.3],
          },
          {
            name: "新疆",
            value: [87.9236, 43.5883, 53.5],
          },
          {
            name: "河北",
            value: [114.4995, 38.1006, 53.1],
          },
          {
            name: "天津",
            value: [117.4219, 39.4189, 51.6],
          },
          {
            name: "北京",
            value: [116.4551, 40.2539, 50],
          },
          {
            name: "安徽",
            value: [117.29, 32.0581, 49.9],
          },
          {
            name: "山东",
            value: [117.1582, 36.8701, 47.7],
          },
          {
            name: "江苏",
            value: [118.8062, 31.9208, 46.2],
          },
          {
            name: "陕西",
            value: [109.1162, 34.2004, 44.2],
          },
          {
            name: "山西",
            value: [112.3352, 37.9413, 43.9],
          },
        ],
      },
    },
  },
  message: "数据获取成功",
};

const getMockData = async () => {
  await sleep(3000);
  return Promise.resolve(mockData);
};
export { getMockData };
