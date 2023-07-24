
import { IBasic, IWeapon } from "./IAttributes"
/**
 * @description 基础属性
 * @param {string} name     名称
 * @param {number} level    等级
 * @param {number} attack   攻击
 * @param {number} armor    护甲值
 * @param {number} maxHp    最大生命值
 * @param {number} currentHp    当前生命值
 */
export class BasicProperty {
  name: string
  level: number
  attack: number
  armor: number
  maxHp: number
  currentHp: number
  constructor(name: string, level: number, attack: number, armor: number, maxHp: number, currentHp: number) {
    this.name = name
    this.level = level
    this.attack = attack
    this.armor = armor
    this.maxHp = maxHp
    this.currentHp = currentHp
  }
}

/**
 * @description 玩家属性
 * @param {string} headImg - 头像
 * @param {number} maxExp - 最大经验值
 * @param {number} currentExp - 当前经验值
 * @param {number} strength - 力量
 * @param {number} agility - 敏捷
 * @param {number} intelligence - 智力
 */
export class PlayerProperty extends BasicProperty{
  headImg: string
  maxExp: number
  currentExp: number
  strength: number
  agility: number
  intelligence: number
  constructor(
    player: PlayerProperty,
  ) {
    super(player.name, player.level,player.attack,player.armor,player.maxHp, player.currentHp)
    this.headImg = player.headImg
    this.maxExp = player.maxExp
    this.currentExp = player.currentExp
    this.strength = player.strength
    this.agility = player.agility
    this.intelligence = player.intelligence
  }
  
}

//  商品武器
export class weapon implements IBasic, IWeapon {
  name: string
  price: number
  attack: number
  constructor(basic: IBasic, weapon: IWeapon) {
    this.name = basic.name
    this.price = basic.price
    this.attack = weapon.attack
  }
}
// 商店
export class shop {
  名称: string
  商品: object[]
  
}
