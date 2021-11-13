cd /usr/local/bin/kafka
sudo bin/kafka-topics.sh --create --topic my_topic --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
sudo bin/kafka-topics.sh --create --topic topico_replicado --bootstrap-server localhost:9092 --replication-factor 3 --partitions 1
sudo bin/kafka-topics.sh --create --topic topico_particiones --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3