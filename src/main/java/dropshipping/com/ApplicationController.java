package dropshipping.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApplicationController {
    @Autowired
    @GetMapping("")
    public String viewHowPage(){
        return "homepage";}


}
