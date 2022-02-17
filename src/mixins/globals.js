export default {
  methods: {
    scroll (x) {
      /*console.log(document.getElementById(x))
      const element = document.getElementById(x).scrollIntoView({ behavior: "smooth" })
      console.log(element)*/

      const targetOffset = document.getElementById(x).offsetTop;
      window.scrollTo(0, targetOffset)
    },
  }
}