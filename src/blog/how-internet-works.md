---
slug: "/blog/how-internet-works"
title: 'How Internet Works'
date: '2019-09-07'
description: 'Underneath the Internet'
---

So what is happening underneath when we type "www.google.com" and hit the enter button?

The [browser](https://en.wikipedia.org/wiki/Web_browser) (Chrome, Safari, Opera, etc) sends the request to the [ISP](https://en.wikipedia.org/wiki/Internet_service_provider) (Internet Service Provider). If you dont know what an ISP is, ISPs are people that you pay so you can have the Internet. So if you are in India that's Airtel, Idea, BSNL, etc. If you're in the US that's Cogiko, Verizon. Depending on your country you have your big companies that make a lot of money from Internet users. So they get that request and they send that off to something called the [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) server so called Domain Name Servers.
Essentially it's a phone book - a phone book that has the list of all these URLs like "google.com" and it has the addresses of them. The DNS gives the address which is an [IP](https://en.wikipedia.org/wiki/IP_address) address.

What is an IP address???  
Every device that is connected to the internet whether it is a server, a computer, or a mobile phone is identified uniquely by a string of numbers known as an IP address. You can think of an IP address similar to your home address, that uniquely identifies your home. Any letter sent to you reaches you precisely because of your home address. Similarly in Internet, an IP address acts as shipping address through which all information reaches its destination. Your ISP will decide the IP address of your device and you are able to see what IP address has given to your mobile phone or laptop.

So the browser receives the IP address from DNS and sends off another request to the Google servers and it knows where the Google servers are because we have this address so we go seek it out. You can think of servers as computers essentially. My laptop could be a server, your computer could be a server. Servers are essentially computers that are sometimes in, you know, in basements or in huge server farms and they have a piece of software running that just like at a restaurant where a server brings you food. It knows how to send you files when you request for them. So we send this off and the Google servers say oh yeah no problem, let me give you information (HTML, CSS, JavaScript files) and oh yes! we are seeing the Google page in our browser!.

<div style="text-align:center"><img alt="How internet works" title="How internet works" src="https://www.m3isp.com/images/wireless-diagram.gif" /></div>

But wait! how the data receives from the server to our phone or laptop? is it through the thin air? well, the data is transferred in digital format via optical fiber cables, more specifically in the form of light pulses. These light pulses some time have to travel thousands of miles via optical fiber to reach their destination such as hilly area or under the sea. There are a few global companies who lay and maintain these optical cable networks. This complex optical cable network is the [backbone](https://en.wikipedia.org/wiki/Internet_backbone) of the internet. These cables carrying the light are stretched across the seabed to your doorstep where they connected to a router. The router converts the light signals to electrical signals. An Ethernet cable is then used to transmit the electrical signal to your laptop. However if you are accessing the internet using cellular data, from the optical cable the signal has to be sent to a cell tower and from the cell tower the signal reaches your mobile phone in the form of electromagnetic waves.

If you go over [here](https://www.submarinecablemap.com/) you can actually see the internet backbone!.

Thats it!. The Internet is just all these connected computers that are just transferring files between each other.

