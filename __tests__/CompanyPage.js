import { mount } from '@vue/test-utils'
import CompanyPage from "Components/CompanyPage.vue"

describe('CompanyPage.vue Checklist', () => {
    const wrapper = mount(CompanyPage)
    it('Company Header must exist.', () => {
        expect(wrapper.findAll('.company__header').length).toEqual(1)
        expect(wrapper.find('.company__header').isEmpty()).toBe(false)
    })
    it('Company Location must exist.', () => {
        expect(wrapper.findAll('.company__infoAddress').length).toEqual(1)
        expect(wrapper.find('.company__infoAddress').isEmpty()).toBe(false)
    })
    it('Company Description must exist.', () => {
        expect(wrapper.findAll('.company__description').length).toEqual(1)
        expect(wrapper.find('.company__description').text().length).toBeGreaterThan(0)
    })
    it('Company Data must exist.', () => {
        expect(wrapper.findAll('.company__dataList').length).toEqual(4)
    })
})
