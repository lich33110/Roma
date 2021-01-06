{
function _createModal(options){
   const modal = document.createElement(tagName, 'div')
   modal.classList.add('vmodal')
   modal.insertAdjacentHTML( where, 'afterbegin', html`

   <div class="modal-overlay">
       <div class="modal-window">

           <div class="modal-heder">
               <span class="modal-title">модальное окно</span>
               <span class="modal-close">&times;</span>
           </div>

           <div class="modal-body">
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
               <p>Lorem ipsum dolor sit.</p>
           </div>

           <div class="modal-footer">
               <button>Ok</button>
               <button>Cancel</button>
           </div>

       </div>

   </div>
   

   `)
   return (modal) 
}

$.modal = function(options){
    const $modal = _createModal(options)
  return{
  open(){},    
  close(){},    
  destory(){},  
  }
}

