---
slug: "/blog/understanding-rabbitmq-dotnet-microservices"
title: 'Understanding RabbitMQ in .NET Microservices'
date: '2025-04-20'
description: 'An exploration of message-based communication between microservices'
---

So what is happening underneath when two microservices communicate with each other through RabbitMQ?

The [publisher service](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) (e.g: OrderService) creates a message containing data that other services might be interested in, such as information about a newly created order. Instead of directly calling other services, it publishes this message to a [message broker](https://en.wikipedia.org/wiki/Message_broker) - in our case, RabbitMQ. You can think of RabbitMQ as a post office that knows how to route messages to everyone who has subscribed to receive them.

When the publisher sends a message, it doesn't need to know who's receiving it. This decoupling is a key benefit of using message queues in distributed systems. The publisher simply formats the message (often as JSON) and sends it to RabbitMQ through a connection established using a client library like EasyNetQ.

What is this EasyNetQ library?  
EasyNetQ is a .NET client library that simplifies working with RabbitMQ. It abstracts away much of the complexity involved in setting up exchanges, queues, and bindings, allowing developers to focus on the business logic of their applications. Under the hood, EasyNetQ translates its simplified API calls into the appropriate RabbitMQ operations, managing connections, channels, and serialization for you.

So when our OrderService publishes an "OrderCreated" message, EasyNetQ creates a [topic exchange](https://www.rabbitmq.com/tutorials/tutorial-five-dotnet.html) named after the message type, and sends the message to this exchange. The exchange doesn't store messages - it's more like a traffic cop that knows how to route messages to the right queues based on routing patterns.

Meanwhile, the [subscriber services](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) (e.g: NotificationService) have already told RabbitMQ they're interested in certain types of messages. Each subscriber gets its own queue, and RabbitMQ creates bindings between the exchange and these queues. When a message arrives at the exchange, RabbitMQ makes a copy for each interested queue.

<div style="text-align:center"><img alt="RabbitMQ architecture" title="RabbitMQ architecture" src="https://www.cloudamqp.com/img/blog/exchanges-topic-fanout-direct.png" /></div>

But wait! How does RabbitMQ know how many messages to send to each subscriber at once? This is where the concept of prefetch count comes in. The prefetch count limits how many unacknowledged messages RabbitMQ will send to a consumer. For instance, if the prefetch count is set to 10, RabbitMQ will send up to 10 messages to a consumer before waiting for acknowledgments. This prevents fast publishers from overwhelming slow consumers, creating a natural form of back-pressure in the system.

When a subscriber successfully processes a message, it sends an acknowledgment back to RabbitMQ, letting the broker know it can remove that message from the queue. If a subscriber fails or crashes before acknowledging, RabbitMQ will eventually redeliver the message to another consumer (or the same one when it recovers).

One beautiful aspect of this architecture is that new subscribers can be added without changing any code in the publisher. If we wanted to add an InventoryService that also needs to know about new orders, it would simply subscribe to the same message type, and RabbitMQ would automatically start routing copies of the messages to it as well.

What's also interesting is that the exchange, queues, and bindings persist in RabbitMQ even when all services disconnect. This means when services restart, they don't need to recreate the entire messaging topology - they simply reconnect and resume publishing or consuming messages.

If you go over [here](https://www.rabbitmq.com/getstarted.html) you can learn more about RabbitMQ patterns!

That's it! Message queuing is just a way for distributed services to communicate asynchronously, making systems more resilient, scalable, and loosely coupled.