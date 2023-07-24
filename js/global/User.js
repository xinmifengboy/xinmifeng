"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, headImg, maxHp = 0, currentHp = 0, maxMp = 0, currentMp = 0, maxExp = 0, currentExp = 0, strength = 10, agility = 10, intelligence = 10, attack = 0, armor = 0) {
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
exports.Player = Player;
