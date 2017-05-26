## Embeded app guide

To embed app there must be 3 part included

1. HTML tag that will be a container
    ```<div id="hcpd-container">loading...</div>```

2. Script link to a HCPD web app
    ```<script src="http://localhost:4444/main.js"></script>```

3. Script block to configure the app

    ```
    <script type="text/javascript">
        Hcpd.default({
            TCPD_APP_ID: "78f5390a4fdec70089e5923c"
        });
    </script>
    ```
    

   