class Character {
  private _name: string
  private _level: number
  private _attack: number
  private _armor: number
  private _coins: number
  private _diamond: number

  constructor(
    name: string,
    level: number,
    attack: number,
    armor: number,
    coins: number,
    diamond: number
    ) {
    this._name = name
    this._level = level
    this._attack = attack
    this._armor = armor
    this._coins = coins
    this._diamond = diamond
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get level(): number {
    return this._level
  }

  set level(level: number) {
    this._level = level
  }


  get attack(): number {
    return this._attack
  }

  set attack(attack: number) {
    this._attack = attack
  }

  get armor(): number {
    return this._armor
  }

  set armor(armor: number) {
    this._armor = armor
  }

  get coins(): number {
    return this._coins
  }

  set coins(coins: number) {
    this._coins = coins
  }

  get diamond(): number {
    return this._diamond
  }

  set diamond(diamond: number) {
    this._diamond = diamond
  }

}

export class Player extends Character {
  constructor(
    name: string = '默认玩家',
    level: number = 1, 
    attack: number = 10, 
    armor: number = 5,
    coins: number = 0,
    diamond: number = 0
    ) {
    super(name, level, attack, armor, coins, diamond)
  }
}

