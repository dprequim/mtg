export default {
  methods: {
    scroll (x) {
      const element = document.getElementById(x).scrollIntoView({ behavior: "smooth" })
    },
  }
}