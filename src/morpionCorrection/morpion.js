(function () {
    // Fonctions utilitaires

    function queryOne(selector) {
        return document.querySelector(selector);
    }

    function queryAll(selector) {
        return document.querySelectorAll(selector);
    }

    function forEach(array, callback) {
        return Array.prototype.forEach.call(array, callback);
    }

    function hasClass(element, className) {
        return element.classList.contains(className);
    }

    // Le jeu

    function init() {
        queryOne("#bouton-commencer").addEventListener("click", gererBoutonCommencer);
        queryOne("#bouton-continuer").addEventListener("click", gererBoutonContinuer);
        queryOne("#bouton-fin").addEventListener("click", gererBoutonFin);
        queryOne("#ecran-plateau > table").addEventListener("click", gererTour);
        afficherEcran("ecran-titre");
    }

    function afficherEcran(nom) {
        queryOne(".ecran:not(.is-hidden)").classList.add("is-hidden");
        queryOne("#" + nom).classList.remove("is-hidden");
    }

    function recupererNoms() {
        noms[0] = queryOne("#champ-joueur1").value;
        noms[1] = queryOne("#champ-joueur2").value;
    }

    function miseAJourScores() {
        queryOne("#nom-joueur1").innerHTML = noms[0];
        queryOne("#nom-joueur2").innerHTML = noms[1];
        queryOne("#score-joueur1").innerHTML = scores[0];
        queryOne("#score-joueur2").innerHTML = scores[1];
    }

    function gererBoutonCommencer() {
        recupererNoms();
        miseAJourScores();
        afficherEcran("ecran-plateau");
    }

    function gererTour(event) {
        if(hasClass(event.target, "joueur1") || hasClass(event.target, "joueur2"))
        {
            return;
        }

        event.target.classList.add(joueur === 0 ? "joueur1" : "joueur2");

        if(victoire())
        {
            ++scores[joueur];
            afficherMessage("message-victoire", noms[joueur]);
            afficherEcran("ecran-fin");
        }
        else if(plateauPlein())
        {
            afficherMessage("message-egalite");
            afficherEcran("ecran-fin");
        }

        joueur = (joueur + 1) % 2;
    }

    function victoire() {
        var c = joueur === 0 ? "joueur1" : "joueur2";

        return (hasClass(queryOne("#c1"), c) && hasClass(queryOne("#c2"), c) && hasClass(queryOne("#c3"), c))
            || (hasClass(queryOne("#c4"), c) && hasClass(queryOne("#c5"), c) && hasClass(queryOne("#c6"), c))
            || (hasClass(queryOne("#c7"), c) && hasClass(queryOne("#c8"), c) && hasClass(queryOne("#c9"), c))
            || (hasClass(queryOne("#c1"), c) && hasClass(queryOne("#c4"), c) && hasClass(queryOne("#c7"), c))
            || (hasClass(queryOne("#c2"), c) && hasClass(queryOne("#c5"), c) && hasClass(queryOne("#c8"), c))
            || (hasClass(queryOne("#c3"), c) && hasClass(queryOne("#c6"), c) && hasClass(queryOne("#c9"), c))
            || (hasClass(queryOne("#c1"), c) && hasClass(queryOne("#c5"), c) && hasClass(queryOne("#c9"), c))
            || (hasClass(queryOne("#c3"), c) && hasClass(queryOne("#c5"), c) && hasClass(queryOne("#c7"), c));
    }

    function afficherMessage(type, nom) {
        forEach(queryAll(".message"), function (message) {
            message.classList.add("is-hidden");
        });

        queryOne("#" + type).classList.remove("is-hidden");

        queryOne("#nom-vainqueur").innerHTML = nom;
    }

    function plateauPlein() {
        return queryAll("td.joueur1, td.joueur2").length === 9;
    }

    function razPlateau() {
        forEach(queryAll("td"), function (casePlateau) {
            casePlateau.classList.remove("joueur1");
            casePlateau.classList.remove("joueur2");
        });
    }

    function gererBoutonContinuer() {
        razPlateau();
        miseAJourScores();
        afficherEcran("ecran-plateau");
    }

    function gererBoutonFin() {
        razPlateau();
        scores = [0, 0];
        afficherEcran("ecran-titre");
    }

    var noms = ["", ""]; // Noms des joueurs
    var scores = [0, 0]; // Scores des joueurs
    var joueur = 0;      // Le joueur 1 commence la partie
    init();
})();
