"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(playerInfo, equipment) {
        this.name = playerInfo.name;
        this.level = playerInfo.level;
        this.job = playerInfo.job;
        this.headImg = playerInfo.headImg;
        this.maxHp = playerInfo.maxHp;
        this.currentHp = playerInfo.currentHp;
        this.maxMp = playerInfo.maxMp;
        this.currentMp = playerInfo.currentMp;
        this.maxExp = playerInfo.maxExp;
        this.currentExp = playerInfo.currentExp;
        this.strength = playerInfo.strength;
        this.agility = playerInfo.agility;
        this.intelligence = playerInfo.intelligence;
        this.attack = playerInfo.attack;
        this.armor = playerInfo.armor;
        this.magicResistance = playerInfo.magicResistance;
        this.dodge = playerInfo.dodge;
        this.crit = playerInfo.crit;
        this.critDamage = playerInfo.critDamage;
        this.luck = playerInfo.luck;
        this.goldBonus = playerInfo.goldBonus;
        this.expBonus = playerInfo.expBonus;
    }
}
exports.default = Player;
