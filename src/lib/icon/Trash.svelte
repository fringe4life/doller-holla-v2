<script lang="ts">
  type Props = {
    width?: number
    height?: number
  }
  let { width = 24, height = 24 }: Props = $props()
</script>

<svg {width} {height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M5.37817 19.1055C5.37817 20.1504 6.20062 21.0002 7.21195 21.0002H16.3808C17.3922 21.0002 18.2146 20.1504 18.2146 19.1055V7.73703H5.37817V19.1055ZM7.21195 9.63177H16.3808L16.3817 19.1055H7.21195V9.63177Z"
  />
  <path d="M14.5471 4.89492V3.00018H9.04576V4.89492H3.54443V6.78966H20.0484V4.89492H14.5471Z" />
  <path d="M10.8796 11.5265H9.04578V17.2107H10.8796V11.5265Z" />
  <path d="M14.547 11.5265H12.7133V17.2107H14.547V11.5265Z" />
</svg>
