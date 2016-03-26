var romaji2katakana = (function() {
  // based in http://d.hatena.ne.jp/mohayonao/20091129/1259505966
  var romaji_dict = {
    'a':  'ア', 'i':  'イ', 'u':  'ウ', 'e':  'エ', 'o':  'オ',
    'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ',
    'sa': 'サ', 'shi':'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ',
    'ta': 'タ', 'chi':'チ', 'tu': 'ツ', 'te': 'テ', 'to': 'ト',
    'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ',
    'ha': 'ハ', 'hi': 'ヒ', 'fu': 'フ', 'he': 'ヘ', 'ho': 'ホ',
    'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ',
    'ya': 'ヤ', 'yu': 'ユ', 'yo': 'ヨ',
    'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ',
    'wa': 'ワ', 'wo': 'ヲ', 'n':  'ン', 'vu': 'ヴ',
    'ga': 'ガ', 'gi': 'ギ', 'gu': 'グ', 'ge': 'ゲ', 'go': 'ゴ',
    'za': 'ザ', 'ji': 'ジ', 'zu': 'ズ', 'ze': 'ゼ', 'zo': 'ゾ',
    'da': 'ダ', 'di': 'ヂ', 'du': 'ヅ', 'de': 'デ', 'do': 'ド',
    'ba': 'バ', 'bi': 'ビ', 'bu': 'ブ', 'be': 'ベ', 'bo': 'ボ',
    'pa': 'パ', 'pi': 'ピ', 'pu': 'プ', 'pe': 'ペ', 'po': 'ポ',
    
    'kya':'キャ', 'kyi':'キィ', 'kyu':'キュ', 'kye':'キェ', 'kyo':'キョ',
    'gya':'ギャ', 'gyi':'ギィ', 'gyu':'ギュ', 'gye':'ギェ', 'gyo':'ギョ',
    'sha':'シャ',               'shu':'シュ', 'she':'シェ', 'sho':'ショ',
    'ja': 'ジャ',               'ju': 'ジュ', 'je': 'ジェ', 'jo': 'ジョ',
    'cha':'チャ',               'chu':'チュ', 'che':'チェ', 'cho':'チョ',
    'dya':'ヂャ', 'dyi':'ヂィ', 'dyu':'ヂュ', 'dhe':'デェ', 'dyo':'ヂョ',
    'nya':'ニャ', 'nyi':'ニィ', 'nyu':'ニュ', 'nye':'ニェ', 'nyo':'ニョ',
    'hya':'ヒャ', 'hyi':'ヒィ', 'hyu':'ヒュ', 'hye':'ヒェ', 'hyo':'ヒョ',
    'bya':'ビャ', 'byi':'ビィ', 'byu':'ビュ', 'bye':'ビェ', 'byo':'ビョ',
    'pya':'ピャ', 'pyi':'ピィ', 'pyu':'ピュ', 'pye':'ピェ', 'pyo':'ピョ',
    'mya':'ミャ', 'myi':'ミィ', 'myu':'ミュ', 'mye':'ミェ', 'myo':'ミョ',
    'rya':'リャ', 'ryi':'リィ', 'ryu':'リュ', 'rye':'リェ', 'ryo':'リョ',
    'fa': 'ファ', 'fi': 'フィ',               'fe': 'フェ', 'fo': 'フォ',
    'wi': 'ウィ', 'we': 'ウェ', 
    'va': 'ヴァ', 'vi': 'ヴィ', 've': 'ヴェ', 'vo': 'ヴォ',
    
    'kwa':'クァ', 'kwi':'クィ', 'kwu':'クゥ', 'kwe':'クェ', 'kwo':'クォ',
    'kha':'クァ', 'khi':'クィ', 'khu':'クゥ', 'khe':'クェ', 'kho':'クォ',
    'gwa':'グァ', 'gwi':'グィ', 'gwu':'グゥ', 'gwe':'グェ', 'gwo':'グォ',
    'gha':'グァ', 'ghi':'グィ', 'ghu':'グゥ', 'ghe':'グェ', 'gho':'グォ',
    
    'swa':'スァ', 'swi':'スィ', 'swu':'スゥ', 'swe':'スェ', 'swo':'スォ',
    'zwa':'ズヮ', 'zwi':'ズィ', 'zwu':'ズゥ', 'zwe':'ズェ', 'zwo':'ズォ',
    'twa':'トァ', 'twi':'トィ', 'twu':'トゥ', 'twe':'トェ', 'two':'トォ',
    'dwa':'ドァ', 'dwi':'ドィ', 'dwu':'ドゥ', 'dwe':'ドェ', 'dwo':'ドォ',
    'mwa':'ムヮ', 'mwi':'ムィ', 'mwu':'ムゥ', 'mwe':'ムェ', 'mwo':'ムォ',
    'bwa':'ビヮ', 'bwi':'ビィ', 'bwu':'ビゥ', 'bwe':'ビェ', 'bwo':'ビォ',
    'pwa':'プヮ', 'pwi':'プィ', 'pwu':'プゥ', 'pwe':'プェ', 'pwo':'プォ',
    'phi':'プィ', 'phu':'プゥ', 'phe':'プェ', 'pho':'フォ',
      
    'si': 'シ'  , 'ti': 'チ'  , 'hu': 'フ' , 'zi':'ジ',
    'sya':'シャ', 'syu':'シュ', 'syo':'ショ',
    'tya':'チャ', 'tyu':'チュ', 'tyo':'チョ',
    'cya':'チャ', 'cyu':'チュ', 'cyo':'チョ',
    'jya':'ジャ', 'jyu':'ジュ', 'jyo':'ジョ', 'pha':'ファ', 
    'qa': 'クァ', 'qi': 'クィ', 'qu': 'クゥ', 'qe': 'クェ', 'qo':'クォ',
    
    'ca': 'カ', 'ci':'シ', 'cu':'ク', 'ce':'セ', 'co':'コ',
    'la': 'ラ', 'li':'リ', 'lu':'ル', 'le':'レ', 'lo':'ロ',

    'mb': 'ム', 'py':'パイ', 'tho': 'ソ', 'thy':'ティ', 'oh':'オウ',
    'by':'ビィ', 'cy':'シィ', 'dy':'ディ', 'fy':'フィ', 'gy':'ジィ',
    'hy':'シー', 'ly':'リィ', 'ny':'ニィ', 'my':'ミィ', 'ry':'リィ',
    'ty':'ティ', 'vy':'ヴィ', 'zy':'ジィ',

    'b':'ブ', 'c':'ク', 'd':'ド', 'f':'フ'  , 'g':'グ', 'h':'フ', 'j':'ジ',
    'k':'ク', 'l':'ル', 'm':'ム', 'p':'プ'  , 'q':'ク', 'r':'ル', 's':'ス',
    't':'ト', 'v':'ヴ', 'w':'ゥ', 'x':'クス', 'y':'ィ', 'z':'ズ'
  };
  
  var romaji_keys = Object.keys(romaji_dict);
  romaji_keys.sort((a, b) => b.length - a.length);
  
  var re_roma2kana = new RegExp(romaji_keys.join('|'), 'g');
  var rx_mba = /m(b|p)([aiueo])/g;
  var rx_xtu = /([bcdfghjklmpqrstvwxyz])\1/g;
  var rx_a__ = /([aiueo])\1/g;
  var rx_b__ = /^ッ/;
  
  function romaji2katakana(text) {
    return text
      .toLowerCase()
      .replace(rx_mba, 'ン$1$2')
      .replace(rx_xtu, 'ッ$1')
      .replace(rx_a__, '$1ー')
      .replace(rx_b__, '')
      .replace(re_roma2kana, a => romaji_dict[a]);
  }
  
  return romaji2katakana;
}());

(function () {
  $('<style>').html(`body {
    background: black;
  }
  .message-container {
    padding-bottom: 0;
    padding-top: 3em;
    max-width: 640px;
    margin: 0px auto;
  }
  .message-container + * {
    top: 0; bottom: auto;
  }
  .message {
    background: none;
    color: white;
  }
  .message .avatar {
    padding-bottom: 1em;
    margin: 0px 20px;
  }
  .message .avatar a {
    border-radius: 10px;
    border: 2px solid white;
  }
  .avatar a img {
    display: none;
  }
  .username {
    position: absolute;
    top: 40px;
    left: 0;
    overflow: hidden;
    height: 1.8em;
    text-align: center;
    width: 6em;
  }
  .username a{
    color: white;
    font-size: 0.8em;
  }
  .message::after {
    content: attr(data-user);
    position: absolute;
    top: 44px;
    left: 0.4em;
    overflow: hidden;
    height: 1.5em;
    text-align: center;
    width: 7.5em;
    color: white;
    font-size: 0.7em;
    background: black;
    opacity: 0;
    pointer-events: none;
  }
  .message:hover::after {
    opacity: 1;
  }
  .message:not(.message_me-command) > .content {
    border: 2px solid white;
    border-radius: 0.5em;
    padding: 0.5em;
    overflow: hidden;
  }
  @media screen and (max-width: 480px) {
    .message .timestamp {
      position: absolute;
      right: 0;
      opacity: 0.5;
    }
  }
  .message:not(.message_me-command)::before {
    content: "";
    position:absolute;
    border-style:solid;
    border-width:5px 7px 5px 0;
    border-color:transparent #fff;
    display:block;
    width:0;
    z-index:1;
    top: 1em;
    left: 73px;
  }
  .message-controls {
    background: black;
    padding: 5px;
  }
  .message-controls a, .message-container a {
    color: white;
  }
  .message .timestamp > .glyphicon {
    color: #F32121;
  }
  .message_is-editing {
    box-shadow: 0 0 1em #F32121;
  }
  .page-overlay {
    background-color: black;
  }
  .message_me-command .username {
    position: static;
    height: auto;
  }
  .message_me-command .username a {
    font-size: 1em;
  }
  .lightbox {
    background: rgba(0, 0, 0, 0.8);
  }
  .delete-confirmation {
    background: black;
    border-color: #942;
  }
  .avatar a::before {
    left: 33px;
    background: rgba(0, 0, 0, 0.67);
    color: white;
  }
  .message .avatar_replying {
    margin: -2px 18px;
  }
  .message .avatar_replying a {
    border-color: #F32121;
  }
  .message_is-user {
    border-right: none;
  }
  .message_read { animation: none; }
  .message_read .content { animation: durarara-new-message 0.4s ease-in 1; transform-origin: 0 50% }
  @keyframes durarara-new-message{
    0%   { transform: scale(0.6); }
    100% { transform: scale(1) }
  }
  .emoticon-bubble {
    top: auto;
    bottom: -15px;
  }
  .emoticon-bubble::before {
    top: -15px;
    bottom: auto;
    border-width: 0 15px 14px;
  }
  .emoticon-bubble::after {
    bottom: auto;
    top: -14px;
    border-width: 0 15px 14px;
  }
  .carregar-mensagens{
    background: black;
    color: white;
  }`).appendTo('head');

  $('.dropup').removeClass('dropup');

  function changeNames() {
    $('.username a').not('.durarara').each(function() {
      var $this = $(this);
      var katakanaName = romaji2katakana($this.text());
      var hue = Math.abs(adler32(katakanaName)) % 640;
      var gradient = 'linear-gradient(0deg, hsla(0, 0%, 0%, 0.1), hsla(0, 0%, 0%, 0.2) 50%, hsla(0, 0%, 100%, 0.2) 50%, hsla(0, 0%, 100%, 0.1)), hsla(' +
        ((hue % 320 + 80) % 360) + ', ' + (hue > 320 ? 100 : 75) + '%, 50%, 0.8)';
      
      $this = $this.addClass('durarara')
      .text(katakanaName)
      .parent();
      
      $this.prevAll('.avatar')
      .children('a')
      .css('background', 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" style="fill:white;font-size:30px" dominant-baseline="central" text-anchor="middle">' + katakanaName.charAt(0) + '</text></svg>') + '"), ' + gradient);
      
      if (!$this.parent().hasClass('message_me-command')) {
        $this.next().css('background', gradient);
      }
    });
  }

  var _processMessages = window.processMessages;
  window.processMessages = function () {
    _processMessages.apply(this, arguments);
    changeNames();
  };
  
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    for (var i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD;
      b = (b + a) % MOD;
    }
    return a | (b << 16);
  }
  
  document.title = 'Chatroom';
  changeNames();
}());