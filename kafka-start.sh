cd /usr/local/bin/kafka
sudo bin/kafka-server-start.sh config/server-0.properties &
sudo bin/kafka-server-start.sh config/server-1.properties &
sudo bin/kafka-server-start.sh config/server-2.properties &
