// config.js

const config = {
    telegramBotToken: 'YOUR_TELEGRAM_BOT_TOKEN',
    paymentMethods: ['BCA', 'DANA', 'QRIS'],
    priceRange: {
        min: 1000,
        max: 10000
    },
    codeSettings: {
        language: 'JavaScript',
        framework: 'Node.js'
    },
    uploadSettings: {
        maxFileSize: 10000000,
        allowedFileTypes: ['video/mp4', 'video/mkv']
    },
    rateLimiting: {
        maxRequestsPerMinute: 60
    },
    videoSettings: {
        resolution: '1080p',
        bitrate: '4500kbps'
    }
};

module.exports = config;