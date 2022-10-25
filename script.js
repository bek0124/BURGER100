const product = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    kkal: 350,
    amount: 0,
    get Sum() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH",
    price: 20500,
    kkal: 400,
    amount: 0,
    get Sum() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
  freshCombo: {
    name: "FRESH COMBO",
    price: 31900,
    kkal: 550,
    amount: 0,
    get Sum() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
};

const btns = document.querySelectorAll(".main__product-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    plusOrMinus(btn);
  });
});
function plusOrMinus(el) {
  let parent = el.closest(".main__product"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kkal = parent.querySelector(".main__product-kcall span"),
    attribute = el.getAttribute("data-symbol"),
    parentId = parent.getAttribute("id");

  if (attribute == "+") {
    product[parentId].amount++;
  } else if (attribute == "-" && product[parentId].amount > 0) {
    product[parentId].amount--;
  }
  num.innerHTML = product[parentId].amount;
  price.innerHTML = product[parentId].Sum;
  kkal.innerHTML = product[parentId].kkalSum;
}

const timerExtra = document.querySelector(".header__timer-extra");
window.onload = () => number();
function number() {
  timerExtra.innerHTML++;
  if (timerExtra.innerHTML < 50) {
    setTimeout(() => {
      number();
    }, 10);
  } else if (timerExtra.innerHTML < 100) {
    setTimeout(() => {
      number();
    }, 60);
  }
}

const mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewClose = document.querySelector(".view__close"),
  viewImg = document.querySelector(".view img");

for (let i = 0; i < mainProductInfo.length; i++) {
  mainProductInfo[i].addEventListener("dblclick",  function () {
    view.classList.add("active");
console.log(this);
    setImg(this);
  });
}
function setImg(btn) {
  let img = btn.querySelector(".main__product-img"),
    imgAtt = img.getAttribute("src");
  viewImg.setAttribute("src", imgAtt);
}
viewClose.onclick = () => view.classList.remove("active");

const receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptWindowOut = document.querySelector(".receipt__window-out"),
  addCart = document.querySelector(".addCart"),
  total = document.querySelector(".total");

addCart.addEventListener("click", () => {
  receipt.style = `display:flex;`;
  setTimeout(() => {
    receipt.style.opacity = "1";
    receiptWindow.style = "top:15%";
  }, 500);

  let objValue = Object.values(product).filter((item) => item.amount);
  let text = "";
  let totalSum = 0;
  let totalKkal = 0;

  for (let i = 0; i < objValue.length; i++) {
    text += `  <div class="product">
                <span>${i + 1}</span>
                <p class="product__name">${objValue[i].name}</p>
                <p class="product__amount">${objValue[i].amount} x ${
      objValue[i].price
    } = </p>
                <p class="product__price">${objValue[i].Sum}</p>
              </div>`;
    totalSum += objValue[i].Sum;
    totalKkal += objValue[i].kkalSum;
    total.innerHTML = `
    <p>Total Price: ${totalSum} sum </p>
    <p>Total Kkal: ${totalKkal} kkal</p>
    `;
  }
 
  receiptWindowOut.innerHTML = text;
});

const receiptWindowBtn  =document.querySelector('.receipt__window-btn');

receiptWindowBtn.onclick = ()=> window.location.reload()