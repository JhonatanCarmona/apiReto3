package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Audience;
import co.usa.reto3.reto3.repository.AudienceRepository;

@Service
public class AudienceService {
    @Autowired
    private AudienceRepository audienceRepository;

    public List<Audience> getAll() {
        return audienceRepository.getAll();
    }

    public Optional<Audience> getAudience(int id) {
        return audienceRepository.getAudience(id);
    }

    public Audience save(Audience newAudience) {
        // check if id is null
        if (newAudience.getId() == null) {
            return audienceRepository.save(newAudience);
        } else {
            Optional<Audience> queryAudience = audienceRepository.getAudience(newAudience.getId());

            if (queryAudience.isEmpty()) {
                return audienceRepository.save(newAudience);
            } else {
                return newAudience;
            }
        }
    }
}
