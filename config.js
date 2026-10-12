require('dotenv').config();

const config = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://Adeel-xtech-55:Adeel03035512967@adeel5nsjs586.j50hsjxwhm.mongodb.net/?appName=Adejsjdhhel577586',

    DB_NAME: process.env.DB_NAME || 'zainu',

    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },

    AUTO_VIEW_STATUS: 'true',
    AUTO_STATUS_REACT: 'false',
    AUTO_STATUS_REPLY: 'false',
    STATUS_REPLY_MSG: '*_Your status viewed successfully by *𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽* 🤖_*',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '4.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© POWERED BY *𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '*𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*,
    ANTI_LINK: 'true',
    ANTI_LINK_ACTION: 'warn',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    CUSTOM_REACT: 'false',
    HEART_REACT: 'false',
    CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
    HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],
    OWNER_EMOJIS: ['❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🩷', '🤎', '🖤', '🩶', '🤍', '❤️‍🔥', '❤️‍🩹', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️'],
    REACT_EMOJIS: [
'❤️','🔥','👏','😮','😢','👍','🎉','🙏','😍','😊','🥰','💕','🤩','✨','😎','🥳','🙌',
'💖','💗','💓','💞','💘','💝','💟','❣️','♥️','❤️‍🔥','❤️‍🩹',
'🧡','💛','💚','🩵','💙','💜','🩷','🤍','🤎','🖤','🩶',
'🌹','🌺','🌸','💐','🌷','🪷','🌻','🌼',
'⭐','🌟','💫','✨','⚡','☀️','🌈','☄️',
'👑','💎','🏆','🥇','🎖️','🏅',
'🎁','🎀','🧸','🍫','🍭','🍬',
'🦋','🕊️','🦢','🦚','🦜','🐬','🐳','🐠',
'🍓','🍒','🍑','🍍','🥭','🍉','🍇',
'🎵','🎶','🎤','🎧','🎸','🎹',
'🚀','🛸','🌍','🌎','🌏','🌙','⭐',
'💯','✔️','✅','☑️','💥','💫','🫶','🤝','💪',
'🏖️','🌊','⛱️','🏝️','🌅','🌄',
'🎇','🎆','🎊','🎈','🎂','🍰','🧁',
'💌','📩','📨','💍','💐','🪄',
'🔮','🪙','💠','🔷','🔹','🔸','🔶',
'🕯️','🪔','🏵️','🎗️','🌠','🌌',
'🫰','🤲','🙌','🙏','💐','💝',
'♾️','☘️','🍀','🌿','🌱','🌴','🎋',
'🧿','🪬','💎','👑','🏰','🗝️'
] ,

    BOT_NAME: '*𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*',
    OWNER_NAME: '𝐙𝐀𝐈𝐍𝐔-🐍🪽',
    OWNER_NUMBER: '923128520558',
    DEV: '923128520558',
    BOT_IMAGE: 'https://https://i.ibb.co/C3kn3BmL/ERFAN-MD.jpg,
    NEWSLETTER_JID: '120363430842443087@newsletter',
    NEWSLETTER_NAME: '𝐙𝐀𝐈𝐍𝐔-𝐌𝐃',

    MAX_RETRIES: 50,
    OTP_EXPIRY: 300000,
    BANNED: [],
    SUDO: [
        "923128520558@s.whatsapp.net"
    ],

    DEFAULT_SETTINGS: {
        AUTO_VIEW_STATUS: 'true',
        AUTO_STATUS_SEEN: 'true',
        AUTO_STATUS_REACT: 'false',
        AUTO_STATUS_REPLY: 'false',
        STATUS_REPLY_MSG: '*_Your status viewed successfully by *𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*🤖_*',
        READ_MESSAGE: 'false',

        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        CUSTOM_REACT: 'false',
        HEART_REACT: 'false',
        CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
        HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],

        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'true',
        ANTI_LINK_ACTION: 'warn',

        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',

        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',

        VERSION: '4.0.0 Bᴇᴛᴀ',
        OWNER_NAME: '𝐙𝐀𝐈𝐍𝐔-🐍🪽',
        OWNER_NUMBER: '923128520558',
        DEV: '923128520558',
        DESCRIPTION: '*© POWERED BY *𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽**',
        STICKER_NAME: '*𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: 'A*𝐙𝛂͢ī֟፝ƞ፝͡ʊ ϻ֟፝𝛛 🐍🪽*',
        BOT_IMAGE: 'https://i.ibb.co/C3kn3BmL/ERFAN-MD.jpg',
        NEWSLETTER_JID: '120363430842443087@newsletter',
        NEWSLETTER_NAME: '𝐙𝐀𝐈𝐍𝐔-𝐌𝐃',

        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],

        BANNED: [],
        SUDO: [
            "923128520558@s.whatsapp.net"
        ]
    }
};

module.exports = config;
