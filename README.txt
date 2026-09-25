HAPPY BIRTHDAY WEBSITE — README
=================================

Kaise use karein (How to customize):

1) NAAM / TEXT BADALNA (Change name / text)
   - index.html file kisi bhi text editor (Notepad, VS Code) mein kholein.
   - "My Beautiful Love", letter ka text, "Why You" cards, aur stats
     (Days Together, Memories, etc.) — sab seedha HTML mein likhe hain.
   - Jo bhi line change karni ho, seedha wahan text edit kar dein.

2) APNI PHOTOS LAGANA (Adding your own photos)
   - Abhi "Moments" section aur "Why You" ke orbit circles mein
   placeholder camera icons (📷) hain kyunke video mein diye gaye
   asal photos/video mere paas available nahi thay — is liye maine
   wo chor diye hain jesa aapne kaha tha.
   - Apni photo lagane ke liye:
       a) Apni image "images" folder mein daal dein (e.g. images/photo1.jpg)
       b) index.html mein jis card mein photo lagani hai, us
          <div class="photo-ph">...</div> ko is tarah replace kar dein:

          <div class="photo-ph" style="background-image:url('images/photo1.jpg');
               background-size:cover; background-position:center;">
          </div>

       (span wala "Add Your Photo" text hata dein jab real photo lag jaye)

3) BACKGROUND MUSIC (agar chahiye)
   - Agar background music lagani ho, apni mp3 file "images" folder ke
     bajaye ek "audio" folder bana kar us mein daal dein, phir
     index.html ke </body> se pehle ye line add kar dein:

     <audio src="audio/song.mp3" autoplay loop></audio>

4) COLORS BADALNA
   - css/style.css file ke top mein ":root" section mein saare
     colors (rose, gold, cream) variables ki tarah likhe hain.
     Wahan se pura color theme change ho jayega.

5) FILE STRUCTURE
   birthday-website/
   ├── index.html
   ├── css/style.css
   ├── js/script.js
   ├── images/   (apni photos yahan daalein)
   └── README.txt (ye file)

6) WEBSITE KHOLNA
   - Bas "index.html" ko double-click karke kisi bhi browser
     (Chrome, Edge, etc.) mein khol lein. Koi server/hosting
     zaroori nahi, ye seedha chal jayegi.

Sections included (jaisa video mein tha):
   - Home (Hero + Open Your Surprise + Secret Message popup)
   - Letter (A Letter Written in Stars)
   - Moments (Cherished Moments gallery + lightbox)
   - Why You (orbit animation, glitch title, marquee, cards, stats counter)
   - Celebrate (blow-the-candle cake + Grand Finale confetti)

Happy Birthday to your Madam ji! 🎉💗
