import React from 'react'
import Modal from './Modal'

export default function Blog() {


    const [blog, setBlog] = React.useState([])

    React.useEffect(()=>{
        console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch ('http://localhost:1337/blogs')
        const post = await data.json()
        console.log(post)
        setBlog(post)

        console.log("obtenerDatos");

    }

    return (

        <div className="card text-light">

            <div className="card-body ">

                <h4 className="card-title">Titulo</h4>

                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book</p>

                <p class="card-text"><small class="text-muted">22 de junio, 2021</small></p>

                <a href="#" className="btn btn-outline" data-bs-toggle="modal" data-bs-target="#exampleModal"><strong>Leer más</strong></a>


            </div>
            
            <Modal/>

        </div>
        
    )
}
