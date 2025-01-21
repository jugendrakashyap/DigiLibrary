import React from 'react'
import '../../css/reader.css'

function Reader() {
  const pages = document.getElementsByClassName('page');
  const fn = () => {
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.zIndex = pages.length - i;
    }
  }

  window.addEventListener('DOMContentLoaded', fn);

  let n = 0;
  function nextPage() {
    pages[n].style.transform = 'rotateY(-180deg)';
    pages[n].style.transition = 'transform 2s';
    pages[n].style.transformOrigin = 'left';
    // pages[n].style.zIndex = pages[n].style.zIndex - 1;
    n++;
  }

  function prevPage() {
    pages[n-1].style.transform = 'rotateY(180deg)';
    pages[n-1].style.transition = 'transform 2s';
    pages[n-1].style.transformOrigin = 'left';
    n--;
  }
  return (
    <div className='pages'>
      <div className='page'>
        <p>page1 ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nobis vero consectetur magnam corporis rerum numquam sapiente, ullam sunt repellendus? Officia at nemo rerum, quis hic libero quia laudantium.</p><br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, incidunt alias enim corporis explicabo, modi quisquam magnam est commodi quod earum aspernatur quos rerum quidem quas eveniet nulla fuga non.</p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla rem dicta sed unde et. Laboriosam voluptates consectetur, laborum ex rerum iste, cum beatae ea atque quia autem totam fuga.</p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. id tenetur eveniet fugit, delectus quae explicabo eos odio natus beatae nesciunt exercitationem ducimus optio minus tempora pariatur.</p><br />
      </div>
      <div className='page'>
        <p>page2 ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem provident sint quasi eveniet expedita error nesciunt sapiente nihil, nostrum, laudantium atque? Tenetur laboriosam amet neque? Numquam pariatur neque eius.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores sapiente, aliquid magnam nostrum facilis consequuntur exercitationem ad culpa laborum perspiciatis at necessitatibus, maxime facere aspernatur pariatur doloribus sit fuga!</p><br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat incidunt cum minus odio natus modi quas ut alias culpa ullam, quasi consequuntur obcaecati, neque amet id provident. Quae, deserunt!</p><br />
      </div>
      <div className='page'>
        <p>page3 ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad nobis vero consectetur magnam corporis rerum numquam sapiente, ullam sunt repellendus? Officia at nemo rerum, quis hic libero quia laudantium.</p><br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, incidunt alias enim corporis explicabo, modi quisquam magnam est commodi quod earum aspernatur quos rerum quidem quas eveniet nulla fuga non.</p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla rem dicta sed unde et. Laboriosam voluptates consectetur, laborum ex rerum iste, cum beatae ea atque quia autem totam fuga.</p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. id tenetur eveniet fugit, delectus quae explicabo eos odio natus beatae nesciunt exercitationem ducimus optio minus tempora pariatur.</p><br />
      </div>
      <div className='page'>
        <p>page4 ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem provident sint quasi eveniet expedita error nesciunt sapiente nihil, nostrum, laudantium atque? Tenetur laboriosam amet neque? Numquam pariatur neque eius.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores sapiente, aliquid magnam nostrum facilis consequuntur exercitationem ad culpa laborum perspiciatis at necessitatibus, maxime facere aspernatur pariatur doloribus sit fuga!</p><br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat incidunt cum minus odio natus modi quas ut alias culpa ullam, quasi consequuntur obcaecati, neque amet id provident. Quae, deserunt!</p><br />
      </div>

      <div className='controls'>
        <button id='prev' onClick={prevPage}></button>
        <button id='next' onClick={nextPage}></button>
      </div>
    </div>
  )
}

export default Reader