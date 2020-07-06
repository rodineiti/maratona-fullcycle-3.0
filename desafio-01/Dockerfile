FROM golang:1.14

WORKDIR /go/src/

COPY . .

RUN go build -o main .

ENTRYPOINT ["./main"]
