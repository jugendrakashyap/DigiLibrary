import React from 'react'

import '../../css/search.css'

function Mybooks() {
  return (
    <main>
      <section className="listed_items">
        <div className="item_box" id='item_box'>
          <div className="item_sec">
            <img className="book_img"
              src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
              alt="img" />
          </div>
          <div className="item_sec2">
            <h2><span>Title:</span> The Whispering City</h2>
            <p><span>Author:</span> F. Scott Fitzgerald</p>
            <p>Paperback, 9780743273565</p>
            <p><span>Description:</span>
              In the heart of New York, journalist Anna Carter lives for the thrill of the next big story. But
              when an anonymous letter lands on her desk, her life takes a dangerous turn.
            </p>
            <a href="/book">details</a>
          </div>
          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn">Read now</button>
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
          <div className="item_sec">
            <img className="book_img"
              src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
              alt="img" />
          </div>
          <div className="item_sec2">
            <h2 className='title'><span>Title:</span></h2>
            <p className='subtitle'><span>subtitle:</span> F. Scott Fitzgerald</p>
            <h4 className='publisher'><span>Publisher:</span> Publisher Name</h4>
            <p className='language'><span>Language:</span>English</p>
            <p className='genre'><span>genre:</span>Fiction</p>
          </div>
          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn">Read now</button>
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
          <div className="item_sec">
            <img className="book_img"
              src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
              alt="img" />
          </div>
          <div className="item_sec2">
            <h2 className='title'><span>Title:</span> The Whispering City</h2>
            <p><span>Author:</span> F. Scott Fitzgerald</p>
            <p>Paperback, 9780743273565</p>
            <p><span>Description:</span>
              In the heart of New York, journalist Anna Carter lives for the thrill of the next big story. But
              when an anonymous letter lands on her desk, her life takes a dangerous turn.</p>
          </div>
          <div className="item_sec3">
            <div className="btns">
              <button className="read_btn">Read now</button>
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
    </main>
  )
}

export default Mybooks