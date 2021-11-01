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

    public boolean deleteAudience(int id) {
        Optional<Audience> queryAudience = audienceRepository.getAudience(id);
        if (!queryAudience.isEmpty()) {
            audienceRepository.delete(queryAudience.get());
            return true;
        }
        return false;
    }

    public Audience update(Audience upAudience) {
        if (upAudience.getId() != null) {
            Optional<Audience> queryAudience = audienceRepository.getAudience(upAudience.getId());
            if (!queryAudience.isEmpty()) {

                if (upAudience.getName() != null) {
                    queryAudience.get().setName(upAudience.getName());
                }

                if (upAudience.getOwner() != null) {
                    queryAudience.get().setOwner(upAudience.getOwner());
                }

                if (upAudience.getCapacity() != null) {
                    queryAudience.get().setCapacity(upAudience.getCapacity());
                }

                if (upAudience.getDescription() != null) {
                    queryAudience.get().setDescription(upAudience.getDescription());
                }

                return audienceRepository.save(queryAudience.get());
            }
        }
        return upAudience;
    }
}
