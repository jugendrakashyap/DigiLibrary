import React from 'react'

import '../../css/search.css'

function Mybooks() {
  return (
    <main>
      <section className="listed_items">
        <div className="item_box" id='item_box'>
          <div className="item_sec item_sec_img1"></div>

          <div className="item_sec2">
            <div className='labels'>
              <h2><span>Title:</span></h2>
              <p><span>Subtitle:</span></p>
              <p><span>Publisher:</span></p>
              <p><span>Language:</span></p>
              <p><span>Genre:</span></p>
            </div>
            <div className='details'>
              <h2 className='title'></h2>
              <p className='subtitle'></p>
              <p className='publisher'></p>
              <p className='language'></p>
              <p className='genre'></p>
            </div>
          </div>

          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
              <button className="mybooks_btn">Add to My Books</button>
            </div>
            <div className="rating">
              <h4>Rating</h4>
              <span>★★★★☆</span>
              <span>(12345)</span>
            </div>
          </div>
        </div>

        <div className="item_box">
          <div className="item_sec item_sec_img2"></div>

          <div className="item_sec2">
            <div className='labels'>
              <h2><span>Title:</span></h2>
              <p><span>Subtitle:</span></p>
              <p><span>Publisher:</span></p>
              <p><span>Language:</span></p>
              <p><span>Genre:</span></p>
            </div>
            <div className='details'>
              <h2 className='title'></h2>
              <p className='subtitle'></p>
              <p className='publisher'></p>
              <p className='language'></p>
              <p className='genre'></p>
            </div>
          </div>

          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
              <button className="mybooks_btn">Add to My Books</button>
            </div>
            <div className="rating">
              <h4>Rating</h4>
              <span>★★★★☆</span>
              <span>(12345)</span>
            </div>
          </div>
        </div>

        <div className="item_box">
          <div className="item_sec item_sec_img3"></div>

          <div className="item_sec2">
            <div className='labels'>
              <h2><span>Title:</span></h2>
              <p><span>Subtitle:</span></p>
              <p><span>Publisher:</span></p>
              <p><span>Language:</span></p>
              <p><span>Genre:</span></p>
            </div>
            <div className='details'>
              <h2 className='title'></h2>
              <p className='subtitle'></p>
              <p className='publisher'></p>
              <p className='language'></p>
              <p className='genre'></p>
            </div>
          </div>

          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
              <button className="mybooks_btn">Add to My Books</button>
            </div>
            <div className="rating">
              <h4>Rating</h4>
              <span>★★★★☆</span>
              <span>(12345)</span>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}

export default Mybooks