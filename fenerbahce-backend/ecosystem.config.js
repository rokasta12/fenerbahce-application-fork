module.exports = {
    apps: [
        {
            name: "fenerbahce-backend",
            script: "./node_modules/.bin/env-cmd",
            args: "-f config/.env node dist/main",
        },
    ],
};
