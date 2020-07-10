<template>
<div @click="() => {$emit('click')}" :class="['arrow-svg', rotationClass]">
  <svg width="20px" height="20px" viewBox="0 0 50 80" xml:space="preserve">
    <polyline fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="
	45.63,75.8 0.375,38.087 45.63,0.375 "/>
  </svg>  
</div>

</template>

<script>
export default {
  props: {
    rotateRight: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    rotationClass() {
      return this.rotateRight ? "right" : ""
    }
  }
}
</script>

<style lang="scss">

.arrow-svg {
    cursor: pointer;
    width: 20px;
    height: 20px;

  &.right {
    transform: rotate(180deg);
  }
  svg {
    
    polyline {
      stroke: #025296;
      transition: all 250ms ease-in-out;
    }
  }

  &:hover , &:focus {
    polyline {
      stroke-width: 10;
    }
  }

  &:active {
    polyline {
      stroke-width: 12;
      transition: all 100ms ease-in-out;
    }
  }
}
</style>