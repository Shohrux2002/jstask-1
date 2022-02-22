let umidAkaniBuyi = prompt(`Umid akani boyini kiriting`);
let umidAkaniVazni = prompt(`Umid akani vazni kiriting`);
let shohruxningBuyi = prompt(`Shohruxning boyini kiriting`);
let shohruxningVazni = prompt(`Shohruxnin boyini kiriting`);
let shohruxA = shohruxningVazni / shohruxningBuyi ** 2;
let umidAkaA = umidAkaniVazni / umidAkaniBuyi ** 2;
let natija = umidAkaA > shohruxA;
console.log(natija);
