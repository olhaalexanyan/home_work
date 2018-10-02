function CreditCard ( params ) {
  var owner = params? ( params.name? params.name : "Иван Иванов") : "Иван Иванов"
  this.cardNum = params.num
  var pinCode = prompt ('Введите пин-код')

  var cash = 0
  this.putCash = function (sum) {
    cash += sum
  }
  this.testPin = function (pin){
    return pin===pinCode ? cash : null
  }
  this.getCash = function (sum, pin) {
    if (pin===pinCode)  cash -= sum
  }

 }
function Bankomat () {
   var cash = 1000000000
   this.getCardCash = function ( card/*, sum, pin */) {
      var cardCash = card.testPin(prompt('Введите пин-код'))
      if (typeof cardCash ==='number') {
        var sum = prompt('Введите сумму')
        if (sum <= cardCash) {
          if ( cash >= sum ) {
            card.getCash(sum, prompt('Введите пин-код'))
            console.log(`Получите деньги : ${sum}`)
            cash -=sum
          }
         else console.log ('В банкомате нет денег')
        }
        else console.log ("Недостаточно денег на карте")
    }
    else console.log ("Неверный пин-код")
   }
}
undefined
var card = new CreditCard ({name:"Name",num:"987654321098"})
undefined
var bank= new Bankomat()
undefined
bank.getCardCash(card)
VM1470:27 Получите деньги :
undefined
