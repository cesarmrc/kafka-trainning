# Modificar en los archivos de configuración las propiedades
```
broker.id

listeners

log.dir
```

## Crear un tópico con 3 réplicas

``` bash
sudo bin/kafka-topics.sh --create --topic topico_replicado --bootstrap-server localhost:9092 --replication-factor 3 --partitions 1
```

## Crear un tópico con 3 particiones

``` bash
sudo bin/kafka-topics.sh --create --topic topico_particiones --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3
```


## Revisar el estado de los topicos
``` bash
sudo bin/kafka-topics.sh --describe --topic topico_replicado --bootstrap-server localhost:9092
sudo bin/kafka-topics.sh --describe --topic topico_particiones --bootstrap-server localhost:9092
```