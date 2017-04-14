#v2.0.4
FROM ubuntu:16.04
RUN apt-get update && apt-get install pciutils build-essential git -y  && rm -rf /var/lib/apt/lists/*
ADD . /opt
WORKDIR /opt

RUN chown -R www-data:www-data *

#RUN ln -s "/opt/gwan/0.0.0.0:80/#0.0.0.0/csp" /opt/csp

EXPOSE 80

CMD [ "/opt/start.sh" ]
