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
                kafkaHelper.send('my_topic', 'HOLA LOLA');
                return 'hello, world';
            }
        });
    }
};

module.exports = postEvent;