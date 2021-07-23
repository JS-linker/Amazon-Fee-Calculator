import { loadTierTable, loadWeightRule, loadFBATable, loadReferralTable, loadClosingFee } from '@src/service/amazon'
import { IProfitCalculator } from '@src/service/IProfitCalculator'
import { parseTier, parseWeight, parseFba, parseReferral, parseClosing } from '@src/service/parser-ca'

export class CaProfitCalculator implements IProfitCalculator {
  currentCountry: Country
  content: RuleContent
  constructor(country: Country) {
    this.content = {
      tier: 'Loading tier content for Canada',
      weight: 'Loading weight content for Canada',
      package: 'Loading package content for Canada',
      shipping: 'Loading shipping content for Canada',
      fba: 'Loading fba content for Canada',
      referral: 'Loading referral content for Canada',
      closing: 'Loading closing content for Canada',
    }
    this.currentCountry = country
  }
  async fetchRuleContent() {
    const tier = await loadTierTable(this.currentCountry.code)
    const weight = await loadWeightRule(this.currentCountry.code)

    const shipping = 'TODO'
    const fba = await loadFBATable(this.currentCountry.code)
    const referral = await loadReferralTable(this.currentCountry.code)
    const closing = await loadClosingFee(this.currentCountry.code)
    this.content = { tier, weight, package: null, shipping, fba, referral, closing }
  }
  parseRule() {
    const tierRules = parseTier(this.content.tier)
    return {}
  }
  calculateFbaFee(): number | Error {
    return 0
  }
  calculateReferralFee(): number | Error {
    return 0
  }
  calculateClosingFee(): number | Error {
    return 0
  }
}
