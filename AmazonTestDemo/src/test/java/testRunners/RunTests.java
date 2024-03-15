package testRunners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
         features = {"src/test/resources/Features"},
         glue = {"steps"},
         plugin = {"pretty", "html:target/site/cucumber-pretty",
                 "json:target/cucumber.json",
                 "junit:target/JunitReports/report.xml"},
                  tags="@smoketest"


)
public class RunTests {
}
