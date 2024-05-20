FROM ubuntu:latest
LABEL authors="jido"

ENTRYPOINT ["top", "-b"]