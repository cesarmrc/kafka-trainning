'use strict';

const kafka = require('kafka-node');

class KafkaHelper {
    kafkaClientOptions = null;
    client = null;
    producer = null;
    constructor(options) {
        this.kafkaClientOptions = options;
        this.client = new kafka.KafkaClient(this.kafkaClientOptions);
        this.producer = new kafka.Producer(this.client);
    }
    send(topic, message) {
        this.producer.send([{
            topic: topic,
            messages: message,
            partition: 0
        }], (err, data) => {
            console.log(data);
            if (err !== null) {
                console.log(err);
            }
        });
    }
}

module.exports = options => new KafkaHelper(options);