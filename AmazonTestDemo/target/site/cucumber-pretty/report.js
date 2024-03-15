$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/homePage.feature");
formatter.feature({
  "name": "User journey for Mobile phones search",
  "description": "  As a User\n  I want to be able to search for Electronics and computers\n  So that I can see the results for the required products",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "List all the Samsung phones with the User given specifications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User landed on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cCategory\u003e\" from the Main menu",
  "keyword": "When "
});
formatter.step({
  "name": "selects \"\u003cSubCategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Selects the Mobile phones \"\u003cType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should see the results for \"Samsung\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Category",
        "SubCategory",
        "Type"
      ]
    },
    {
      "cells": [
        "Electronics and Computers",
        "Phones and Accessories",
        "Samsung"
      ]
    }
  ]
});
formatter.scenario({
  "name": "List all the Samsung phones with the User given specifications",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "User landed on the HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.HomepageStepDefs.user_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Electronics and Computers\" from the Main menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.HomepageStepDefs.user_selects_from_the_main_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"Phones and Accessories\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.HomepageStepDefs.selects(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/gp/browse.html?node\u003d1389401031\u0026amp;ref_\u003dnav_em_sbc_mobcomp_all_mobiles_0_2_8_2\" class\u003d\"hmenu-item\"\u003e...\u003c/a\u003e is not clickable at point (191, 166). Other element would receive the click: \u003cdiv id\u003d\"hmenu-content\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d122.0.6261.129)\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8cef60ca09d8db16bdeb4ca4fde18c6b, clickElement {id\u003df.73BD8D41D51094AF3ACE6E02A4567CCC.d.33178A0D025F42EDC731E3A68012EE9A.e.45}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.129, chrome: {chromedriverVersion: 122.0.6261.128 (f18a44fedeb..., userDataDir: C:\\Users\\crake\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51921}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:51921/devtoo..., se:cdpVersion: 122.0.6261.129, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (8cef60ca09d8db16bdeb4ca4fde18c6b)] -\u003e xpath: //li/a[text()\u003d\u0027All Mobile Phones\u0027\u003d\u0027hmenu-item hmenu-title\u0027]]\nSession ID: 8cef60ca09d8db16bdeb4ca4fde18c6b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat pages.BasePage.click(BasePage.java:32)\r\n\tat pages.HomePage.selectSubCategory(HomePage.java:63)\r\n\tat steps.HomepageStepDefs.selects(HomepageStepDefs.java:69)\r\n\tat ✽.selects \"Phones and Accessories\"(file:///C:/Users/crake/workspace/AmazonTestDemo/src/test/resources/Features/homePage.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Selects the Mobile phones \"Samsung\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.HomepageStepDefs.selects_the_mobile_phones(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the results for \"Samsung\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ProductStepDefs.user_should_see_the_results_for(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});