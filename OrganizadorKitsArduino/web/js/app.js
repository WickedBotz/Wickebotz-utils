(() => {

   var idCounter = 0;
   var scrollCounter = 0;
   var scrollInterval;

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

   window.onload = () => {

      document.querySelector('#addInput').onclick = () => {

         form.appendChild(inputLabelTemplate(`nomeItem${idCounter}`, `id${idCounter}`, '', 'Nome do item'));

         addInputEvent();

         clearInterval(scrollInterval);
         scrollCounter = 0;
         scrollInterval = setInterval(gradualScroll, 1);

         idCounter++;

      };

      document.querySelectorAll('#modalClose, #modal').forEach(el => {

         el.addEventListener('click', ev => {

            if (ev.target.classList.contains('modal-container') || ev.target.id == 'modalClose') {

               document.querySelector('#modal').classList.add('modal-hide');
               
            }

         });

      });

      document.querySelector('#openModal').addEventListener('click', () => {

         document.querySelector('#modal').classList.remove('modal-hide');

      });

   };

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

   function gradualScroll() {

      if (scrollCounter > 200) {
         scrollCounter = 0;
         clearInterval(scrollInterval);
      } else {
         window.scrollBy(0, 2);
         scrollCounter++;
      }

   }

})();