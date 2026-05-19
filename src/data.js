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
      blurb: 'A boy in Yoyogi Uehara with two parents who took thousands of photos of him — and, soon afterward, of his brother and sister.',
      alt: false,
      polaroids: [
        {
          image: 'src/photos/optimized/1991-nov-hawaii-pre-yumi-0013-a.webp',
          size: 'size-md', rot: -3,
          caption: '清正の由来.',
          date: 'NOV · 1991',
          friend: 'パパ',
          message: [
            '写真のばばは清正が生まれる前に亡くなったけれど、ばば（清子）の「清」がいつも清正と一緒。',
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
          image: 'src/photos/optimized/1996-family-newborn.webp',
          size: 'size-md', rot: 2,
          caption: 'Kiyo\'s first trip to Hawaii!',
          date: 'MAY · 1996'
        },
        {
          image: 'src/photos/optimized/1996-fall-96-97-tokyo-0067-a.webp',
          size: 'size-lg', rot: 2,
          caption: '次のステップを計画している最中',
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
          caption: 'Party for Kiyo',
          date: 'SPRING · 2000',
          deco: { postit: { corner: 'br', text: 'Jiji · Rie · Hiro · YOU' } }
        },
        {
          image: 'src/photos/optimized/kiyo-star-pajamas.webp',
          size: 'size-md', rot: -3,
          caption: 'Tiger will always bounce',
          date: 'SPRING · 2000',
          friend: 'Belinda',
          message: [
            'Kiyo, you are and have always been amazing. I met you just before your 4th bday and the first thing that comes to mind after meeting your loving family was when you pooped on the carpet and just looked at me as if to say "so there."'
          ],
          signoff: 'Belinda'
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
          deco: {}
        },
        {
          image: 'src/photos/optimized/2002-kuwana-tokyo-nyc-transition-0143-a.webp',
          size: 'size-sm', rot: 3,
          caption: 'Hokkaido Yuki Matsuri',
          date: 'WINTER · 2002',
          deco: { arrowNote: { to: 'tr', text: 'Not tired after lunch?' } }
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
          friend: 'Uncle Hairo',
          message: [
            'キヨくんはこの頃はアメリカに引っ越すのを怖がっていたかな？大変そうな顔だね'
          ],
          signoff: 'Uncle Hairo'
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
            'Just like the watercolor image'
          ],
          signoff: 'Hiro'
        },
        {
          image: 'src/photos/optimized/kiyo30-eiki.webp',
          size: 'size-md', rot: -2,
          caption: 'Maui. Eiki Ojisan and family.',
          date: 'SUMMER · 2005',
          friend: 'Eiki Ojisan · えいきおじさん and Jennifer',
          message: [
            'Kiyo, Happy 30th Birthday!! You have accomplished so much in 30 years. Congrats on all of your accomplishments. Much much more to come in the next 30 years.',
            'You are well loved by your family and friends. We look forward to all that you do. Enjoy the adventures of life.',
            'Eiki Ojisan',
            'Happy 30th Kaiyo, my favorite nephew whose name starts with a "K". You are now commencing your fourth decade. It\'s time to knuckle down and get serious about life — JUST KIDDING!',
            'No but for real I am wishing you health, wealth, and happiness. You already have great accomplishments under your young belt. Kudos to you. I hope — no, I KNOW you will continue to have wonderful, meaningful, impactful achievements in the future. For the present have a blast on your birthday!'
          ],
          signoff: 'Love, Jennifer Obasan',
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
          size: 'size-md', rot: 2,
          caption: 'totoro to-toro to nico',
          date: '2010',
          friend: 'Nico Mera',
          message: [
            'Dear Kiyo, happy birthday! Congratulations on 2nd place to 30!',
            'Wishing my kids\' second dad the best decade to come, but please start contributing to the mortgage!',
            'Love, Nico. Julianne, Jack, and Scarlet are all wishing you a very happy birthday as well!'
          ],
          signoff: 'Nico, Julianne, Jack, and Scarlet',
          deco: { tape: 'tl', sharpieNote: { corner: 'br', text: 'Long time no see!' } }
        },
        {
          image: 'src/photos/optimized/dsc-0023.webp',
          size: 'size-md', rot: -2,
          caption: 'We welcome, you, to Kamp Kohut',
          date: 'SUMMER · 2009',
          friend: 'ヒロユキ',
          message: [
            'サマーキャンプは楽しかったね。Lake Thompsonに入る時には気をつけて。'
          ],
          signoff: 'ヒロユキ'
        },
        {
          image: 'src/photos/optimized/conrad-kiyo.webp',
          size: 'size-md', rot: -4,
          caption: 'He\'s play date ready',
          friend: 'Conrad',
          message: [
            'Happy 30th birthday, Kiyo!!!!! Crazy to think that you\'ve fully cleared your 20s! Maybe I should call you Kiyo ojisan for the next 8 months while we\'re still in separate "decades" hahaha.',
            'I\'m lucky to have gotten to grow up alongside you, and it\'s been awesome to see you grow up into Professor Kiyo! I know teaching is full of nonstop battles, but there\'s little that\'s as impactful as a good teacher, so thank you for doing such awesome work :) Hope you have a great birthday!!'
          ],
          signoff: 'Conrad',
          deco: { tape: 'tr' }
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
            '「30歳の誕生日おめでとうございます。いつも穏やかで、正義感、責任感が強く、自身を律する事のできる清正君には益々明るい未来がやってくることを確信しています。」'
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
          caption: 'Tamarack — man of the people?',
          date: '2023',
          deco: { scribbleHeart: 'br', sharpieNote: { corner: 'tl', text: 'man of the people?' } }
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
      blurb: 'Off to UPenn, teacher Kuwana, and life that, on most days, looks a lot like the one he hoped for at twelve.',
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
        },
        {
          image: 'src/photos/optimized/upenn-masters-2022.webp',
          size: 'size-md', rot: -2, bgPos: 'center top',
          caption: "Penn master's. May 2022.",
          date: 'MAY · 2022',
          friend: 'パパ',
          message: [
            'さすがママの後輩'
          ],
          signoff: 'パパより',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/nico-mera-torigin-jiji-baba.webp',
          size: 'size-md', rot: -2,
          caption: 'Growing up alongside.',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/gct-webster-hojung.webp',
          size: 'size-lg', rot: 1,
          caption: 'Hello, Ippei! How are you today?',
          date: 'NOV · 2022',
          friend: '太郎・香・一平',
          message: [
            '清正先生、',
            '30歳のお誕生日おめでとうございます。',
            '30、60、90、120、150、...、と30年サイクルの第一歩ですね。',
            '還暦までも、あと３０年！',
            '150才もあり得る世の中になっていくことでしょう。',
            '先が長いようですが、充実した、楽しい日々でありますように。',
            '何が起ころうとも、笑い😆飛ばせる幸多き人生でありますよう💕'
          ],
          signoff: '太郎、香、一平'
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
          image: 'src/photos/optimized/masayuki-ojisan-2024.webp',
          size: 'size-md', rot: 2,
          caption: 'おめでとう！',
          date: 'SUMMER · 2024',
          friend: '眞之叔父さん',
          message: [
            '天国から見守ってます！'
          ],
          signoff: '眞之',
          deco: { tape: 'tr', scribbleHeart: 'br' }
        },
        {
          image: 'src/photos/optimized/img-6918.webp',
          size: 'size-wide', rot: -1,
          caption: 'Gorilla find Kiyo-kun',
          date: 'JUNE · 2019'
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
          image: 'src/photos/optimized/img-4504-switched-teams.webp',
          size: 'size-md', rot: 1,
          caption: 'when Kiyo switched teams.',
          date: 'JULY · 2025',
          deco: { tape: 'tr', postit: { corner: 'br', text: 'Jefferson lives' } }
        },
        {
          image: 'src/photos/optimized/dsc03627.webp',
          size: 'size-wide', rot: 0,
          caption: 'Patagonia, Argentina.',
          date: '2023',
          friend: 'ママとパパより',
          message: [
            '最愛の清ちゃん',
            '清の名前には、叔母ちゃん達の清子・正子、叔父ちゃんの正行-三人の想いが込められている立派な名前。清く、正しく生きて行く人。その名の通りに歩んできて、本当に誇りに思っているよ。',
            'これからも、有意義な仕事をして、楽しいことを沢山経験して、よく笑ってね。あんまり難しく考えない様に。',
            '心から清を愛しているよ。30歳おめでとう㊗️。これからもたくさんの素晴らしい将来が待っているよ！'
          ],
          signoff: 'ママとパパより'
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
    { text: 'KKR!', who: 'Eiki / Jennifer' },
    { text: 'ahhhhh love you dogmaus !!', who: 'Lolo' },
    { text: 'No way you’re only 30, ochan. Balihai balihai, doumz doumz.', who: 'Francis' },
    { text: 'JUAN SOTO IS A NY MET', who: 'Lloyd' },
    { text: 'hi hi!', who: 'Connie' },
    { text: 'Waluigi attends the Big Gay Jamboree.', who: 'Uncle Hairo' },
    { text: 'bali hai, best - alyssa', who: 'Alyssa' },
    { text: 'What is your mission?', who: 'ママ' },
    { text: '君はえらいよ', who: '東京のじじ' },
    { text: 'Take it easy.', who: 'パパ' },
    { text: '成長見守ってます！', who: '眞之叔父さん' },
    { text: 'Congrats on 2nd place to 30!', who: 'Nico Mera' },
  ],

  // ===========================================================================
  // GUESTBOOK · everyone who showed up
  // ===========================================================================
  guestbook: [
    '由美ネエ',
    'Sir',
    'Tokyo Jiji and Baba (in spirit)',
    'California Jiji and Baba (in spirit)',
    'Rie and Hisaaki',
    'Yuhka / Chako',
    'Eiki / Jennifer',
    '眞之叔父さん (in spirit)',
    'Conrad',
    'Nico Mera, Julianne, Jack, and Scarlet',
    'Lolo',
    'Nathan',
    'Francis',
    'Lloyd',
    'Connie',
    'Belinda',
    'Uncle Hairo',
    'Auntie Alyssa',
    '松井秀喜',
    '河野一家',
  ],

  // ===========================================================================
  // CLOSING LETTER · from your sister and brother (浩 と 亜里沙)
  // ===========================================================================
  letter: {
    eyebrow: 'A letter, from your sister and brother',
    headline: 'キヨくん、30年経ったね。',
    paragraphs: [
      'キヨくん、30年経ったね。色々経験して色々な友達と家族の周りにいられて、これほどラッキーな長男はいないね。',
      '今は次世代の育成を頑張っているし、僕とアリサはキヨが頑張っていて嬉しいよ。野球も楽しくみているし、ローレンのところにも遊びに行って、30歳になって色々な頑張りと努力が重なって、より深い幸せが積み重なってきているね。',
      'これからもいい日や辛い日もたくさんあると思うけれど、一緒にいいことがある時に喜んで、悲しい時に慰める友達と家族がいれば嬉しいね。'
    ],
    signature: '愛してるよ、浩と亜里沙'
  }
};
