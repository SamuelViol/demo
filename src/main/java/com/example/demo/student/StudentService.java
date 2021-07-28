package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final  StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        return  studentRepository.findAll();
    }

    //buscar pelo id
    public Optional<Student>studentFindById(Long id){
        if(studentRepository.findById(id).isEmpty()){
            throw new IllegalStateException("id" + id + "não existe");
        }
        return studentRepository.findById(id);
    }

    //adicionar novo
    public void addNewStudent(Student student) {
        Optional<Student> studentOptional =
                studentRepository.findStudentByEmail(student.getEmail());
        if(studentOptional.isPresent()){
            throw new IllegalStateException("email ja utilizado");
        }
        studentRepository.save(student);
    }

    //deletar
    public void deleteStudent(Long studentId) {
       boolean exists = studentRepository.existsById(studentId);
       if(!exists){
           throw new IllegalStateException("id" + studentId + "não existe");
       }
       studentRepository.deleteById(studentId);
    }

    //atualizar
    @Transactional
    public void updateStudent(Long studentId, String name, String email, LocalDate dov) {
        Student student= studentRepository.findById(studentId).orElseThrow(() ->
                new IllegalStateException("não existe" + studentId)
        );

        if(name != null && name.length() > 0){
            student.setName(name);
        }
        if(email != null && email.length() > 0){
            Optional<Student> studentOptional =
                    studentRepository.findStudentByEmail(student.getEmail());
            if(studentOptional.isPresent()){
                throw new IllegalStateException("email ja utilizado");
            }
            student.setEmail(email);
        }
        if(dov != null){
            student.setDov(dov);
        }
    }
}
