// initial data

const calculadora = criaCalculadora()

calculadora.inicia()

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    clear: document.querySelector('.btn-clear'),

    inicia: function () {
      this.cliqueiBotoes()
      this.pressEnter()
    },

    pressEnter: function () {
      document.addEventListener('keypress', e => {
        if (e.code === 'Enter') {
          this.realizaConta()
        }
        return
      })
    },

    cliqueiBotoes: function () {
      document.addEventListener('click', e => {
        const el = e.target
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
          this.display.focus()
        } else if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
          this.display.focus()
        } else if (el.classList.contains('btn-del')) {
          this.deleteOne()
          this.display.focus()
        } else if (el.classList.contains('btn-eq')) {
          this.realizaConta()
          this.display.focus()
        }
      })
    },

    btnParaDisplay: function (valor) {
      this.display.value += valor
    },

    clearDisplay: function () {
      this.display.value = ''
      this.display.focus()
    },

    deleteOne: function () {
      this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta: function () {
      let conta = this.display.value

      try {
        conta = eval(conta)

        if (!conta) {
          alert('Conta inválida')
        }

        this.display.value = conta

        this.display.focus()
      } catch (e) {
        alert('Conta inválida')
        return
      }
    }
  }
}
