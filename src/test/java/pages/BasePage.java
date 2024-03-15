package pages;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.openqa.selenium.*;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.Duration;

public class BasePage{
    public WebDriver driver;
    public BasePage(WebDriver driver){
        this.driver=driver;
    }

    public void waitUntilElementVisibile(By by){
        WebDriverWait wait =new WebDriverWait(driver, Duration.ofSeconds(15));
        wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    public WebElement find(By by){
        return driver.findElement(by);
    }
    public void scrollBottomOfPAge(WebElement element){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView[false];", element);
    }

    public void click(By by){
        WebElement element = driver.findElement(by);
        element.click();
    }
   public void clickByjs(By by){
       WebDriverWait wait =new WebDriverWait(driver, Duration.ofSeconds(15));
       wait.until(ExpectedConditions.elementToBeClickable(by));
        WebElement ele = driver.findElement(by);
        JavascriptExecutor executor = (JavascriptExecutor)  driver;
        executor.executeScript("arguments[0].click();", ele);
   }
   //Take screenshots
    public void takeScreenshot(){
        File f =((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            // we can move this hardcoded path to config files
            Files.copy(f.toPath(), new File("C:\\Users\\crake\\Downloads\\screenShot.jpg").toPath());
        } catch (IOException e) {
           throw new RuntimeException(e);
        }
    }
    //Handling Captcha
    public void validateCaptcha() throws IOException, TesseractException {

        File src = driver.findElement(By.xpath("//div/img[1]")).getScreenshotAs(OutputType.FILE);
        String path = System.getProperty("user.dir") + "/screenshots/captcha.png";
        FileHandler.copy(src, new File(path));
        ITesseract image = new Tesseract();
        String imageText = image.doOCR(new File(path));
        //System.out.println("image text: " + imageText);

    }
}