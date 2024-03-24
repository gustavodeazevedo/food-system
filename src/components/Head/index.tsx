interface HeadProps{
    title: string
    description?: string
}

export function Head ({title, description = ''}: HeadProps ){
    document.title = `Food Commerce | ${title}`                                                 //*mudando o Head do index.html 
    document.querySelector('[name=description]')?.setAttribute('content', description)

    return null
}