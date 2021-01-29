<template>
  <div class="layout">
    <div class="content">
      <slot/>
    </div>
    <footer class="footer">
      <p>Samuel Granvik</p> 

      <div class="footer-links">
        <p><font-awesome :icon="['fas', 'copyright']"/></p>
        <a href="https://github.com/krullmizter/gambit-app" target="_blank"><font-awesome :icon="['fab', 'github']"/></a>
      </div>
    </footer>
  </div>
</template>