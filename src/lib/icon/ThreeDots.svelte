<script lang="ts">
  type Props = {
    width?: number
    height?: number
  }
  let { width = 24, height = 24 }: Props = $props()
</script>

<svg {width} {height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="12" r="2" />
  <circle cx="12" cy="12" r="2" />
  <circle cx="19" cy="12" r="2" />
</svg>
