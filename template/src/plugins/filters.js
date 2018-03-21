import fecha from '@/utils/date'

export function formatDate(value) {
  return fecha.format(...arguments)
}

const filters = {
  formatDate,
}

function install(Vue) {
  if (install.installed) return;
  install.installed = true

  for (var i in filters) {
    Vue.filter(i, filters[i])
  }
}

export default {
  install
}
