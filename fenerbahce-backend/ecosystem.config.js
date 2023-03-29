module.exports = {
    apps: [
        {
            name: "fenerbahce-backend",
            script: "./node_modules/.bin/env-cmd",
            args: "-f .env node dist/main",
        },
    ],
};
