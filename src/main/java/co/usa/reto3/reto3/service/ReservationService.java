package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.repository.ReservationRepository;

@Service
public class ReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation newReservation) {
        // check if id is null
        if (newReservation.getIdReservation() == null) {
            newReservation.setStatus("created");
            return reservationRepository.save(newReservation);
        } else {
            Optional<Reservation> queryReservation = reservationRepository.getReservation(newReservation.getIdReservation());

            if (queryReservation.isEmpty()) {
                return reservationRepository.save(newReservation);
            } else {
                return newReservation;
            }
        }
    }
}
