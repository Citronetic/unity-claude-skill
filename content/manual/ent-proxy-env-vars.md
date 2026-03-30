This version of Unity is unsupported.

Trusting the web proxy security certificate

Create a command file to set environment variables and open applications

# Use environment variables to identify your web proxy

If your environment doesn’t support automatic proxy configuration, you can use environment variables to identify your web proxy.

`HTTP_PROXY` and `HTTPS_PROXY` are the environment variables you’ll use to identify your web proxy. If your enterprise uses a Unity Licensing Server, set the `NO_PROXY` environment variable as well. Whether you set these environment variables manually or use a more scalable method, they must be set on each device that communicates through the web proxy.

**Important**: Specifying proxy configuration in environment variables will override automatic proxy configuration.

The environment variables you use and the values you assign vary, based on your environment. Use the guidance in the following section or sections that best describe your situation.

### Proxy environment variable values that exclude authentication information

If your environment variable definitions can exclude authentication information, the proxy value takes the following form:

```html
http://<proxy_name_or_IP_address>:<proxy_port>
```

Example:

```html
http://webproxy.mycompany.com:8080
```

### Proxy environment variable values that include authentication information

**Important**: Passwords are insecure if you use them in environment variables.

If your environment variable definitions need to include authentication information, the proxy value takes the following form:

```html
http://<username>:<password>@<proxy_name_or_IP_address>:<proxy_port>
```

Example:

```html
http://DanaLee:My1337password@webproxy.mycompany.com:8080
```

### Proxy environment variable value for Unity Licensing Server

If your enterprise uses a Unity Licensing Server, set the `NO_PROXY` environment variable by assigning the host name or IP address of your licensing server. Make sure you assign only the host name or IP address, omitting any protocol of port number. For example, if your licensing server’s address is `http://unitylicense.mydomain.com:8080`, set the `NO_PROXY` environment variable as follows:

```shell
NO_PROXY=unitylicense.mydomain.com
```

## Next steps

Different operating systems have multiple methods for setting environment variables. However, creating a command file is one method that works on all operating systems sets the environment variables each session.

Now that you know which environment variables to use for your environment and how to set their values, use them to [create a command file](ent-proxy-cmd-file.html).

## Additional resources

- [Using Unity through web proxies](ent-proxy-autoconfig.html)

- [Unity Licensing Server](https://docs.unity3d.com/licensing/manual/index.html)

Trusting the web proxy security certificate

Create a command file to set environment variables and open applications
