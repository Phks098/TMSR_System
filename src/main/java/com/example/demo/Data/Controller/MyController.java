package com.example.demo.Data.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MyController {
   
    @GetMapping("/")
    public String tt() {
        return "grander/index";
    }
   
    @GetMapping("/test")
    public String test(){
        return "test";
    }
   
    @GetMapping("/index")
    public String index(){
        return "index";
    }
}
