import React, { Component } from 'react';
import profilePic from '../../images/our.png';
import './Book.css'; // Create this CSS file

export class Book extends Component {
  render() {
    return (
      <div className="book-container">
        <div className="book" id="book">
          <div className="page front">
            <div className="photo-left">
              <img src={profilePic} alt="" />
            </div>
            <div className="wishes">
              <h2>Happy Birthday My Love ❤️</h2>
              <p>
                Happy Birthday to the girl who turned my “okay” into “amazing” and my “someday” into “forever.”
                You’re not just the light of my life, you’re the whole sky.
                I may not be able to gift you the stars,
                but I promise to hold your heart like it’s my whole universe.
                I love you, now and always. 💖
              </p>
              <button className="close-btn" onClick={this.props.onCloseCard}>Close</button>
            </div>
          </div>

          <div className="page back">
            <div className="love-message">
              <h2>I Love You ❤️</h2>
              <img
                src={require('../../images/marry.gif')}
                className="proposal-gif"
                alt=""
              />
            </div></div>

          <div id="player"></div>
        </div>
      </div>
    );
  }
}

export default Book;
