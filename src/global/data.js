export const userInfo = { //  用户相关
  name: '山河无恙', //  昵称
  level: 1,  //  等级
  job: '', // 职业
  headImg: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg', //  头像
  maxHp: 2000, //  最大生命值
  currentHp: 1888, //  当前生命值
  maxMp: 200, //  最大魔法值
  currentMp: 120, //  当前魔法值
  maxExp: 200, //  最大经验值
  currentExp: 120, //  当前经验值
}
export const userAttributeRule = [`每一点力量增加50生命值上限, 1护甲,1魔抗`, `每一点敏捷增加1点攻速, 1点闪避`, `每一点智力增加5点法力上限,1点冷却缩减`, `每一点主属性额外增加5点攻击力`] 

export const userAttribute = { //  人数属性
  strength: 10, // 力量
  agility: 10, // 敏捷
  intelligence: 10, // 智力
  attack: 50, // 攻击
  armor: 5, // 护甲
  magicResistance: 5, // 魔抗
  dodge: 0,  // 闪避
  crit: 0,  // 暴击
  critDamage: 0,  // 暴击伤害
  luck: 0,  // 幸运
  goldBonus: 0,  // 金币加成
  expBonus: 0  // 经验加成
}

export const jobs = [ //  职业列表
  {
    name: '战士',
    desc: '战斗玩家',
  },
  {
    name: '刺客',
    desc: '战斗玩家',
  },
  {
    name: '法师',
    desc: '战斗玩家',
  },
]
export const wealth = [ //  财富相关
  {
    name: '金币',
    total: 1000,
    addition: 88,
  },
  {
    name: '钻石',
    total: 1000,
    addition: 10,
  },
  {
    name: '杀敌数',
    total: 9999,
    addition: 10,
  },
]