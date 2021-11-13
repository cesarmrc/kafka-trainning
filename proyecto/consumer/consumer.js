'use strict';
const db = require('nano')('http://admin:ace@localhost:5984/kafka');

const kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'my_topic', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

consumer.on('message', async (message) => {
    const record = {
        topic: message.topic,
        value: message.value,
        partition: message.partition
    };
    const id = message.offset.toString();
    await db.get(id, async (err, data) => {
        if (err !== null) {
            if (err.statusCode === 404) {
                const response = await db.insert(record, id);
                console.log(response);
            }
        }
    });
});