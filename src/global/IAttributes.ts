
/**
 * @description 基本信息接口
 * @param {string} name - 名称
 * @param {number} price - 价格
 */
export interface IBasic {
  name: string
  price: number
}
/**
 * @description 武器
 * @param {number} 攻击 - the attack value of the weapon.
 */
export interface IWeapon {
  attack: number
}


/**
 @description 防御
 @param 防御 - The defense point.
 */
 export interface IArmor {
  defense: number
}
