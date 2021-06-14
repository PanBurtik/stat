/* jQuery skript */
$(function(){
    let mesta = [];
    fetch('../../json/cities.json')
    .then(response => { return response.json() })
    .then(json => { mesta = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    let capital = [];
    fetch('../../json/capital.json')
    .then(response => { return response.json() })
    .then(json => { capital = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });
    /* Skrytí všech SVG objektů circle - v tomto případě označujících na mapě památky capital */
    $("#map-tx rect").hide();
    /* Ovládací přepínače, které zajišťují zobrazení nebo skrytí SVG objektů na mapě */
    /* Při změně stavu přepínače se skryjí / zobrazí obdélníky symbolizující krajská města */
    $("#mesta").on('change', function(){
        $("#map-tx ellipse").toggle(500);
    });

    /* Při změně stavu přepínače se skryjí / zobrazí kruhy symbolizující památky capital */
    $("#capital").on('change', function(){
        $("#map-tx rect").toggle(500);
    });

    /* Pomocná proměnná pro uložení původního nastavení stylu výplně (fill) SVG objektu path */   
    let puvodni = '';  

    /* Při přejetí kurzoru myši nad některým SVG objektem typu path (nepravidelný uzavřený mnohoúhelník) se provede: */
    $("#map-tx path").on('mouseover', function(){
        /* Pouze v situaci, kdy přepínač s id kraje je ve stavu "checked" - zaškrtnuto */
        if ($("#okresy:checked").val()) {
            /* Do pomocné proměnné puvodni se uloží barva výplně objektu path */
            puvodni = $(this).css('fill');
            /* Právně aktivní objekt se vyplní červenou barvou */
            $(this).css('fill','red');
            /* Nastaví se pro danou oblast popover (grafické vyskakovací okénko) - součást externí knihovny bootstrap4-toggle */
            $(this).popover({
                /* definice spouštěcí akce zobrazení okénka - při kliknutí */
                'trigger':'click',
                /* umístění okénka vůči objektu */
                'placement': 'right',
                /* odsazení okénka vůči pravé hraně objektu - v ose y a x */
                'offset': '10%, -10',
                /* do titulku okénka vloží text, který je pro daný SVG prvek obsažen v tagu title */
                'title': $(this).find('title').text()
            });            
        }
    });
    
    /* Když myš opustí objekt path: */
    $("#map-tx path").on('mouseout', function(){
        /* dojde ke změně výplně na původní hodnotu */
        $(this).css('fill', puvodni);
    });


    /* Při kliknutí na některý z SVG objektů typu rect (obdélníky - tj. krajská města): */
    $("#map-tx ellipse").on('click', function(){
        /* do proměnné id se uloží identifikátor daného objektu - města */
        let id = $(this).attr('id');
        /* všechny objekty rect a circle se nejprve vyplní výchozími barvami */
        $("#map-tx ellipse").css('fill','red');
        $("#map-tx rect").css('fill','orange');
        /* pouze právě aktivní objekt bude nastaven na žlutou barvu */
        $(this).css('fill','blue');
        /* s využitím metody find se do proměnné mesto vyhledá v JSON poli mesta objekt podle odpovídajícího id */
        let mesto = mesta.find(item => {return item.id == id});
        /* během efektu zprůhlednění (1 s.) se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném městě  */
        $('#info').fadeOut(1000, function() {$('#info').html(`<div class="col-12"><h2 style="border-top: black solid 3px; color:orange" >${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obv.</small></h2></div><div class="col-2"><img src="img/${mesto.photo}" class="img-fluid"></div><div style="color: yellow" class="col-10">${mesto.text}</div>`)});
        $('#info').fadeIn(1000);
    });  
    
    /* Při kliknutí na některý z SVG objektů typu circle (kruhy - tj. památky capital) se obdobným způsobem zobrazí 
       podrobnější informace o vybrané památce */
    $("#map-tx rect").on('click', function(){
        let id = $(this).attr('id');
        $("#map-tx ellipse").css('fill','black');
        $(this).css('fill','yellow');
        let hlavni = capital.find(item => {return item.id == id});
        $('#info').slideUp(1000, function(){$('#info').html(`<div class="col-12"><h2 style="border: red solid 2px; color: orange">${hlavni.capital} <small class="text-small">(od roku ${hlavni.peoples})</small></h2></div><div class="col-4"><img src="img/${hlavni.photo}" class="img-fluid"></div><div style="color: yellow" class="col-10">${hlavni.text}</div>`)});
        $('#info').slideDown(1000);
    });    

})
