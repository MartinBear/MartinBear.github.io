//Array med maträtter samt url och true/false(objekt)
var foodz = [
    {name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"},
    {name: "Vegansk inlagd sill", veg: true, url: "http://www.ica.se/recept/vegansk-inlagd-sill-721246/"},
    {name: "Okonomiyaki Osaka-style", veg: false, url: "http://www.ica.se/recept/okonomiyaki-osaka-style-721354/"},
    {name: "Halstrad tonfisk med avokadohummus", veg: false, url: "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"},
    {name: "Ärtsoppa", veg: true, url: "http://www.tasteline.com/recept/artsoppa/"},
    {name: "Krämiga köttfärsburritos med tomat- och avokadosallad", veg: false, url: "http://www.tasteline.com/recept/kramiga-kottfarsburritos-med-tomat-och-avokadosallad/"},
    {name: "Saffransfisk med bulgur och rårivna morötter", veg: false, url: "http://www.tasteline.com/recept/saffransfisk-med-bulgur-och-rarivna-morotter-2/"},
    {name: "Grönkålssoppa med grönkålschips", veg: true, url: "http://mittkok.expressen.se/recept/gronkalssoppa-med-gronkalschips/"},
    {name: "Bolognese på högrev", veg: false, url: "http://www.arla.se/recept/bolognese-pa-hogrev"},
    {name: "Biffkebab", veg: false, url: "http://www.arla.se/recept/biffkebab"},
    {name: "Blomkålscurry", veg: true, url: "https://www.alpro.com/se/recept/blomkalscurry"},
    {name: "ABC-Sallad", veg: false, url:"http://www.kostdoktorn.se/recept/abc-sallad"},
    {name: "Bakad rotselleri med spenat och gorgonzola", veg: true, url:"http://www.kostdoktorn.se/recept/bakad-rotselleri-med-spenat-och-gorgonzola"},
    {name: "Köttfärslåda med brysselkål", veg: false, url:"http://www.kostdoktorn.se/recept/kottfarslada-med-brysselkal"},
    {name: "Paprika- och ostfylld kyclingfilé", veg: false, url:"http://www.kostdoktorn.se/recept/paprika-och-ostfylld-kycklingfile"},
    {name: "Sesamlax med currykål och limeaioli", veg: false, url:"http://www.kostdoktorn.se/recept/sesamlax-med-currykal-och-limeaioli"},
    {name: "Tandorilax med gurksås", veg: false, url:"http://www.kostdoktorn.se/recept/tandoorilax-med-gurksas"},
    {name: "LCHF pasta med ädelostsås", veg: true, url:"http://www.kostdoktorn.se/recept/lchf-pasta-med-adelostsas"},
    {name: "Vitkålsgratäng", veg: true, url:"http://www.kostdoktorn.se/recept/vitkalsgratang"},
    {name: "Blomkålsris med lime och chili", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1490"},
    {name: "Raggmunk av rättika", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1802"},
    {name: "Ängamat", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1734"},
    {name: "Blomkålscouscous med aijvar", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1609"}
  ];
//Här startar funktionen leChef som kallas på när användaren trycker på knappen
// WhatToEat är en variabel som bestämmer vilken funktion som ska köras via en if/else 
//beroende på om checkboxen är true eller false så går functionen vidare till nästa steg vilket är vegomat eller inte
function leChef() {
    whatToEat = document.getElementById("vegcheck").checked;
    if (whatToEat.checked === true){
        vegchecked();
    }
    else{
        allfood();
    }
//funktion för vegomat när checkboxen är "checked"
//filter
//variabler
//koppla <a> och <p> taggarna ihop med scriptet
function vegchecked(){
    var vegos =  foodz.filter(function(whatToEat) {
    return whatToEat.veg === true;});
    //veg = ture|false? return som true om checkboxen är markerad
    //math.floor + random för en slumpad länk av alla recept som är true
    var vegoFood = vegos[Math.floor(vegos.length * Math.random())];
    var vegoName = vegoFood.name;
    var vegourl = vegoFood.url;
    //Här vill jag att "dinner" ska visa maträttens namn
    //"link" ska visa receptets länkar
    //använd .innerHTM för att koppla till indexsidan
    //href viktigt för länk! GLÖM EJ!
    document.getElementById("dinner").innerHTML = vegoName;
    document.getElementById("link").innerHTML = vegourl;
    document.getElementById("link").innerHTML = "Hur fan lagar jag det då? Tryck här!";
    document.getElementById("link").href = vegourl;
    document.getElementById("link").target = "_blank";
}
// allfood länkar alla typer av recept till den som inte är kräsen
//fungerar på samma sätt som funktionen ovanför bara att den inte går på true/false när det kommer till checkboxen
function allfood(){ 
    var anyFood = foodz[Math.floor(foodz.length * Math.random())];
    var dinner = anyFood.name;
    var dinnerUrl = anyFood.url;
    //math.floor & random ur HELA arraeyn
    //inget filter behövs här!
    document.getElementById("dinner").innerHTML = dinner;
    document.getElementById("link").innerHTML = dinnerUrl;
    document.getElementById("link").innerHTML = "Hur fan lagar jag det då? Tryck här!";
    document.getElementById("link").href = dinnerUrl;
    document.getElementById("link").target = "_blank";
    }
}
