package com.example.demo.Data.VO;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "User_Type_TB")
@Data
public class UserType {
    
    @Id
    @Column(name = "code")
    private int code;

    @Column(name = "type_name")
    private String typeName;
    
    // Getters, setters, and other methods...
    
}
