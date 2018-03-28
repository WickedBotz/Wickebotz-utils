(() => {

   // SCOPE GLOBAL VARS
   var idCounter = 0;
   var scrollCounter = 0;
   var scrollInterval;

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
   function inputLabelTemplate(name, id, value, label) {

      let div = document.createElement('div');

      div.innerHTML = `
         <div class="input-box">
            <div>
               
               <label class="custom-label" for=${id}>${label}</label>
               <div class="input-wrapper">
                  <input class="custom-input" name=${name} id=${id} value=${value}>
                  <div class="input-border"></div>
               </div>
   
               <label class="custom-label" for="${id}-quant">quantidade</label>
               <div class="input-wrapper">
                  <input type="number" class="custom-input" name="${name}-quant" id="${id}-quant">
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
    * 
    */ 
   window.onload = () => {

      // Add input bottom border events for all inputs actives
      addInputEvent();

      // Add an event for addInput button to add new input for item name and item quantity to the form
      document.querySelector('#addInput').onclick = () => {

         form.appendChild(inputLabelTemplate(`nomeItem${idCounter}`, `id${idCounter}`, '', 'Nome do item'));

         addInputEvent();

         clearInterval(scrollInterval);
         scrollCounter = 0;
         scrollInterval = setInterval(gradualScroll, 1);

         idCounter++;

      };

      // Add an event to modalClose button that add modal-hide class to hide the modal
      document.querySelectorAll('#modalClose, #modal').forEach(el => {

         el.addEventListener('click', ev => {

            if (ev.target.classList.contains('modal-container') || ev.target.id == 'modalClose') {

               document.querySelector('#modal').classList.add('modal-hide');

            }

         });

      });

      // Add an event to openModal button that remove modal-hide class to show the modal
      document.querySelector('#openModal').addEventListener('click', () => {

         document.querySelector('#modal').classList.remove('modal-hide');
         updateTableInfo();

      });

      // Add an event on tkit button to update result table info when total kit is changed
      document.querySelector('#tkit').addEventListener('keyup', ev => {

         if (ev.target.value && ev.target.value > 0) {
            updateTableInfo();
         }

      });

   };

   // Add input event for input buttom border to all inputs
   function addInputEvent() {

      document.querySelectorAll('input').forEach(inp => {

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

      let tbody = document.querySelector('#tbody');
      let formObjects = getFormObjects();

      let totalKit = Number(document.querySelector('#tkit').value);

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

      document.querySelectorAll('#form .input-box').forEach(el => {

         formObjects.push({
            name: el.querySelectorAll('input')[0].value,
            quant: el.querySelectorAll('input')[1].value
         });

      });

      return formObjects;

   }

})();