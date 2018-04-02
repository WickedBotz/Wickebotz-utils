(() => {

   // SCOPE GLOBAL VARS
   var idCounter = 0;
   var scrollCounter = 0;
   var scrollInterval;
   var $ = document.querySelector.bind(document);
   var $$ = document.querySelectorAll.bind(document);






   /**
   * 
   * GET A COMPLETE INPUT TEMPLATE 
   * 
   *  name  - input name attribute
   *  id    - input id attribute
   *  value - input value
   *  label - Label for the input - NO PLACEHOLDERS
   * 
   */
   function inputLabelTemplate(name, id, valueName, valueQuant, label) {

      let div = document.createElement('div');

      div.innerHTML = `
         <div class="input-box">
            <div>
               
               <label class="custom-label" for=${id}>${label}</label>
               <div class="input-wrapper">
                  <input class="custom-input" name=${name} id=${id} value="${valueName}">
                  <div class="input-border"></div>
               </div>
   
               <label class="custom-label" for="${id}-quant">quantidade</label>
               <div class="input-wrapper">
                  <input type="number" min="1" class="custom-input" name="${name}-quant" id="${id}-quant" value="${valueQuant}">
                  <div class="input-border"></div>
               </div>
   
            </div>
         </div>
      `;

      return div;

   }








   /**
    * 
    * WINDOW ONLOAD FUNCTIONS
    * +
    */ 
   window.addEventListener('load', () => {



      // Add input bottom border events for all inputs actives
      addInputEvent();
      // Init last form saved
      initForm();




      // Add an event for addInput button to add new input for item name and item quantity to the form
      $('#addInput').addEventListener('click', () => {

         form.appendChild(inputLabelTemplate(`nomeItem${idCounter}`, `id${idCounter}`, '', '', 'Nome do item'));

         addInputEvent();

         clearInterval(scrollInterval);
         scrollCounter = 0;
         scrollInterval = setInterval(gradualScroll, 1);

         idCounter++;

      });



      
      // Save all form objects to localStorage - formObjects
      $('#saveInput').addEventListener('click', () => {

         let formObjects = getFormObjects();

         if (formObjects != "" && formObjects) {

            localStorage.setItem('formObjects', JSON.stringify(formObjects));
            alert('Dados salvos com sucesso!');

         } else {

            alert('Formulário vazio!');

         }

      });

      $('#clearInput').addEventListener('click', () => {

         $('#form').innerHTML = '<h1>Lista de itens do kit arduino<div class="header-border"></div></h1>';
         localStorage.setItem('formObjects', '');

      });

      
      // Add an event to modalClose button that add modal-hide class to hide the modal
      $$('#modalClose, #modal').forEach(el => {

         el.addEventListener('click', ev => {

            if (ev.target.classList.contains('modal-container') || ev.target.id == 'modalClose') {

               $('#modal').classList.add('modal-hide');

            }

         });

      });



      
      // Add an event to openModal button that remove modal-hide class to show the modal
      $('#openModal').addEventListener('click', () => {

         $('#modal').classList.remove('modal-hide');
         updateTableInfo();

      });



      
      // Add an event on tkit button to update result table info when total kit is changed
      $('#tkit').addEventListener('keyup', ev => {

         if (ev.target.value && ev.target.value > 0) {
            updateTableInfo();
         }

      });


      

   });



      
   // Add input event for input buttom border to all inputs
   function addInputEvent() {

      $$('input').forEach(inp => {

         inp.addEventListener('focus', () => {
            inp.nextElementSibling.classList.add('input-border-focus');
         });

         inp.addEventListener('blur', () => {
            inp.nextElementSibling.classList.remove('input-border-focus');
         });

      });

   }



      
   // Do a gradual scroll
   function gradualScroll() {

      if (scrollCounter > 200) {
         scrollCounter = 0;
         clearInterval(scrollInterval);
      } else {
         window.scrollBy(0, 2);
         scrollCounter++;
      }

   }


      

   // Update table info
   function updateTableInfo() {

      let tbody = $('#tbody');
      let formObjects = getFormObjects();

      let totalKit = Number($('#tkit').value);

      tbody.innerHTML = formObjects.map(obj => `
         <tr>
            <td>${obj.name}</td>
            <td>${obj.quant}</td>
            <td>${Number(obj.quant / totalKit).toFixed(2)}</td>
            <td>${Math.trunc(obj.quant / totalKit) || 1}</td>
         </tr>
      `).join('');

   }



      
   // Get all inputs on the form and get all your values like name and quantity
   function getFormObjects() {

      let formObjects = [];

      $$('#form .input-box').forEach(el => {

         formObjects.push({
            name: el.querySelectorAll('input')[0].value,
            quant: el.querySelectorAll('input')[1].value
         });

      });

      return formObjects;

   }



   // Init form if is something saved on localStorage
   function initForm() {

      let formObjects = localStorage.getItem('formObjects');

      if (formObjects != "" && formObjects) {

         formObjects = JSON.parse(formObjects);

         formObjects.forEach(obj => {
            form.appendChild(inputLabelTemplate(`${obj.name}${idCounter}`, `id${idCounter}`, obj.name, obj.quant, 'Nome do item'));
            idCounter++;
         });

      }

   }



      
})();