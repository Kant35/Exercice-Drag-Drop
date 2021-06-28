window.onload = function(){ // Tout doit être chargé sur la page avant que la fonction se lance.
    let cube = document.getElementById('grabCube'); // Récupération du CUBE

    /**
     * Permet de modifier le style du cube et donc de le bouger sur la page.
     */
    function move(ev){
        cube.style.left = (ev.pageX-(cube.offsetWidth/2))+'px'; 
        /*
        On va modifier ici la position Left via => 'cube.style.left'. 
        On prend la position X de la souris => 'ev.pageX'.
        On prend la largeur du Cube 'cube.offsetwidth' que l'on divise par 2 pour replacer au milieu du curseur
        On concatène avec le 'px' pour la compréhension du CSS
        */
        cube.style.top = (ev.pageY-(cube.offsetHeight/2))+'px';
        /*
        On va modifier ici la position Top via => 'cube.style.top'. 
        On prend la position Y de la souris => 'ev.pageY'.
        On prend la hauteur du Cube 'cube.offsetwidth' que l'on divise par 2 pour replacer au milieu du curseur
        On concatène avec le 'px' pour la compréhension du CSS
        */
    }

    cube.addEventListener('mousedown', function(event){ 
        document.addEventListener('mousemove', move)// lance une écoute sur la position de la souris quand tu la bouge au moment du click.
    })

    cube.addEventListener('mouseup', function(event){
        document.removeEventListener('mousemove', move)// arrete l'écoute de la position de la souris quand le click s'arrete.
    })

}