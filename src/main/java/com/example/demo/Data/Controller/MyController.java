package com.example.demo.Data.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MyController {
   
  
   
    @GetMapping("/test")
    public String test(){
        return "grander/Notice/general_notice";
    }
   
    @GetMapping("/")
    public String index(){
        return "index";
 
    }

    @GetMapping("/table")
    public String teamTable(){
        return "grander/teamTable";
    }

    @GetMapping("/alarm")
    public String alaram(){
        return "grander/alarm";
    }

}
