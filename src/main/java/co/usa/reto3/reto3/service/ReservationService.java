package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.repository.ReservationRepository;

/**
 * This class defines the operations that can be donde in the Table Reservations
 */
@Service
public class ReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    /**
     * This method returns all the elements of the table
     * 
     * @return an object with all the elements of the table
     */
    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    /**
     * This method return one element of the table
     * 
     * @param id: id of the element
     * @return an object with the element
     */
    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    /**
     * This method save a new entry on the table
     * 
     * @param newReservation: the element to save
     * @return
     */
    public Reservation save(Reservation newReservation) {
        // check if id is null
        if (newReservation.getIdReservation() == null) {
            newReservation.setStatus("created");
            return reservationRepository.save(newReservation);
        } else {
            Optional<Reservation> queryReservation = reservationRepository
                    .getReservation(newReservation.getIdReservation());

            if (queryReservation.isEmpty()) {
                return reservationRepository.save(newReservation);
            } else {
                return newReservation;
            }
        }
    }

    /**
     * This method delete by id an element of the table
     * 
     * @param id
     * @return
     */
    public boolean deleteReservation(int id) {
        Optional<Reservation> queryReservation = reservationRepository.getReservation(id);
        if (!queryReservation.isEmpty()) {
            reservationRepository.delete(queryReservation.get());
            return true;
        }
        return false;
    }

    /**
     * This method updates an element of the table
     * 
     * @param upReservation
     * @return
     */
    public Reservation update(Reservation upReservation) {
        if (upReservation.getIdReservation() != null) {
            Optional<Reservation> queryReservation = reservationRepository
                    .getReservation(upReservation.getIdReservation());
            if (!queryReservation.isEmpty()) {

                if (upReservation.getStartDate() != null) {
                    queryReservation.get().setStartDate(upReservation.getStartDate());
                }

                if (upReservation.getDevolutionDate() != null) {
                    queryReservation.get().setDevolutionDate(upReservation.getDevolutionDate());
                }

                if (upReservation.getAudience() != null) {
                    queryReservation.get().setAudience(upReservation.getAudience());
                }

                return reservationRepository.save(queryReservation.get());
            }
        }
        return upReservation;
    }
}
