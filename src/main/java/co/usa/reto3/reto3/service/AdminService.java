package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Admin;
import co.usa.reto3.reto3.repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public List<Admin> getAll() {
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id) {
        return adminRepository.getAdmin(id);
    }

    public Admin save(Admin newAdmin) {
        // check if id is null
        if (newAdmin.getIdAdmin() == null) {
            return adminRepository.save(newAdmin);
        } else {
            Optional<Admin> queryAdmin = adminRepository.getAdmin(newAdmin.getIdAdmin());

            if (queryAdmin.isEmpty()) {
                return adminRepository.save(newAdmin);
            } else {
                return newAdmin;
            }
        }
    }
}
