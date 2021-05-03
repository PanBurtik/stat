const heroes = [
    {
       "name":"Texas State Capitol",
       "built":"Otevřeno: 21. dubna 1888",
       "biography":"Texas State Capitol je Capitol budova a sídlo vlády amerického státu Texas. Nachází se v centru Austinu v Texasu, struktura obsahuje kanceláře a komory texaské legislativy a guvernéra Texasu. Navržený v roce 1881 architektem Elijahem E. Myersem, byl postaven v letech 1882 až 1888 pod vedením stavebního inženýra Reubena Lindsay Walkera. V roce 1993 byla dokončena podzemní přístavba ve výši 75 milionů USD. Budova byla přidána do Národního registru historických míst v roce 1970 a v roce 1986 byla uznána jako národní kulturní památka.",
       "portraits":[
          "state-capitol.jpg",
          "state-capitol-2.jpg",
       ],
       "online":"https://en.wikipedia.org/wiki/Texas_State_Capitol"
    },
    {
        "name":"Fort Worth Stockyards",
        "built":"7.3.1850",
        "biography":"Fort Worth Stockyards je historická čtvrť, která se nachází ve městě Fort Worth v Texasu, severně od centrální obchodní čtvrti. Část 98 ha (40 ha) zahrnující velkou část okresu byla v roce 1976 uvedena v národním registru historických míst jako Fort Worth Stockyards Historic District. Je držitelem bývalého trhu s dobytkem, který fungoval pod různými vlastníky od roku 1866.",
        "portraits":[
           "tgm-01.png",
           "tgm-02.png",
           "tgm-03.jpg",
           "masaryk-capek.gif"
        ],
        "online":"https://en.wikipedia.org/wiki/Fort_Worth_Stockyards"
     },
     {
        "name":"The Alamo",
        "built":"5.10.1936",
        "biography":"Bitva o Alamo (23. února - 06.3.1836) byl klíčovou událostí v texaské revoluci . Po 13-ti denní obležení , mexičtí vojáci pod prezident General Antonio López de Santa Anna kultivoval Alamo mise u San Antonio de Bexar (současný San Antonio , Texas , USA), zabíjet většinu Texians a Tejanos dovnitř. Krutost Santa Anny během bitvy inspirovala mnoho Texianů a Tejanos ke vstupu do Texianské armády. Povzbuzení touhou po pomstě Texejci porazili mexickou armádu v bitvě u San Jacinto, 21. dubna 1836, ukončující povstání.",
        "portraits":[
           "havel-01.jpg",
           "havel-02.jpg",
           "havel-03.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/V%C3%A1clav_Havel"
     },
     {
        "name":"Quinta Mazatlan",
        "built":"28.3.1592",
        "biography":"World Birding centrum je oficiální titul daný kombinovaným devíti parků a chráněných krajinných oblastí Rio Grande Valley oblasti Texasu spravuje partnerství s Texas parků a divoké zvěře odboru, do Spojených států Fish and Wildlife Service, a místní komunity v v nichž sídlí parky. Uvedenou misí Světového centra pro ptáky je „chránit přirozené prostředí a současně zvýšit porozumění a uznání ptáků a volně žijících živočichů,“ s dalším důrazem na podporu místního hospodářského rozvoje prostřednictvím ekoturistiky.",
        "portraits":[
           "komensky-01.jpg",
           "komensky-02.jpg",
        ],
        "online":"https://cs.wikipedia.org/wiki/Jan_Amos_Komensk%C3%BD"
     },
     {
         "name":"Mission San Jose",
         "built":"přibližně 1370",
         "biography":"Mission San José je španělská mise umístěná v dnešním městě Fremont v Kalifornii. Byla založena 11. června 1797 františkánským řádem a byla čtrnáctou španělskou misí založenou v Kalifornii. Mise je jmenovkou misionářské čtvrti San José ve Fremontu, která byla samostatným městem zahrnutým do města, když byla založena v roce 1957. Mise vstoupila do dlouhého období postupného úpadku po mexickém sekularizačním aktu z roku 1833. Poté, co utrpěl úpadek, zanedbávání a zemětřesení, byla většina mise v troskách. Obnova v mezidobí rekonstruovala mnoho původních staveb. Starý kostel mise zůstane v použití jako kaple svatého Josefa katolické církve, farnosti na diecézi Oakland. V muzeu je také návštěvnické centrum, muzeum a prezentace, která vypráví o historii mise.",
         "portraits":[
            "hus-01.jpg",
            "hus-02.jpg",
            "hus-03.jpg"
         ],
         "online":"https://cs.wikipedia.org/wiki/Jan_Hus"
      },
      {
         "name":"Fort Worth Botanic Garden",
         "built":"8.9.1841",
         "biography":"Fort Worth Botanic Garden (110 akrů) je botanická zahrada se nachází na 3220 Botanic Garden Boulevard, Fort Worth v Texasu. Zahrada byla založena v roce 1934 a je nejstarší významnou botanickou zahradou v Texasu. Nachází se v samém srdci kulturní čtvrti. Nejoblíbenější oblasti jsou The Fuller, Rose a Japanese Gardens.",
         "portraits":[
            "dvorak-01.jpg",
            "dvorak-02.jpg",
         ],
         "online":"https://cs.wikipedia.org/wiki/Anton%C3%ADn_Dvo%C5%99%C3%A1k"
      },
      {
        "name":"National Ranching Heritage Center",
        "built":"9.1.1890",
        "biography":"National Ranchigem Heritage Center, je muzeum z farmaření historie, který se nachází na kampusu Texas Tech University v Lubbock, Texas. NRHC představuje téměř padesát autentických rančových budov z konce 18. až poloviny 20. století. Mezi tyto stavby patří železniční nádraží , usedlosti, stodola, kovárna, školní dům, větrné mlýny a další historické stavby. Jeden si prohlíží exponáty prostřednictvím vlastní prohlídky s průvodcem. Pro veřejnost je zdarma.",
        "portraits":[
           "capek-01.jpg",
           "masaryk-capek.gif",
           "capkove.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Karel_%C4%8Capek"
     },
 ];


$(function(){

/* Po kliknutí na některý z nadpisů h2 se střídavě zobrazí nebo zmizí blok (div) pod nadpisem */    
    $("h2").on("click", function(){
        /* $(this) = selektor, který ukazuje na právě aktivní objekt, v tomto případě tedy na jeden z nadpisů h2, na který bylo kliknuto */
        /* Následuje tzv. traverzování: */
        /* parents(".row") - hledá mezi nadřízenými prvky (rodiči) první, který obsahuje třídu .row */
        /* next() - ukáže na nejbližšího sourozence; v tomto případě další div */
        /* toggle() - metoda, která střídavě skrývá|odkrývá vybrané prvky */
        $(this).parents(".row").next().toggle(1000);
    });


heroes.forEach((hero)=>{
        $("#postavy .list-group").append(`<li style="border: solid white 1px; cursor: pointer;" class="list-group-item list-group-item-action list-group-item-dark">${hero.name}</li>`);
    });

    /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
    function fillPersonCard(person) {
        /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
        let hero = heroes.find(item => {return item.name === person});
        /* Metoda html() umožnuje vložení HTML kódu (odpovídá innerHTML() v JS) */
        $(".card-header").text(hero.built);
        /* Metoda text() umožnuje vložení "holého" textu (odpovídá innerText() v JS) */
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
        /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
        $(".gallery").empty();
        /* V cyklu budou přidány nové bloky s fotkami osobnosti */
        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-5"><a href="#"><img src="../img/${hero.portraits[i]}" alt=""style="padding-top:10px;" class="img-fluid"></a></div>`);        
        }
    }

    /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
    $("#postavy li:first").addClass('active');
    /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */
    fillPersonCard(heroes[0].name);

    /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
    $("#postavy li").on("click", function(){
        /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
        $("#postavy li").removeClass("active");
        /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
        $(this).addClass("active");        
        /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
        let person = $(this).text();
        /* Celý blok označený id portret se nejprve zaroluje a po dovršení této akce se zavolá tzv. callback funkce */
        $("#portret").slideUp(1000, function(){
            /* Součástí callback funkce je změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
            fillPersonCard(person);
        });
        /* Blok portret se během 1 sekundy vyroluje */
        $("#portret").slideDown(1000);
    });
})


$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

$(document).ready(function(){
    $("#flip-2").click(function(){
      $("#panel-2").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip-3").click(function(){
      $("#panel-3").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip-4").click(function(){
      $("#panel-4").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip-5").click(function(){
      $("#panel-5").slideToggle("slow");
    });
  });


  


  