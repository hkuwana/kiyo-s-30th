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
  endingImage: 'src/photos/optimized/img-8927.webp',
  endingCaption: 'Thirty. And just getting good.',

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
      blurb: 'The first five years. A boy in a Setagaya apartment with two parents who took a thousand photos and meant every one of them.',
      alt: false,
      polaroids: [
        {
          image: 'src/photos/optimized/1996-febtonov-0100-a.webp',
          size: 'size-md', rot: -3,
          caption: 'Day one. 4:17 a.m.',
          date: 'MAY · 1996',
          friend: 'お母さん',
          message: [
            '[母さんからのメッセージをここに]'
          ],
          signoff: '母より',
          deco: { tape: 'tl' }
        },
        {
          image: 'src/photos/optimized/1996-fall-96-97-tokyo-0067-a.webp',
          size: 'size-lg', rot: 2,
          caption: 'Sakura under the Den-en-toshi line.',
          date: 'APR · 1998',
          deco: { scribbleHeart: 'tr', arrowNote: { to: 'br', text: 'fell into the koi pond 30 seconds after' } }
        },
        {
          image: 'src/photos/optimized/1997-fall-tokyo-0020-a.webp',
          size: 'size-sm', rot: -2,
          caption: 'おばあちゃんの台所.',
          date: 'WINTER · 1999',
          friend: 'Aunt Yuki · ゆき叔母',
          message: [
            '[ゆき叔母からのメッセージをここに]'
          ],
          signoff: 'ゆき'
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
          caption: 'Sento, age 4.',
          date: 'WINTER · 2000',
          deco: { scribbleStar: 'tl' }
        },
        {
          image: 'src/photos/optimized/2000-spring-tokyo-alyssa-home-0069-a.webp',
          size: 'size-wide', rot: 1,
          caption: 'Rainy walk home from yochien.',
          date: '初夏 · 2001',
          friend: 'Hiro · ヒロ',
          message: [
            '[ヒロからのメッセージをここに]'
          ],
          signoff: 'ヒロ'
        },
        {
          image: 'src/photos/optimized/2001-may-kuwana-0024-a.webp',
          size: 'size-tall', rot: -3,
          caption: 'Narita, the day we flew to JFK.',
          date: 'AUG · 2001',
          deco: { sharpieNote: { corner: 'tl', text: 'you packed 4 books. no toys.' } }
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
          caption: 'First house in Riverside. The yellow one.',
          date: 'SEPT · 2001',
          friend: 'Dad',
          message: [
            '[Dad\'s message here]'
          ],
          signoff: 'Dad'
        },
        {
          image: 'src/photos/optimized/2002-kuwana-tokyo-nyc-transition-0143-a.webp',
          size: 'size-sm', rot: 3,
          caption: 'Bus to North Street School.',
          date: 'WINTER · 2002',
          deco: { arrowNote: { to: 'tr', text: 'lunchbox: 3 onigiri & a juicebox. RIP.' } }
        },
        {
          image: 'src/photos/optimized/2002-fall-kuwana-0051-a.webp',
          size: 'size-md', rot: -4,
          caption: 'First snow in CT.',
          date: 'FEB · 2003',
          friend: 'Marcus',
          message: [
            '[Marcus\'s message here]'
          ],
          signoff: 'Marcus'
        },
        {
          image: 'src/photos/optimized/2003-hawaii-ct-0321-a.webp',
          size: 'size-sm', rot: 2,
          caption: '7th birthday. 7 candles.',
          date: 'MAY · 2003',
          deco: { sharpieNote: { corner: 'br', text: 'you ate the icing first. always.' } }
        },
        {
          image: 'src/photos/optimized/dsc00817.webp',
          size: 'size-md', rot: -1,
          caption: 'Little league. Summer of bad haircuts.',
          date: 'JULY · 2006',
          friend: 'Coach Hal',
          message: [
            '[Coach Hal\'s message here]'
          ],
          signoff: 'Coach H.'
        },
        {
          image: 'src/photos/optimized/dsc03627.webp',
          size: 'size-wide', rot: 0,
          caption: 'Central Middle. 7th grade.',
          date: 'MAY · 2009',
          friend: 'Sam',
          message: [
            '[Sam\'s message here]'
          ],
          signoff: 'Sam'
        },
        {
          image: 'src/photos/optimized/dsc05226.webp',
          size: 'size-md', rot: 1,
          caption: 'GHS freshman year. Briefly.',
          date: 'SEPT · 2011',
          friend: 'Mom',
          message: [
            '[母さんからのメッセージをここに]'
          ],
          signoff: '母'
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
          image: 'src/photos/optimized/dsc-0023.webp',
          size: 'size-md', rot: -2,
          caption: 'Wentworth Hall. Move-in day.',
          date: 'SEPT · 2012',
          friend: 'James',
          message: [
            '[James\'s message here]'
          ],
          signoff: 'J.'
        },
        {
          image: 'src/photos/optimized/dsc-0208.webp',
          size: 'size-wide', rot: 1,
          caption: "Harkness table, Mr. Lamb's English 320.",
          date: 'WINTER · 2014',
          deco: { sharpieNote: { corner: 'tl', text: 'you spoke last. always last. always good.' } }
        },
        {
          image: 'src/photos/optimized/dsc-2821.webp',
          size: 'size-sm', rot: -3,
          caption: 'Lamont Hall library.',
          date: 'SPRING · 2015',
          friend: 'Mr. Lamb',
          message: [
            "[Mr. Lamb's message here]"
          ],
          signoff: 'R. Lamb'
        },
        {
          image: 'src/photos/optimized/img-0680.webp',
          size: 'size-lg', rot: -3,
          caption: 'Move-in day, Keeney Quad.',
          date: 'SEPT · 2016',
          friend: 'Priya',
          message: [
            "[Priya's message here]"
          ],
          signoff: 'Priya'
        },
        {
          image: 'src/photos/optimized/img-1018.webp',
          size: 'size-md', rot: 2,
          caption: 'Thayer Street, 1 a.m.',
          date: 'OCT · 2017',
          deco: { scribbleHeart: 'br', sharpieNote: { corner: 'tl', text: "jo's 1am. always jo's." } }
        },
        {
          image: 'src/photos/optimized/img-1178.webp',
          size: 'size-lg', rot: -2,
          caption: 'Back in Tokyo with the Brown gang.',
          date: 'JUNE · 2018',
          friend: 'James',
          message: [
            "[James's message here]"
          ],
          signoff: 'J.'
        },
        {
          image: 'src/photos/optimized/img-1237.webp',
          size: 'size-sm', rot: 3,
          caption: 'The hard year.',
          date: 'WINTER · 2018',
          friend: 'You (later)',
          message: [
            '[a letter to your past self goes here]'
          ],
          signoff: 'love, me'
        },
        {
          image: 'src/photos/optimized/img-1252.webp',
          size: 'size-md', rot: 1,
          caption: 'Brown commencement.',
          date: 'MAY · 2019',
          deco: { tape: 'tr', postit: { corner: 'br', text: 'AB, Comp Lit + Education. cum laude.' } }
        }
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
          caption: 'PCH. Post-grad reset.',
          date: 'SUMMER · 2019',
          deco: { arrowNote: { to: 'br', text: 'this is where you decided to teach.' } }
        },
        {
          image: 'src/photos/optimized/img-4206.webp',
          size: 'size-sm', rot: 2,
          caption: 'Teaching cert, day of.',
          date: 'AUG · 2020',
          friend: 'Aoki-sensei · 青木先生',
          message: [
            '[青木先生からのメッセージをここに]'
          ],
          signoff: '青木'
        },
        {
          image: 'src/photos/optimized/img-5064.webp',
          size: 'size-md', rot: -2,
          caption: 'First class. First day.',
          date: 'SEPT · 2021',
          deco: { postit: { corner: 'br', text: 'you forgot 3 names. they forgave you.' } }
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
          image: 'src/photos/optimized/img-7458.webp',
          size: 'size-md', rot: -3,
          caption: 'Lauren.',
          date: 'WINTER · 2026',
          friend: 'Lauren',
          message: [
            "[Lauren's message here]"
          ],
          signoff: 'L ♡'
        }
      ]
    }
  ],

  // ===========================================================================
  // BUBBLES · quotes that float up while scrolling
  // ===========================================================================
  bubbles: [
    { text: 'Always the first one to text.', who: 'Hiro' },
    { text: 'おめでとう、ねえ。母さん、本当にうれしい。', who: '母' },
    { text: 'You\'re the reason I went into teaching.', who: 'Sam' },
    { text: 'He has my coffee order memorized.', who: 'a friend' },
    { text: 'The kindest, most stubborn person I know.', who: 'Lauren' },
    { text: 'Came when it mattered. Said nothing. Sat next to me.', who: 'James' },
    { text: 'Mr. Kuwana said my essay was good and I cried in the bathroom.', who: 'student, anon' },
    { text: 'Thirty years of being too good for this world.', who: 'Sam' },
    { text: 'Your laugh, in any room, makes the room better.', who: 'Lauren' },
    { text: 'お兄ちゃん、おめでとう。', who: 'Arisa · 亜里沙' },
    { text: 'I have never won an argument with him. He just keeps being nice.', who: 'Marcus' }
  ],

  // ===========================================================================
  // GUESTBOOK · everyone who showed up
  // ===========================================================================
  guestbook: [
    'ママ',
    'パパ',
    'Yuhka / Chako',
    'Eiki / Jennifer',
    'Conrad',
    'Nico',
    'Lauren',
    'Nathan',
    'Francis',
    'Lloyd',
    'Connie',
    'Belinda',
    'Uncle Hairo',
    'Auntie Alyssa',
    'KKR Team',
    'Jiji and Baba in spirit'
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
