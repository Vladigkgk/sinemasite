document.addEventListener('DOMContentLoaded', () => {
    const government = document.getElementById('GovernmentButton');
    government.addEventListener('click', () => {
        var favorite = JSON.parse(localStorage.getItem('favorite'));
        
        if (favorite == null) {
            console.log('create new')
            var favorites = new Array('Government');
            Array.from(favorites);
            localStorage.setItem('favorite', JSON.stringify(favorites));

        }
        else {
            console.log(favorite);
            let i = 0;
            Array.from(favorite).forEach((name) => {
                i++;
                if (name == 'Government') {
                    console.log('delete');
                    delete Array.from(favorite)[i];                   
                    localStorage.setItem('favorite', JSON.stringify(Array.from(favorite)));
                    return;
                }
              
            })
            Array.from(favorite).push('Government');
            console.log(favorite);
            localStorage.setItem('favorite', JSON.stringify(Array.from(favorite)));
            console.log('add');
        }
    })
})