package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.JANUARY;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
            Student teste = new Student(
                    "Teste",
                    "email@email.com",
                    LocalDate.of(2000, JANUARY, 5)
            );
            Student teste2 = new Student(
                    "Teste2",
                    "email@email.com",
                    LocalDate.of(2000, JANUARY, 5)
            );
            repository.saveAll(
                    List.of(teste, teste2)
            );
        };
    }
}
