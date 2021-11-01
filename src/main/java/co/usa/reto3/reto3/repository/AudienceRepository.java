package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.repository.crud.AudienceCrudRepository;
import co.usa.reto3.reto3.model.Audience;

@Repository
public class AudienceRepository {

    @Autowired
    private AudienceCrudRepository audienceCrudRepository;

    public List<Audience> getAll() {
        return (List<Audience>) audienceCrudRepository.findAll();
    }

    public Optional<Audience> getAudience(int id) {
        return audienceCrudRepository.findById(id);
    }

    public Audience save(Audience newAudience) {
        return audienceCrudRepository.save(newAudience);
    }

    public void delete(Audience audience) {
        audienceCrudRepository.delete(audience);
    }
	

}
