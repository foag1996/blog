import React from 'react'
import prueba1 from '../img/prueba1.png';

export default function Modal() {
    return (

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                    <div class="modal-header">

                        <h2 className="text-dark"><strong>Titulo</strong></h2>
                    
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body text-dark" style={{ textAlign:"justify"}}>

                        <div className='container-fluid'>
                            <img className='img-fluid' src={prueba1} alt="prueba" style={{ display: "block", margin: "auto" }} />
                        </div>  

                        <br/>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book</p>


                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <p class="card-text"><small class="text-muted">22 de junio, 2021</small></p>


                    </div>

                    
                    <div class="modal-footer">
                        
                        <button type="button" class="btn btnm" data-bs-dismiss="modal"><strong>Cerrar</strong></button>
                        
                    </div>
                    </div>
                </div>
        </div>
        
    )
}
