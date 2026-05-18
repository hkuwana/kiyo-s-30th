/* ===========================================================================
 * data.js · content for Kiyo's 30th
 *
 * 👉 Everything here is editable. The site reads this file on load.
 *
 *    To swap a photo:   change `image: 'src/photos/optimized/<name>.webp'`
 *                       to a different filename from src/photos/optimized/.
 *    To edit a caption: change `caption: '...'`.
 *    To edit a friend's message: change the `message: [...]` array.
 *    To remove a polaroid: delete the whole `{ ... }` block.
 *    To add one: copy an existing block and paste it.
 *
 *    Total polaroids today: 30 (matches the 30 candles in the entry screen).
 *    Mapped photos: 29 chapter polaroids + 1 ending polaroid.
 * ========================================================================= */

window.BIRTHDAY_DATA = {
  // ----- Identity -----
  honoree: 'Kiyo',                      // typed letter-by-letter on entry
  honoreeFull: 'Kiyomasa Kuwana',
  honoreeJP: '桑名清正',
  honoreeNickname: 'キヨくん',
  fromSibling: 'your sister and brother',
  password: { mm: '05', dd: '20', yyyy: '1996' },

  // ----- Title strip -----
  title: { line1: 'Thirty trips', line2: 'around the sun.' },
  titleJP: '三十回、太陽のまわりを。',
  subtitle: 'A scrapbook for Kiyo · 桑名清正 · May 20, 2026',

  // ----- Ending polaroid photo (rendered separately from chapters) -----
  // Suggested: a recent photo of the three of you (Hiro, Arisa, Kiyo).
  // Replace this filename with whichever optimized photo you want as the final image.
  endingImage: 'src/photos/optimized/patagonia-2024.webp',
  endingCaption: 'Gotta finish dinner before midnight.',
  endingDate: 'DEC 31 · 2022',

  // ===========================================================================
  // CHAPTERS
  // ===========================================================================
  chapters: [
    // ----------------------- I. TOKYO 1996-2001 ----------------------------
    {
      n: 'I.',
      eyebrow: 'Chapter one · 第一章',
      title: 'Tokyo',
      yearRange: '1996-2001',
      blurb: 'A boy in Yoyogi Uehara with two parents who took thousands of photos of him — and, soon afterward, of his brother and sisters.',
      alt: false,
      polaroids: [
        {
          image: 'src/photos/optimized/1991-nov-hawaii-pre-yumi-0013-a.webp',
          size: 'size-md', rot: -3,
          caption: '清正の由来.',
          date: 'NOV · 1991',
          friend: 'パパ',
          message: [
            '写真のばばは清正が生まれる前に亡くなったけれど、彼女の清子の「清」がいつも清正と一緒。',
            '正行と正子も同じ。'
          ],
          signoff: 'パパ',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/1996-febtonov-0100-a.webp',
          size: 'size-md', rot: -2,
          caption: '生まれた日 · 5:36 pm.',
          date: 'MAY · 1996',
          friend: 'ママ',
          message: [
            '清ちゃん、この世界にようこそ🤩',
            '産まれて来てくれて嬉しいよ☺️'
          ],
          signoff: 'ママから · 5/20/1996 · 5:36 pm',
          deco: { tape: 'tr' }
        },
        {
          image: 'src/photos/optimized/1996-fall-96-97-tokyo-0067-a.webp',
          size: 'size-lg', rot: 2,
          caption: 'Sakura under the Den-en-toshi line.',
          date: 'APR · 1998',
          deco: { scribbleHeart: 'tr' }
        },
        {
          image: 'src/photos/optimized/1997-fall-tokyo-0020-a.webp',
          size: 'size-sm', rot: -2,
          caption: '桑名家男子三世代。',
          date: 'OCT · 1997',
          friend: 'じじとパパ',
          message: [
            '桑名家男子三世代、メガネかけたら似てるかな？'
          ],
          signoff: '— パパさん'
        },
        {
          image: 'src/photos/optimized/1998-tokyo-0120-a.webp',
          size: 'size-md', rot: 4,
          caption: '幼稚園 · the yochien crew.',
          date: 'SPRING · 2000',
          deco: { postit: { corner: 'br', text: 'Hiro · Kana · Yuto · YOU' } }
        },
        {
          image: 'src/photos/optimized/1999-spring-tokyo-hawaii-0075-a.webp',
          size: 'size-sm', rot: -5,
          caption: 'Playdate ready?',
          date: 'WINTER · 2000',
          deco: { scribbleStar: 'tl' }
        },
        {
          image: 'src/photos/optimized/2001-may-kuwana-0024-a.webp',
          size: 'size-lg', rot: -1,
          caption: '4 generations in 1 photo!',
          date: 'AUG · 2001',
          deco: { sharpieNote: { corner: 'tl', text: 'you packed 4 books. no toys.' } }
        },
        {
          image: 'src/photos/optimized/2002-kuwana-tokyo-nyc-transition-0143-a.webp',
          size: 'size-sm', rot: 3,
          caption: 'Hokkaido Yuki Matsuri',
          date: 'WINTER · 2002',
          deco: { arrowNote: { to: 'tr', text: 'lunchbox: 3 onigiri & a juicebox. RIP.' } }
        }
      ]
    },

    // ----------------------- II. GREENWICH 2001-2012 -----------------------
    {
      n: 'II.',
      eyebrow: 'Chapter two · 第二章',
      title: 'Greenwich',
      yearRange: '2001-2012',
      blurb: 'A new alphabet, a Metro-North timetable, and eleven years of being one of the only Japanese kids in the school.',
      alt: true,
      polaroids: [
        {
          image: 'src/photos/optimized/2001-spring-kuwana-0065-a.webp',
          size: 'size-lg', rot: -2,
          caption: 'Kiyo was tired after lunch',
          date: 'SEPT · 2001',
          friend: 'Dad',
          message: [
            'キヨくんはこの頃はアメリカに引っ越すのが怖がっていたかな？大変な顔だね'
          ],
          signoff: 'Dad'
        },
        {
          image: 'src/photos/optimized/2002-fall-kuwana-0051-a.webp',
          size: 'size-md', rot: -4,
          caption: 'Rie visiting Kiyo in America',
          date: 'FEB · 2003'
        },
        {
          image: 'src/photos/optimized/dsc00817.webp',
          size: 'size-md', rot: -1,
          caption: 'Kiyo\'s teeth pre braces. Not bad',
          date: 'JULY · 2006',
          friend: 'Hiro',
          message: [
            '[Hiro\'s message here]'
          ],
          signoff: 'Hiro'
        },
        {
          image: 'src/photos/optimized/kiyo30-eiki.webp',
          size: 'size-md', rot: -2,
          caption: 'Maui. Eiki Ojisan and family.',
          date: 'SUMMER · 2005',
          friend: 'Eiki Ojisan · えいきおじさん',
          message: [
            'Kiyo, Happy 30th Birthday!! You have accomplished so much in 30 years. Congrats on all of your accomplishments. Much much more to come in the next 30 years.',
            'You are well loved by your family and friends. We look forward to all that you do. Enjoy the adventures of life.'
          ],
          signoff: 'Eiki Ojisan and Family',
          deco: { tape: 'tr' }
        },
        {
          image: 'src/photos/optimized/dsc05226.webp',
          size: 'size-md', rot: 1,
          caption: 'Napkino Por favor',
          date: 'SEPT · 2011',
          friend: 'Mom',
          message: [
            'How can I have my cereal without any milk?'
          ],
          signoff: '母'
        },
        {
          image: 'src/photos/optimized/alyssa-kiyo-childhood.webp',
          size: 'size-md', rot: -3,
          caption: 'With the oldest sibling.',
          date: 'SUMMER · 2002',
          friend: 'Alyssa · 亜里沙',
          message: [
            'Hello 清ポンポン、３０歳のお誕生日おめでとう！',
            '子供みたいに遊んで、毎日の小さなことに喜びを感じることが一番大事だよ。毎日、自分が笑顔になれることを必ず一つやってね。',
            'これからの３０年間も健康で、たくさん家族や友達と幸せな時間を過ごせますように。いつも応援しているよ。愛してる！'
          ],
          signoff: '亜里沙より',
          deco: { scribbleHeart: 'br' }
        },
        {
          image: 'src/photos/optimized/alyssa-kiyo-totoro.webp',
          size: 'size-sm', rot: 2,
          caption: 'Totoro To-toro.',
          date: '2010',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/dsc-0023.webp',
          size: 'size-md', rot: -2,
          caption: 'We welcome, you, to Kamp Kohut',
          date: 'SUMMER · 2009',
          friend: 'ヒロユキ',
          message: [
            'サマーキャンプは良くって楽しかったからよかったね。Lake Thompsonに入る時には気をつけて。'
          ],
          signoff: 'ヒロユキ'
        },
        {
          image: 'src/photos/optimized/img-1178.webp',
          size: 'size-md', rot: 1,
          caption: 'Maui with Baba',
          date: 'JAN · 2012',
          friend: 'Mama',
          message: [
            'Baba would have been so proud of you and loved you so so much!'
          ],
          signoff: '— Mama'
        }
      ]
    },

    // ----------------------- III. EXETER / BROWN 2012-2019 -----------------
    {
      n: 'III.',
      eyebrow: 'Chapter three · 第三章',
      title: 'Exeter / Brown',
      yearRange: '2012-2019',
      blurb: 'Boarding school at Exeter, then Brown. Harkness tables. Providence winters.',
      alt: false,
      polaroids: [
        {
          image: 'src/photos/optimized/kiyo-hitdeki-brown.webp',
          size: 'size-wide', rot: 1,
          caption: 'Kiyo introduces Brown to Hit-deki.',
          date: 'SPRING · 2019',
          friend: '松井秀喜',
          message: [
            '清正君へ',
            '「30歳の誕生日おめでとうございます。いつも穏やかで、正義感、責任感が強く、自信を律する事のできる清正君には益々明るい未来がやってくることを確信しています。」'
          ],
          signoff: '松井秀喜',
          deco: { tape: 'tr' }
        },
        {
          image: 'src/photos/optimized/dsc-2821.webp',
          size: 'size-sm', rot: -3,
          caption: 'Made it to Cum Laude!',
          date: 'MAY · 2015',
          friend: 'Mama',
          message: [
            'A day to remember'
          ],
          signoff: 'Mama'
        },
        {
          image: 'src/photos/optimized/img-0680.webp',
          size: 'size-md', rot: -3,
          caption: 'One week in Thailand.',
          date: 'JAN · 2018',
          friend: 'ママ',
          message: [
            'タイ🇹🇭での家族旅行✈️Kum Banにお世話になってゆっくりしたね'
          ],
          signoff: 'ママ'
        },
        {
          image: 'src/photos/optimized/img-1018.webp',
          size: 'size-md', rot: 2,
          caption: 'Tamarack — man of the people.',
          date: '2023',
          deco: { scribbleHeart: 'br', sharpieNote: { corner: 'tl', text: 'man of the people.' } }
        },
        {
          image: 'src/photos/optimized/img-1237.webp',
          size: 'size-sm', rot: 3,
          caption: 'The hard year.',
          date: 'WINTER · 2021',
          friend: 'Connie',
          message: [
            'Happy Birthday Bali Hai!'
          ],
          signoff: 'Connie'
        },
      ]
    },

    // ----------------------- IV. ADULT 2019-NOW ----------------------------
    {
      n: 'IV.',
      eyebrow: 'Chapter four · 第四章',
      title: 'Adult.',
      yearRange: '2019-now',
      blurb: 'A classroom of his own. A person who knows his coffee order. A life that, on most days, looks a lot like the one he hoped for at twelve.',
      alt: true,
      polaroids: [
        {
          image: 'src/photos/optimized/img-3601.webp',
          size: 'size-md', rot: -1,
          caption: 'Gift from local village!',
          date: 'SUMMER · 2019',
          deco: { arrowNote: { to: 'br', text: 'this is where Hiro lost his wallet.' } }
        },
        {
          image: 'src/photos/optimized/img-4206.webp',
          size: 'size-sm', rot: 2,
          caption: 'Michael Rover\'s Wedding',
          date: 'AUG · 2020',
          friend: 'Aoki-sensei · 青木先生',
          message: [
            '[青木先生からのメッセージをここに]'
          ],
          signoff: '青木'
        },
        {
          image: 'src/photos/optimized/upenn-masters-2022.webp',
          size: 'size-md', rot: -2,
          caption: "Penn master's. May 2022.",
          date: 'MAY · 2022',
          friend: 'ママ',
          message: [
            '[ママからのメッセージをここに]'
          ],
          signoff: 'ママより',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/img-6630.webp',
          size: 'size-lg', rot: 1,
          caption: 'The coffee shop on Filbert. The day.',
          date: 'NOV · 2022',
          friend: 'Marcus',
          message: [
            "[Marcus's message here]"
          ],
          signoff: 'M.'
        },
        {
          image: 'src/photos/optimized/lloyd-mets-2023.webp',
          size: 'size-md', rot: 2,
          caption: 'Another year, another Mets game together!',
          date: 'MAY · 2023',
          friend: 'Lloyd',
          message: [
            'Great to have Kiyo as a Mets fan...whenever he\'s not a Yankees fan...or Dodgers fan. 😭'
          ],
          signoff: 'LFGM',
          deco: { tape: 'tr' }
        },
        {
          image: 'src/photos/optimized/lloyd-yankees-2024.webp',
          size: 'size-sm', rot: -2,
          caption: 'Let\'s go Yankees!',
          date: 'JUNE · 2024',
          signoff: 'chien ming wang',
          deco: { sharpieNote: { corner: 'br', text: 'the food here is a better deal than Citi Field!!!' } }
        },
        {
          image: 'src/photos/optimized/chako-yuhka-palisades-2024.webp',
          size: 'size-md', rot: -1,
          caption: 'Visiting Pacific Palisades! 懐かしいね！',
          date: 'SUMMER · 2024',
          friend: 'Chako ＆ Yuhka',
          message: [
            'Great that we were able to go to LA and the Dodgers game with Masayuki-ojisan. You\'re definitely getting around to the different ballgame sites.',
            'Keep visiting the MLB stadiums and tell us which may be best to visit.',
            'We are also waiting for your visit to Tokyo. ガンバレ！',
            '清ちゃん、30歳おめでとう。あっという間の３０年だったかな。人生これからまだまだ楽しいこと一杯待ってるよ～'
          ],
          signoff: 'Chako ＆ Yuhka',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/img-6918.webp',
          size: 'size-wide', rot: -1,
          caption: 'Room 207. His.',
          date: 'SPRING · 2026',
          friend: 'V.P. Ortiz',
          message: [
            "[V.P. Ortiz's message here]"
          ],
          signoff: 'V.O.'
        },
        {
          image: 'src/photos/optimized/img-7076.webp',
          size: 'size-sm', rot: -4,
          caption: 'A note from a student.',
          date: 'FEB · 2026',
          friend: 'Theo (age 12)',
          message: [
            "[Theo's note here]"
          ],
          signoff: 'Theo'
        },
        {
          image: 'src/photos/optimized/img-3012-rie.webp',
          size: 'size-md', rot: 3,
          caption: '名探偵コナン · Halloween.',
          date: '2024',
          friend: 'Rie Lavender · リエ',
          message: [
            'Happy Dashi-ing Thirty! ダシが効いてる三十路！',
            'My favorite history-buff-turned-high-school-hero has officially entered his "Ahjussi" era — meaning the dad jokes are now federally mandated and the K-pop lightstick stays permanently on his desk. Whether he\'s drop-kicking Asian historical myths at school or practicing his favorite idol\'s choreography in private, Kiyo does it with the kindest heart and very original wit.',
            'Cheers to 3 decades of being a gentle soul with a legendary sense of humor. Don\'t let the 3-0 get you down — in "history years," you\'re basically a newborn!'
          ],
          signoff: 'Love, Rie & Hisaaki',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/kiyo-hisaaki.webp',
          size: 'size-sm', rot: -3,
          caption: '久明おじさんと。',
          date: 'TOKYO',
          deco: { tape: 'tr' }
        },
        {
          image: 'src/photos/optimized/img-6954-rie.webp',
          size: 'size-sm', rot: -2,
          caption: 'Yankees game.',
          date: '2024',
          deco: { scribbleHeart: 'tr' }
        },
        {
          image: 'src/photos/optimized/img-1252.webp',
          size: 'size-md', rot: 1,
          caption: 'Great British weather',
          date: 'JULY · 2024',
          deco: { tape: 'tr', postit: { corner: 'br', text: 'Man of the People Skiibo' } }
        },
        {
          image: 'src/photos/optimized/dsc03627.webp',
          size: 'size-wide', rot: 0,
          caption: 'Patagonia, Argentina.',
          date: '2023',
          friend: 'Sam',
          message: [
            '[Sam\'s message here]'
          ],
          signoff: 'Sam'
        },
        {
          image: 'src/photos/optimized/img-8732-lauren.webp',
          size: 'size-md', rot: -1,
          caption: 'Opening Day +2. Dodgers vs Nationals.',
          date: 'APR · 2025',
          friend: 'Lolo',
          message: [
            'Happy 30th Birthday to the sweetest, cutest, and most loving bb ever!! I am grateful to be able to celebrate both the end and the beginning of a new decade for you — with the people who love you most.',
            'Kiyo — you care for others in very special, and perhaps unconventionally majime ways that makes them feel seen, balihai, and cherished. I love feeling your kindness in your attention to the smallest detail, such as spending hours writing comments for your kids so that they learn from their mistakes; texting me that my flight had landed even before the time on my phone adjusts to the new time difference, as you were closely following my flight path; taking the time to send a thank you card to my emmo; despite your intense feelings re: cilantro, you suggesting Vietnamese for our second date because I mentioned that I wanted pho in passing; handwriting birthday/wedding cards and picking out the most thoughtful gifts for others; starting all our mornings with a rajio taiso routine; and always letting me have the last bite at donsak.',
            'Wishing you only the brightest and most balihai days ahead with all the luck I\'ve accumulated throughout this lifetime. But if I can be a bit more selfish, hoping for many more mooooovie nights together and many more tomorrows to come — 淸ちゃん 大大大大大大大大大大好き (more than choco-minto)!'
          ],
          signoff: 'love, lolo',
          deco: { postit: { corner: 'tr', text: '응ㅇㅇㅇㅇㅇㅇㅇㅇ좋은 아침!!' } }
        }
      ]
    }
  ],

  // ===========================================================================
  // BUBBLES · quotes that float up while scrolling
  // ===========================================================================
  bubbles: [
    { text: 'うん、それならユルス', who: 'Rie' },
    { text: 'Waiting for the next opportunity to have fun together!', who: 'Yuhka / Chako' },
    { text: 'Filler filler filler!', who: 'Eiki / Jennifer' },
    { text: 'ahhhhh love you dogmaus !!', who: 'Lolo' },
    { text: 'Awww domes domes.', who: 'Francis' },
    { text: 'JUAN SOTO IS A NY MET', who: 'Lloyd' },
    { text: 'hi hi!', who: 'Connie' },
    { text: 'Garrison bonus activated.', who: 'Uncle Hairo' },
    { text: 'bali hai, best - alyssa', who: 'Alyssa' },
    { text: 'What is your mission?', who: 'ママ' },
    { text: '君はえらいよ', who: '東京のじじ' },
    { text: 'Take it easy.', who: 'パパ' },
  ],

  // ===========================================================================
  // GUESTBOOK · everyone who showed up
  // ===========================================================================
  guestbook: [
    'ママ',
    'パパ',
    'Tokyo Jiji and Baba (in spirit)',
    'California Jiji and Baba (in spirit)',
    'Rie Obasan',
    'Yuhka / Chako',
    'Eiki / Jennifer',
    'Conrad',
    'Nico',
    'Lolo',
    'Nathan',
    'Francis',
    'Lloyd',
    'Connie',
    'Belinda',
    'Uncle Hairo',
    'Auntie Alyssa',
    '松井秀喜',
  ],

  // ===========================================================================
  // CLOSING LETTER · from your sister and brother (浩 と 亜里沙)
  // ===========================================================================
  letter: {
    eyebrow: 'A letter, from your sister and brother',
    headline: 'キヨくん、30年経ったね。',
    paragraphs: [
      'キヨくん、30年経ったね。色々経験して色々な友達と家族の周りにいられて、これほどラッキーな長男はいないね。',
      '今は次世代を育成することを頑張っているし、僕とアリサはキヨが頑張っていて嬉しいよ。野球も楽しくみているし、ローレンにも遊びに行って、色々３０歳になって頑張りと努力が重なって、より深い幸せと幸福が積み重なってきているね。',
      'これからもいい日や辛い日もたくさんあると思うけれど、一緒にいいことがある時に喜んで、悲しい時に慰める友達と家族がいれば嬉しいね。'
    ],
    signature: '愛してるよ、浩と亜里沙'
  }
};
