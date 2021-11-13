const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['0:9092', '1:9093', '2:9094']
})
const producer = kafka.producer()
async function init(){
    await producer.connect()
    await producer.send({
        topic: 'topico_particiones',
        messages: [
        { value: 'Hola amigos de kafka 1' },
        { value: 'Hola amigos de kafka 2' },
        { value: 'Hola amigos de kafka 3' },
        ],
    })
    await producer.disconnect()
}
init().then().catch();
