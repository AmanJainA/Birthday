import React, { useEffect, useRef } from 'react';
import Cake from './Component/Cake/Cake';
import Book from './Component/Book/Book';

function App() {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '0JLRExeOH-k',
      });
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const blowCandle = () => {
    const cakeContainer = document.querySelector('.cake-container');
    const bookContainer = document.querySelector('.book-container');
    const book = document.getElementById('book');

    if (cakeContainer) cakeContainer.style.opacity = 0;

    setTimeout(() => {
      if (cakeContainer) cakeContainer.style.display = 'none';
      if (bookContainer) bookContainer.style.display = 'block';
    }, 1000);

    if (book) book.classList.remove('opened');

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }

    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
    }
  };

  const closeCard = () => {
    const book = document.getElementById('book');
    if (book) book.classList.add('opened');
  };

  return (
    <div className="App">
      <div id="player" style={{ display: 'none' }}></div>
      <Cake onBlowCandle={blowCandle} />
      <Book onCloseCard={closeCard} />
    </div>
  );
}

export default App;
