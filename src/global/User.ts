interface IPlayerInfo {
  headImg: string  // 头像
  maxExp: number  // 最大经验值
  currentExp: number  // 当前经验值
  strength: number  // 力量
  agility: number  // 敏捷
  intelligence: number  // 智力
}

interface IBasicAttr {  //  通用基础属性
  level: number  // 等级
  name: string // 名称
  attack: number // 攻击
  armor: number // 护甲值
  maxHp: number  // 最大生命值
  currentHp: number  // 当前生命值
  maxMp: number  // 最大魔法值
  currentMp: number  // 当前魔法值
}


export  class Player implements IPlayerInfo, IBasicAttr {
  name: string  // 昵称
  level: number  // 等级
  headImg: string  // 头像
  maxHp: number // 最大生命值
  currentHp: number // 当前生命值
  maxMp: number // 最大魔法值
  currentMp: number  // 当前魔法值
  maxExp: number  // 最大经验值
  currentExp: number  // 当前经验值
  strength: number  // 力量
  agility: number  // 敏捷
  intelligence: number  // 智力
  attack: number  // 攻击
  armor: number // 护甲
  constructor(
    name: string, headImg: string, 
    maxHp: number = 0, currentHp: number = 0 , maxMp: number = 0, 
    currentMp: number = 0, maxExp: number = 0, 
    currentExp: number = 0, strength: number = 10, 
    agility: number = 10, intelligence: number = 10, 
    attack: number = 0, armor: number = 0) {
    this.name = name;
    this.headImg = headImg;
    this.maxHp = maxHp;
    this.currentHp = currentHp;
    this.maxMp = maxMp;
    this.currentMp = currentMp;
    this.maxExp = maxExp;
    this.currentExp = currentExp;
    this.strength = strength;
    this.agility = agility;
    this.intelligence = intelligence;
    this.attack = attack;
    this.armor = armor;
  }
}

