// mount function to mount vue components
const mountFunction = options => {
    return mount(Members, {
        localVue,
        vuetify,
      ...options,
    })
  }
  
// shallowMount function to ahallowmount vue components
const shallowMountFunction = options => {
return mount(Members, {
    ...options,
})
}

