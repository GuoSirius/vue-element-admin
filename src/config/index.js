const merge = require('lodash/merge')

const dswConfig = process.env.DSW_CONFIG || process.env.NODE_ENV

// 加载 默认配置
const defaultConfig = require('./development')

// 加载 指定配置
let config = {}

try {
  config = require(`./${dswConfig}.js`)
} catch {
  // TODO 加载配置失败
  config = {}
}

// 加载 外部全局配置
const GS_CONFIG = '_dsw-config'
const DSW_CONFIG = config.NAMESPACE || GS_CONFIG

// const configSymbol = window.Symbol.for(DSW_CONFIG)

const configSymbol = DSW_CONFIG

let globalConfig = window[configSymbol] || window[GS_CONFIG] || {}

// 追加默认环境配置
globalConfig = merge(window.Object.create(null), defaultConfig, config, globalConfig)
globalConfig.IS_PRODUCTION = process.env.NODE_ENV === 'production'
globalConfig.IS_DEVELOPMENT = !globalConfig.IS_PRODUCTION || globalConfig.IS_DEBUG

// 合并 配置
window['_gs-config'] = globalConfig
window[configSymbol] = globalConfig

module.exports = globalConfig
