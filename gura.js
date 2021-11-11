 /*
 RECODE BY     I T S U K I (kangabut)
 KALAU MAU RECODE DI I T S U K I.js
 CREATOR GURA
 YG HAPUS TEXT INI SEMOGA ERROR
 INI UDH GW BUKA ENC NYA:V
 */
 
const _0xe27ee1 = _0x3a47;
(function (_0x49e21a, _0x124694)
{
    const _0x15969b = _0x3a47
        , _0x27978c = _0x49e21a();
    while (!![])
    {
        try
        {
            const _0x4df881 = -parseInt(_0x15969b(0x1aa)) / 0x1 * (parseInt(_0x15969b(0x1c2)) / 0x2) + -parseInt(_0x15969b(0x1c9)) / 0x3 * (-parseInt(_0x15969b(0x1c0)) / 0x4) + parseInt(_0x15969b(0x1a2)) / 0x5 * (parseInt(_0x15969b(0x1a6)) / 0x6) + -parseInt(_0x15969b(0x1ae)) / 0x7 + parseInt(_0x15969b(0x1c1)) / 0x8 * (-parseInt(_0x15969b(0x1c5)) / 0x9) + -parseInt(_0x15969b(0x1b8)) / 0xa + parseInt(_0x15969b(0x198)) / 0xb;
            if (_0x4df881 === _0x124694) break;
            else _0x27978c['push'](_0x27978c['shift']());
        }
        catch (_0x4a192f)
        {
            _0x27978c['push'](_0x27978c['shift']());
        }
    }
}(_0x3215, 0xcaf16));
const
{
    WAConnection: _WAConnection
    , MessageType
    , Presence
    , Mimetype
    , Browsers
    , GroupSettingChange
} = require('@adiwajshing/baileys'), simple = require(_0xe27ee1(0x1b6));
let WAConnection = simple[_0xe27ee1(0x1b9)](_WAConnection)
    , GuraFinx = new WAConnection();

function _0x3215()
{
    const _0x407eeb = ['fs-extra', '5wIGyZq', 'textSync', 'cyan', 'I T S U K I', '5874648uQMAhd', 'MENGHUBUNGKAN....!!', 'default', 'base64EncodedAuthInfo', '338tsbohV', 'browserDescription', 'sendMessage', 'stringify', '5572889PmuoKv', 'Firefox', 'level', 'parse', 'The Edge', 'writeFileSync', 'unknown', 'blockUser', './lib/simple', '.json', '13289960bCgWgv', 'WAConnection', '[UPDATE]', './gura.js', 'group-participants-update', 'OWNER AKTIF SEKARANG!..', 'connect', 'red', '17564eoDdfQ', '224qqvXNq', '4078wCayIB', './lib/loader', 'version', '229122UTmQLc', 'SCAN QR NYA BRO....!', 'existsSync', 'yellow', '873mtZsCX', 'green', 'CB:action,,call', 'BOT SUDAH TERHUBUNG!', 'from', 'BOT TIDAK MENERIMA CALL', 'readFileSync', '3.0.0', 'Diubah!', './I T S U K I.js', '23116434WxGOMq', 'sessionName', '[ I T S U K I ]', 'open', 'loadAuthInfo', 'add', 'log', 'I T S U K I', 'warn'];
    _0x3215 = function ()
    {
        return _0x407eeb;
    };
    return _0x3215();
}
const
{
    color
    , bgcolor
} = require('./lib/warna'), fs = require(_0xe27ee1(0x1a1)), figlet = require('figlet')
, {
    uncache
    , nocache
} = require(_0xe27ee1(0x1c3)), welcome = require('./detect/group'), setting = JSON[_0xe27ee1(0x1b1)](fs[_0xe27ee1(0x194)]('./setting.json'));
baterai = _0xe27ee1(0x1b4), charging = 'unknown', require('./I T S U K I.js'), nocache('../I T S U K I.js', _0x48b814 => console[_0xe27ee1(0x19e)](color(_0xe27ee1(0x1ba), _0xe27ee1(0x1a4)), color('\'' + _0x48b814 + '\'', _0xe27ee1(0x1ca)), _0xe27ee1(0x196))), require(_0xe27ee1(0x1bb)), nocache('../gura.js', _0x38426a => console[_0xe27ee1(0x19e)](color(_0xe27ee1(0x1ba), _0xe27ee1(0x1a4)), color('\'' + _0x38426a + '\'', _0xe27ee1(0x1ca)), _0xe27ee1(0x196)));
const starts = async (_0x525973 = new WAConnection()) =>
{
    const _0x203dfb = _0xe27ee1;
    _0x525973['logger'][_0x203dfb(0x1b0)] = _0x203dfb(0x1a0), _0x525973[_0x203dfb(0x1c4)] = [0x2, 0x85f, 0x3], console[_0x203dfb(0x19e)](color(figlet[_0x203dfb(0x1a3)]('ITSUKI'
    , {
        'font': _0x203dfb(0x1b2)
        , 'horizontalLayout': _0x203dfb(0x1a8)
        , 'vertivalLayout': _0x203dfb(0x1a8)
        , 'width': 0x50
        , 'whitespaceBreak': ![]
    }), 'cyan')), console[_0x203dfb(0x19e)](bgcolor(_0x203dfb(0x1a5), _0x203dfb(0x1bf))), console[_0x203dfb(0x19e)](color('[ OWNER ]', _0x203dfb(0x1a4)), color(_0x203dfb(0x1bd), _0x203dfb(0x1ca))), _0x525973[_0x203dfb(0x1ab)] = [_0x203dfb(0x19f), _0x203dfb(0x1af), _0x203dfb(0x195)], _0x525973['on']('qr', () =>
    {
        const _0x295be5 = _0x203dfb;
        console['log'](color('[', 'white'), color('!', 'red'), color(']', 'white'), color(_0x295be5(0x1c6)));
    }), fs[_0x203dfb(0x1c7)]('./' + setting['sessionName'] + '.json') && _0x525973[_0x203dfb(0x19c)]('./' + setting['sessionName'] + _0x203dfb(0x1b7)), _0x525973['on']('connecting', () =>
    {
        const _0x16cd06 = _0x203dfb;
        console[_0x16cd06(0x19e)](color(_0x16cd06(0x19a), _0x16cd06(0x1c8)), color(_0x16cd06(0x1a7)));
    }), _0x525973['on'](_0x203dfb(0x19b), () =>
    {
        const _0x682093 = _0x203dfb;
        console[_0x682093(0x19e)](color(_0x682093(0x19a), _0x682093(0x1c8)), color(_0x682093(0x1cc)));
    }), await _0x525973[_0x203dfb(0x1be)](
    {
        'timeoutMs': 0x1e * 0x3e8
    }), fs[_0x203dfb(0x1b3)]('./' + setting[_0x203dfb(0x199)] + _0x203dfb(0x1b7), JSON[_0x203dfb(0x1ad)](_0x525973[_0x203dfb(0x1a9)](), null, '\x09')), _0x525973['on'](_0x203dfb(0x1cb), async _0x15fc84 =>
    {
        const _0x3c924a = _0x203dfb
            , _0x27c1b9 = _0x15fc84[0x2][0x0][0x1][_0x3c924a(0x1cd)];
        _0x525973[_0x3c924a(0x1ac)](_0x27c1b9, _0x3c924a(0x193), MessageType['text']), await _0x525973[_0x3c924a(0x1b5)](_0x27c1b9, _0x3c924a(0x19d));
    }), _0x525973['on'](_0x203dfb(0x1bc), async _0x236f99 =>
    {
        await welcome(_0x525973, _0x236f99);
    }), _0x525973['on']('chat-update', async _0x23c827 =>
    {
        const _0x5ba524 = _0x203dfb;
        require(_0x5ba524(0x197))(_0x525973, _0x23c827);
    });
};

function _0x3a47(_0x2390e1, _0x337f1b)
{
    const _0x321552 = _0x3215();
    return _0x3a47 = function (_0x3a4766, _0x29d975)
    {
        _0x3a4766 = _0x3a4766 - 0x193;
        let _0x425b10 = _0x321552[_0x3a4766];
        return _0x425b10;
    }, _0x3a47(_0x2390e1, _0x337f1b);
}
starts();
