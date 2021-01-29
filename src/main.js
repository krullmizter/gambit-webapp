import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/index.scss'

// FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub }        from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faExternalLinkAlt }     from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;
library.add(faGithub, faExternalLinkAlt, faCopyright)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
}