const root = document.getElementById('root')

const days = [
    {
        title: 'Uso del width: min(x, x) para el contenedor',
        description: 'Es un simple contenedor pero usando la función min() de CSS puede ser muy útil.'
    },
    {
        title: 'Galería de imágenes',
        description: 'Galería de imágenes sencilla sin usar flex ni css grid.'
    },
    {
        title: 'Header con texto e imágen responsiva',
        description: 'En este header utilizo la función de css clamp() para adaptar los textos.'
    },
]

days.map(({ title, description }, index ) => {

    let day = index + 1

    root.innerHTML += `
         <div class="project-card">
            <div class="card-title">
                <a class="title" href="/day/day0${day}">${title}</a>
                <span class="text-white day-challenge">${day}</span>
            </div>
            <p class="card-description">${description}</p>
        </div>
    `
})


