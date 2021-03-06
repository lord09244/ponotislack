# ZAPY WebUI API (JS)

```bash


███████╗ █████╗ ██████╗ ██╗   ██╗    ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
╚══███╔╝██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
  ███╔╝ ███████║██████╔╝ ╚████╔╝     ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
 ███╔╝  ██╔══██║██╔═══╝   ╚██╔╝      ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
███████╗██║  ██║██║        ██║       ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚══════╝╚═╝  ╚═╝╚═╝        ╚═╝       ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝

```

## 1. ZAPY WebUi Architecture :)

---

![Architecture_img01](https://s3-ap-southeast-1.amazonaws.com/resource.zapy.io/ZAP+client+Arc.png
"Android_and_Webui_Architecture_img01")

---

![Architecture_img02](https://s3-ap-southeast-1.amazonaws.com/resource.zapy.io/ZAP+client+Arc2.png
"Webui_Architecture_img02")

---

## Mode :)

```bash

Now zapy we have 5 mode but in timeline 125478 mode

```

| MODE | Description |
| ------ | ----------- |
| Ent   | .... |
| Regis | .... |
| Game    | .... |
| Cashless    | .... |
| Redemption Point    | .... |
---

## Main Fucntion :)

- __[sendPayloadToAndroid](#sendPayloadToAndroid)__ - Call from WebUi for send command to android
- __[sendPayloadToWeb](#sendPayloadToWeb)__ - Callback on webui for receive payload when command is finish android call this function

---

### sendPayloadToAndroid

> ### window.zapy.sendPayloadToAndroid(String type, String key, String payload,String reqCode);
>
> **Parameters**
>
>| Variable | Description |
>| ------ | ----------- |
>| type   | .... |
>| key | ..... |
>| payload    | ..... |
>| reqCode    | ...... |
Syntax Example

``` js
window.sendPayloadToWeb = (type, key, payload, reqCode) => {
      console.log(type + key + payload);
      this.stopPro();
      if (type == "IRX") {
        if (key == "USER_DATA") {
          // do someting
            } else {
              // do someting
              } else {
                this.$swal({
                  title:
                    "<div style='font-size:14pt; font-weight:normal;margin-top:10px;'  >Please try the other areas to complete all 400 points and receive your gift" +
                    "<div style='margin-top:5px;font-weight:bold;' >" +
                    " </div></div>",
                  text: "",
                  //timer: 8000,
                  showCloseButton: true
                }).then(() => {
                  this.$router.push("/");
                });
              }
            }
          } else {
            if (dataArr[1] == "empty") {
              this.alertError();
            } else {
              //this.readProgile();
              this.alertError();
            }
          }
        } else if (key == "REGISTER") {
          // do someting
        } else {
          //this.readProgile();
          this.alertError();
        }
      }
    };
```

### sendPayloadToWeb

> ### window.sendPayloadToWeb(String type, String key, String payload,String reqCode);
>
> **Parameters**
>
>| Variable | Description |
>| ------ | ----------- |
>| type   | ....... |
>| key | ....... |
>| payload    | ....... |
>| reqCode    | ....... |
Syntax Example

```js
function writeNfc(payload) {
    console.log(payload);
    window.zapy.sendPayloadToAndroid("IRX", "REGISTER", payload, "200"); // window.zapy.sendPayloadToAndroid("IRX", "CHECK_OUT", "")
}
```

## List of Commands :)

### TYPE

#### "IRX"

>|          | KEY      | PAYLOAD | FLOW    |    MODE    |
>|----------|----------|---------|---------|------------|
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |

#### "GET"

>|          | KEY      | PAYLOAD | FLOW    |    MODE    |
>|----------|----------|---------|---------|------------|
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
>| REQUEST  | CHECK_IN | READ    | url_img |            |
>| RESPONSE | CHECK_IN | READ    | url_img |            |
