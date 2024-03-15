package steps;

import io.cucumber.java.en.Then;
import pages.HomePage;
import utils.BaseUtils;

public class ProductStepDefs extends BaseUtils {
    BaseUtils baseUtils;
    HomePage homePage;
    public ProductStepDefs(BaseUtils baseUtils) {
        super();
        this.baseUtils = baseUtils;
        this.homePage = new HomePage(baseUtils.getDriver());
    }
    @Then("User should see the results for {string}")
    public void user_should_see_the_results_for(String string) {
       homePage.validateSPec();
    }
}
