import Vue from 'vue'
import ConnectRouting from '@/components/ConnectRouting'

describe('ConnectRouting.vue', () => {
  it(`should render connect and render`, () => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(ConnectRouting)

    const comp = new Constructor().$mount()

    Vue.nextTick(() => {
      expect(comp.$el.textContent).to.equal('New Text')
      // Since we're doing this asynchronously, we need to call done() to tell Mocha that we've finished the test.
      // done()
    })
  })
})
