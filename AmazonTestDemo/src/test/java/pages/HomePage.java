package pages;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import utils.BaseUtils;

public class HomePage extends BasePage {
    static final Logger log = LogManager.getLogger(HomePage.class);
    @FindBy(xpath = "")
            private WebElement mobileText;
    BaseUtils baseUtils;
    String url = "https://www.Amazon.co.in";
    public HomePage(WebDriver driver){
        super(driver);
    }

    By verifyHomePageText = By.xpath("//div[@id='nav-logo']/a");
    By menubutton = By.xpath("//div[@id ='nav-main']/div/a");
    By clickOnEle = By.xpath("//div[@id='hmenu-content']/ul/li/a[@class='hmenu-item']/div[text()='Mobiles, Computers']");
    By headerMobiles = By.xpath("//li/div[@class='hmenu-item hmenu-title '][contains(text(), 'Mobiles,')]");
    By clickOnMobiles = By.xpath("//li/a[text()='All Mobile Phones'='hmenu-item hmenu-title']");
    By loc2 =By.xpath("//li/span/a/span[text()='Smartphones & Basic Mobiles']");
    By subHeaderMobiles = By.xpath("//li[@class='a-spacing-micro']/span/span[contains(text(),'Mobiles & Accessories')]");
    By clickOnProduct=By.xpath("/li/span[@class='a-list-item']/a/span[contains(text(),'Smartphones & Basic Mobiles')]");
    By selectProduct = By.xpath("//div/span[text()= 'Brand']/../following-sibling::ul/li/span/a/span[text()='Samsung']");
    By productSpec = By.xpath("/div[@data-cy='title-recipe']/h2/a/span");
    By productPrice=By.xpath("//a/span[@class='a-price']/span");

    public void visitHomePage(){
        log.info("HomePage errors");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get(url);
        driver.manage().window().maximize();
    }
    public boolean verifyHomepage() {
        boolean result;
        try {
            result = driver.findElement(verifyHomePageText).isDisplayed();
        } catch (Exception e) {
            log.error("Exception occurred", new Exception("Captcha message"));
            takeScreenshot();
            result = false;
        }
        return result;
    }
    public void selectEleAndComp(){
        click(menubutton);
        waitUntilElementVisibile(clickOnEle);
        clickByjs(clickOnEle);
    }
    public void selectSubCategory(){
        waitUntilElementVisibile(headerMobiles);
        String str = find(headerMobiles).getText();
        Assert.assertTrue("Mobiles header mismatch", str.contains("Mobiles"));
        click(clickOnMobiles);
        Assert.assertTrue("", find(subHeaderMobiles).getText().contains("Mobiles"));
        waitUntilElementVisibile(clickOnProduct);
        click(clickOnProduct);
    }
    public void selectProduct(){
        waitUntilElementVisibile(selectProduct);
        click(selectProduct);


    }
    public void validateSPec(){
        waitUntilElementVisibile(productSpec);
        String actual = find(productSpec).getText();
        Assert.assertTrue("", actual.contains("\"50MP Triple Cam\""));
        waitUntilElementVisibile(productPrice);
        String actualPrice = find(productPrice).getText();
        Assert.assertTrue("", actualPrice.contains("50MP Triple Cam"));

    }
}