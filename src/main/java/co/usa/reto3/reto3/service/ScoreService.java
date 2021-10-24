package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Score;
import co.usa.reto3.reto3.repository.ScoreRepository;

@Service
public class ScoreService {
    @Autowired
    ScoreRepository scoreRepository;

    public List<Score> getAll() {
        return scoreRepository.getAll();
    }

    public Optional<Score> getScore(int id) {
        return scoreRepository.getScore(id);
    }

    public Score save(Score newScore) {
        // check if id is null
        if (newScore.getIdScore() == null) {
            return scoreRepository.save(newScore);
        } else {
            Optional<Score> queryScore = scoreRepository.getScore(newScore.getIdScore());

            if (queryScore.isEmpty()) {
                return scoreRepository.save(newScore);
            } else {
                return newScore;
            }
        }
    }
}
