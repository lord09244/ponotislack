# ZAPY WebUI API (JS)

## 1. ZAPY WebUi Architecture :)

---

![Architecture_img01](https://s3-ap-southeast-1.amazonaws.com/resource.zapy.io/ZAP+client+Arc.png
"Android_and_Webui_Architecture_img01")

---

![Architecture_img02](https://s3-ap-southeast-1.amazonaws.com/resource.zapy.io/ZAP+client+Arc2.png
"Webui_Architecture_img02")

---

### Main Fucntion :)

- __[sendPayloadToAndroid](#sendPayloadToAndroid)__ - Call from WebUi for send command to android
- __[sendPayloadToWeb](#sendPayloadToWeb)__ - Callback on webui for receive payload when command is finish android call this function

---

## sendPayloadToAndroid

> ### window.zapy.sendPayloadToAndroid(String type, String key, String payload,String reqCode);
>
> > ### Parameters
> >
> >| Variable | Description |
> >| ------ | ----------- |
> >| type   | path to data files to supply the data that will be passed into templates. |
> >| key | engine to be used for processing templates. Handlebars is the default. |
> >| payload    | extension to be used for dest files. |
> >| reqCode    | extension to be used for dest files. |
Syntax Example

``` js
window.sendPayloadToWeb = (type, key, payload, reqCode) => {
      console.log(type + key + payload);
      this.stopPro();
      if (type == "IRX") {
        if (key == "USER_DATA") {
          var dataArr = payload.split(",");
          if (dataArr[0] == "true") {
            var userObject = {
              id: dataArr[1].split("U+002C").join(","),
              status: dataArr[2].split("U+002C").join(","),
              balance: dataArr[3].split("U+002C").join(","),
              firstName: dataArr[4].split("U+002C").join(","),
              lastName: dataArr[5].split("U+002C").join(","),
              phoneNumber: dataArr[6].split("U+002C").join(","),
              gender: dataArr[7].split("U+002C").join(","),
              jobTitle: dataArr[8].split("U+002C").join(","),
              company: dataArr[9].split("U+002C").join(","),
              nationality: dataArr[10].split("U+002C").join(","),
              dateOfBirth: dataArr[11].split("U+002C").join(","),
              score: dataArr[12].split("/"),
              lastTimeCheck: dataArr[13].split("U+002C").join(","),
              email: dataArr[14].split("U+002C").join(",")
            };
            this.$store.commit("addUserInfo", userObject);
            // this.$router.push("/luckydraw/start");
            if (userObject.lastName == "1") {
              this.$swal({
                title:
                  "<div style='font-size:14pt; font-weight:normal;margin-top:10px;'  >You have already claimed your gift. For complete Citi x Grab experience, apply for a Citi Grab Card today!" +
                  "<div style='margin-top:5px;font-weight:bold;' >" +
                  " </div></div>",
                text: "",
                //timer: 8000,
                showCloseButton: true
              }).then(() => {
                this.$router.push("/");
              });
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

## sendPayloadToWeb

> ### window.sendPayloadToWeb(String type, String key, String payload,String reqCode);
>
> > ### Parameters
> >
> >| Variable | Description |
> >| ------ | ----------- |
> >| type   | path to data files to supply the data that will be passed into templates. |
> >| key | engine to be used for processing templates. Handlebars is the default. |
> >| payload    | extension to be used for dest files. |
> >| reqCode    | extension to be used for dest files. |
Syntax Example

```js
function writeNfc(payload) {
    console.log(payload);
    window.zapy.sendPayloadToAndroid("IRX", "REGISTER", payload, "200"); // window.zapy.sendPayloadToAndroid("IRX", "CHECK_OUT", "")
}
```