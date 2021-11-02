$(document).ready(() => {
    const nameInput = $('#nameInput');
    const chirpInput = $('#chirpInput');
    const chirpBtn = $('#chirpBtn');
    const timeline = $('#timeline');
    
    const deleteChirp = (id) => {
        $.ajax({
            url: `/api/chirps/${id}`,
            type: "DELETE"

        }).then((res) => getChirps())
    }

    const getChirps = () => {

        $.ajax({
            url: '/api/chirps',
            dataType: 'json',
        }).then(chirps => {
            chirps.map(chirp => {
                timeline.append($(`
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                         <h5 class="card-title">${chirp.name}</h5>
                         <p class="card-text">${chirp.chirp}</p>
                        <button class="btn btn-danger" onClick="${deleteChirp(chirp.id)}">X</button>
                    </div>
                </div>
                `))
            })
        })

    }

    const createChirps = () => {
        $.ajax({
            type: 'POST',
            url: '/api/chirps',
            data: {name: nameInput.val(), Chirp: chirpInput.val()},
            success: () => {alert("Chirp Posted!")},
            dataType: 'json'
        })
        // .then(res => getChirps())
      
    }


    chirpBtn.click(() => {
createChirps()
    })

    getChirps()

})