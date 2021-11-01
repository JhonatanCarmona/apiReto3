package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.repository.crud.AdminCrudRepository;
import co.usa.reto3.reto3.model.Admin;

@Repository
public class AdminRepository {

    @Autowired
    private AdminCrudRepository adminCrudRepository;

    public List<Admin> getAll() {
        return (List<Admin>) adminCrudRepository.findAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminCrudRepository.findById(id);
    }

    public Admin save(Admin newAdmin) {
        return adminCrudRepository.save(newAdmin);
    }

    public void delete(Admin admin) {
        adminCrudRepository.delete(admin);
    }
	

}
