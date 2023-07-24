"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shop = exports.weapon = exports.PlayerProperty = exports.BasicProperty = void 0;
/**
 * @description 基础属性
 * @param {string} name     名称
 * @param {number} level    等级
 * @param {number} attack   攻击
 * @param {number} armor    护甲值
 * @param {number} maxHp    最大生命值
 * @param {number} currentHp    当前生命值
 */
class BasicProperty {
    constructor(name, level, attack, armor, maxHp, currentHp) {
        this.name = name;
        this.level = level;
        this.attack = attack;
        this.armor = armor;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
    }
}
exports.BasicProperty = BasicProperty;
/**
 * @description 玩家属性
 * @param {string} headImg - 头像
 * @param {number} maxExp - 最大经验值
 * @param {number} currentExp - 当前经验值
 * @param {number} strength - 力量
 * @param {number} agility - 敏捷
 * @param {number} intelligence - 智力
 */
class PlayerProperty extends BasicProperty {
    constructor(player) {
        super(player.name, player.level, player.attack, player.armor, player.maxHp, player.currentHp);
        this.headImg = player.headImg;
        this.maxExp = player.maxExp;
        this.currentExp = player.currentExp;
        this.strength = player.strength;
        this.agility = player.agility;
        this.intelligence = player.intelligence;
    }
}
exports.PlayerProperty = PlayerProperty;
//  商品武器
class weapon {
    constructor(basic, weapon) {
        this.name = basic.name;
        this.price = basic.price;
        this.attack = weapon.attack;
    }
}
exports.weapon = weapon;
// 商店
class shop {
}
exports.shop = shop;
