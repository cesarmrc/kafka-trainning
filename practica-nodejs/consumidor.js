const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['0:9092', '1:9093', '2:9094']
})
async function init(){
    const consumer = kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'topico_particiones', fromBeginning: true })
    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
        value: message.value.toString(),
        topic,
        partition,
        })
    },
    })
}
init().then().catch();
