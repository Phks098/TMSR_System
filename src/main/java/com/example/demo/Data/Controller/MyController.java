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
        return "grander/fullcalendar/full-height";
    }
   
    @GetMapping("/")
    public String index(){
        return "totalpage/index";
 
    }

    @GetMapping("/table")
    public String teamTable(){
        return "grander/teamTable";
    }

    @GetMapping("/input")
    public String alaram(){
        return "grander/modal_page/schedule_input";
    }
     @GetMapping("/main")
     public String main(){
        return "totalpage/main";
     }

}
