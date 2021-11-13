'use strict';

const kafkaHelper = require("../helpers/kafkaHelper")({ kafkaHost: 'localhost:9092' });

const postEvent = {
    name: 'postEvent',
    version: '1.0.0',
    register: async function (server, options) {
        server.route({
            method: 'POST',
            path: '/event',
            handler: function (request, h) {
                const message = 'New message post ' + new Date().toISOString();
                kafkaHelper.send('my_topic', message);
                return message;
            }
        });
    }
};

module.exports = postEvent;